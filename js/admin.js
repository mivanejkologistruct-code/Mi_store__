"use strict";

const STORE_KEY = "mi_store_products_v2";
const ADMIN_KEY = "mi_store_admin_until"; // timestamp до якого авторизовано
const PIN_VALUE = "123456";               // твій PIN

/* ========= Утиліти ========= */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const now = () => Date.now();
const dayMs = 24*60*60*1000;

function authed(){ const t = Number(localStorage.getItem(ADMIN_KEY)||0); return t && t>now(); }
function setAuthed(){ localStorage.setItem(ADMIN_KEY, String(now()+dayMs)); }
function clearAuthed(){ localStorage.removeItem(ADMIN_KEY); }

function getProducts(){ try{ return JSON.parse(localStorage.getItem(STORE_KEY)||"[]") }catch{ return [] } }
function setProducts(list){ localStorage.setItem(STORE_KEY, JSON.stringify(list)); }
const sumStock = p => Object.values(p.stock||{}).reduce((s,v)=>s+(+v||0),0);

function ensureSeed(){
  if (getProducts().length) return;
  // якщо головна ще не відкривалась, задамо мінімум
  const seed = [
    { id:"v1", name:"Verikoh 01", category:"verikoh",
      priceBase:890, promoPrice:850, promoEligible:true,
      img:"./images/products/v1a.jpg",
      sizes:["XL","2XL","3XL","4XL"], stock:{ XL:12,"2XL":10,"3XL":8,"4XL":6 } },
  ];
  setProducts(seed);
}

/* ========= PIN Gate ========= */
function showAdmin(){ $("#pin-gate").style.display="none"; $("#admin").style.display="block"; }
function showPin(){ $("#pin-gate").style.display="grid"; $("#admin").style.display="none"; }

document.addEventListener("DOMContentLoaded", ()=>{
  ensureSeed();

  // PIN екрани
  if (authed()) showAdmin(); else showPin();
  $("#pin-ok").addEventListener("click", ()=>{
    if ($("#pin").value.trim() === PIN_VALUE){ setAuthed(); showAdmin(); }
    else alert("Невірний PIN");
  });
  $("#logout").addEventListener("click", ()=>{ clearAuthed(); showPin(); });

  /* ======= Таблиця ======= */
  function renderRows(){
    const cat = $("#filterCat").value;
    const q   = $("#search").value.trim().toLowerCase();
    const rows = $("#rows");
    const data = getProducts()
      .filter(p => cat==="all" ? true : p.category===cat)
      .filter(p => q ? (`${p.name} ${p.id}`.toLowerCase().includes(q)) : true);

    rows.innerHTML = data.map(p=>`
      <tr data-id="${p.id}">
        <td><code>${p.id}</code></td>
        <td>${p.name}</td>
        <td><span class="badge">${p.category}</span></td>
        <td><b>${p.priceBase}</b></td>
        <td>${p.promoPrice}</td>
        <td>${p.promoEligible ? "так" : "ні"}</td>
        <td>${sumStock(p)}</td>
        <td>
          <button class="btn ghost edit">Редагувати</button>
          <button class="btn ghost delete" style="border-color:#b00020;color:#b00020;background:#fff">Видалити</button>
        </td>
      </tr>
    `).join("");
  }

  function nextId(base="v"){
    const all = getProducts().map(p=>p.id);
    let n = 1;
    while (all.includes(`${base}${n}`)) n++;
    return `${base}${n}`;
  }

  function fillForm(p){
    $("#formTitle").textContent = p ? `Редагувати: ${p.id}` : "Додати товар";
    $("#editingId").value = p?.id || "";
    $("#fName").value = p?.name || "";
    $("#fCat").value = p?.category || "verikoh";
    $("#fImg").value = p?.img || "";
    $("#fPriceBase").value = (p?.priceBase ?? "");
    $("#fPromoPrice").value = (p?.promoPrice ?? "");
    $("#fPromoElig").checked = !!p?.promoEligible;
    $("#sXL").value  = p?.stock?.XL   ?? 0;
    $("#s2XL").value = p?.stock?.["2XL"]?? 0;
    $("#s3XL").value = p?.stock?.["3XL"]?? 0;
    $("#s4XL").value = p?.stock?.["4XL"]?? 0;
  }

  function collectForm(){
    const idEditing = $("#editingId").value;
    const name = $("#fName").value.trim();
    const category = $("#fCat").value;
    const img = $("#fImg").value.trim() || "./images/logo.png";
    const priceBase = Number($("#fPriceBase").value || 0);
    const promoPrice = Number($("#fPromoPrice").value || priceBase);
    const promoEligible = $("#fPromoElig").checked;

    const stock = {
      XL:  Number($("#sXL").value  || 0),
      "2XL":Number($("#s2XL").value || 0),
      "3XL":Number($("#s3XL").value || 0),
      "4XL":Number($("#s4XL").value || 0),
    };
    const sizes = Object.keys(stock).filter(k => stock[k] > 0);

    if (!name) { alert("Вкажіть назву"); return null; }
    if (!priceBase) { alert("Вкажіть базову ціну"); return null; }

    const id = idEditing || nextId(category==="verikoh"?"v":"o");
    return { id, name, category, img, priceBase, promoPrice, promoEligible, sizes, stock };
  }

  $("#search").addEventListener("input", renderRows);
  $("#filterCat").addEventListener("change", renderRows);
  $("#rows").addEventListener("click", (e)=>{
    const tr = e.target.closest("tr[data-id]"); if (!tr) return;
    const id = tr.dataset.id;
    const list = getProducts();
    const item = list.find(p=>p.id===id);

    if (e.target.closest(".edit")) {
      fillForm(item); window.scrollTo({top:0,behavior:"smooth"});
    }
    if (e.target.closest(".delete")) {
      if (!confirm(`Видалити ${item.name}?`)) return;
      setProducts(list.filter(p=>p.id!==id)); renderRows(); fillForm(null);
    }
  });

  $("#save").addEventListener("click", ()=>{
    const data = collectForm(); if (!data) return;
    const list = getProducts();
    const idx = list.findIndex(p=>p.id===data.id);
    if (idx>=0) list[idx] = data; else list.push(data);
    setProducts(list); renderRows(); fillForm(null);
    alert("Збережено ✅");
  });
  $("#cancel").addEventListener("click", ()=> fillForm(null));

  $("#export").addEventListener("click", ()=>{
    const blob = new Blob([JSON.stringify(getProducts(), null, 2)], {type:"application/json"});
    const url = URL.createObjectURL(blob); const a = document.createElement("a");
    a.href = url; a.download = "products.json"; a.click(); URL.revokeObjectURL(url);
  });
  $("#importFile").addEventListener("change", (e)=>{
    const f = e.target.files?.[0]; if (!f) return;
    const r = new FileReader();
    r.onload = ()=>{ try{
      const parsed = JSON.parse(r.result);
      if (!Array.isArray(parsed)) throw new Error("Неправильний формат");
      setProducts(parsed); renderRows(); fillForm(null); alert("Імпортовано ✅");
    }catch(err){ alert("Помилка імпорту: " + err.message); } };
    r.readAsText(f); e.target.value="";
  });

  renderRows(); fillForm(null);
});
