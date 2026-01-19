/* ===== Config ===== */
const ADMIN_PIN = '123456';
const CURRENT_PRICE = 850;
const OLD_PRICE = 890;
const OLD_PRICE_PREMIUM = 1090;
const PRICE_DELTA = OLD_PRICE - CURRENT_PRICE;
const KIT_PRICE = CURRENT_PRICE;
const KIT_OLD_PRICE = OLD_PRICE;
const PACK_DEFAULT = 4;
const MUST_HAVE_IDS = ['v2','v3','v9'];
const PACK_OPTIONS_STANDARD = [2,4];
const PACK_OPTIONS_FIVE = [5];
const COMPOSITION_VERICOH = 'Склад: 70% бавовна, 22% бамбукове волокно, 8% спандекс 🧵';
const COMPOSITION_V2 = 'Склад: 88% поліамід, 12% еластан · перфорація для вентиляції';
const COMPOSITION_V395 = 'Склад: 95% бавовна, 5% еластан — максимально м’які';
const COMPOSITION_THERMO = 'Склад: 62% бавовна, 30% поліестер, 8% еластан — утеплений шар для холоду';
const VERICOH_DETAIL = 'Vericoh шиє базу та преміум лінійки на фабриці в Гуандуні. Плоскі шви, м’який пояс, еластан до 12% — тканина не перекручується, зберігає форму після прання і не тисне в русі.';
const numberFormatter = new Intl.NumberFormat('uk-UA');
const formatCurrency = value => `${numberFormatter.format(Math.round(value || 0))} грн`;
const formatNumber = value => numberFormatter.format(Math.round(value || 0));
const cloneSizes = sizes => Array.isArray(sizes) ? [...sizes] : [];
const makeAvailability = sizes => cloneSizes(sizes).reduce((acc, size) => {
  acc[size] = true;
  return acc;
}, {});
const XL_SIZES = ['XL','2XL','3XL','4XL'];
const SPORT_SIZES = ['M','L','XL','2XL','3XL'];
const THERMO_SIZES = ['S','M','L','XL','2XL','3XL'];
const THERMO_PRICE = 890;
const THERMO_OLD_PRICE = 990;

/* ===== Products ===== */
const BASE_PRODUCTS = [
  {id:'v1',brand:'MI_STORE',name:'Vericoh Graphite Base',packSize:4,packOptions:PACK_OPTIONS_STANDARD,price:850,oldPrice:890,images:['images/products/v1a.jpg','images/products/v1b.jpg'],tags:['vericoh','basic'],sizes:[...XL_SIZES],availability:makeAvailability(XL_SIZES),badge:'Хіт',material:COMPOSITION_VERICOH,description:'Графітові боксерки з чистим поясом і гладкими швами на кожен день.'},
  {id:'v2',brand:'MI_STORE',name:'Airflow Ice',packSize:5,packOptions:PACK_OPTIONS_FIVE,price:990,oldPrice:1090,images:['images/products/v2a.jpg','images/products/v2b.jpg'],tags:['vericoh','perforated'],sizes:[...XL_SIZES],availability:makeAvailability(XL_SIZES),badge:'Must have',material:COMPOSITION_V2,description:'Перфорована тканина з охолодженням для тренувань та літа.'},
  {id:'v3',brand:'MI_STORE',name:'Classic Navy',packSize:5,packOptions:PACK_OPTIONS_FIVE,price:990,oldPrice:1090,images:['images/products/v3a.jpg','images/products/v3b.jpg'],tags:['vericoh','classic'],sizes:[...XL_SIZES],availability:makeAvailability(XL_SIZES),material:COMPOSITION_V395,description:'Темний класичний сет з 95% бавовни і пружним поясом.'},
  {id:'v4',brand:'MI_STORE',name:'Vericoh Check Premium',packSize:4,packOptions:PACK_OPTIONS_STANDARD,price:850,oldPrice:890,images:['images/products/v4a.jpg','images/products/v4b.jpg'],tags:['vericoh','premium'],sizes:[...XL_SIZES],availability:makeAvailability(XL_SIZES),badge:'Premium',material:COMPOSITION_VERICOH,description:'Преміальна клітинка на поясі та м’яка мікрофібра, що тримає форму.'},
  {id:'v5',brand:'MI_STORE',name:'Vericoh Thermo Base',packSize:4,packOptions:PACK_OPTIONS_STANDARD,price:THERMO_PRICE,oldPrice:THERMO_OLD_PRICE,images:['images/products/v5a.jpg','images/products/v5b.jpg'],tags:['thermal'],trend:true,sizes:[...THERMO_SIZES],availability:makeAvailability(THERMO_SIZES),badge:'Thermo',material:COMPOSITION_VERICOH,description:'Термосет з вологовідведенням для міжсезоння та ранкових забігів.'},
  {id:'v6',brand:'MI_STORE',name:'Uomo Sport Flex',packSize:4,packOptions:PACK_OPTIONS_STANDARD,price:850,oldPrice:890,images:['images/products/v6a.jpg','images/products/v6b.jpg'],tags:['vericoh','sport'],sizes:[...SPORT_SIZES],availability:makeAvailability(SPORT_SIZES),badge:'Sport',material:COMPOSITION_VERICOH,description:'Компресійний сет Uomo з розмірами від M до 3XL, міцна посадка.'},
  {id:'v7',brand:'MI_STORE',name:'Vericoh Urban Ink',packSize:4,packOptions:PACK_OPTIONS_STANDARD,price:850,oldPrice:890,images:['images/products/v7a.jpg','images/products/v7b.jpg'],tags:['vericoh','dark'],sizes:[...XL_SIZES],availability:makeAvailability(XL_SIZES),material:COMPOSITION_VERICOH,description:'Темний урбан-сет із м’якою мікрофіброю та мінімумом швів.'},
  {id:'v8',brand:'MI_STORE',name:'Vericoh Ice Cotton',packSize:4,packOptions:PACK_OPTIONS_STANDARD,price:850,oldPrice:890,images:['images/products/v8a.jpg','images/products/v8b.jpg'],tags:['vericoh','light'],sizes:[...XL_SIZES],availability:makeAvailability(XL_SIZES),material:COMPOSITION_V395,description:'Світлий сет з охолоджувальним ефектом і 95% бавовни.'},
  {id:'v9',brand:'MI_STORE',name:'Midnight Premium',packSize:5,packOptions:PACK_OPTIONS_FIVE,price:990,oldPrice:1090,images:['images/products/v9a.jpg','images/products/v9b.jpg'],tags:['vericoh','premium'],sizes:[...XL_SIZES],availability:makeAvailability(XL_SIZES),badge:'Must have',material:COMPOSITION_VERICOH,description:'Темний преміум-сет з глянцевим поясом та мікрофіброю, що огортає.'},
  {id:'v10',brand:'MI_STORE',name:'Vericoh Shadow Steel',packSize:4,packOptions:PACK_OPTIONS_STANDARD,price:850,oldPrice:890,images:['images/products/v10a.jpg','images/products/v10b.jpg'],tags:['vericoh','basic'],sizes:[...XL_SIZES],availability:makeAvailability(XL_SIZES),material:COMPOSITION_VERICOH,description:'Сіра технічна база — поєднуй з денімом та худі.'},
  {id:'v11',brand:'MI_STORE',name:'Vericoh Storm Stone',packSize:4,packOptions:PACK_OPTIONS_STANDARD,price:850,oldPrice:890,images:['images/products/v11a.jpg','images/products/v11b.jpg'],tags:['vericoh','classic'],sizes:[...XL_SIZES],availability:makeAvailability(XL_SIZES),material:COMPOSITION_VERICOH,description:'Стриманий сірий сет зі щільним поясом та класичною посадкою.'},
  {id:'v12',brand:'MI_STORE',name:'Vericoh Fresh Sage',packSize:4,packOptions:PACK_OPTIONS_STANDARD,price:850,oldPrice:890,images:['images/products/v12a.jpg','images/products/v12b.jpg'],tags:['vericoh','light'],sizes:[...XL_SIZES],availability:makeAvailability(XL_SIZES),badge:'New',material:COMPOSITION_VERICOH,description:'Свіжий світлий відтінок з легким горошком та комфортом на дотик.'},
  {id:'v101',brand:'MI_STORE',name:'Thermo Shield Black',packSize:4,packOptions:PACK_OPTIONS_STANDARD,price:THERMO_PRICE,oldPrice:THERMO_OLD_PRICE,images:['images/products/v101a.jpg','images/products/v101b.jpg'],tags:['thermal'],sizes:[...THERMO_SIZES],availability:makeAvailability(THERMO_SIZES),badge:'Thermo',material:COMPOSITION_THERMO,description:'Утеплений термосет для холоду: м’який всередині, еластичний зовні.'},
  {id:'v102',brand:'MI_STORE',name:'Thermo Shield Graphite',packSize:4,packOptions:PACK_OPTIONS_STANDARD,price:THERMO_PRICE,oldPrice:THERMO_OLD_PRICE,images:['images/products/v102a.jpg','images/products/v102b.jpg'],tags:['thermal'],sizes:[...THERMO_SIZES],availability:makeAvailability(THERMO_SIZES),badge:'Thermo',material:COMPOSITION_THERMO,description:'Щільна термобілизна для міста та спорту: тримає тепло без зайвого об’єму.'}
];

/* ===== Reviews ===== */
const REVIEWS = [
  'images/reviews/Без назви.jpg',
  'images/reviews/Без назви1.jpg',
  'images/reviews/Без назви2.jpg',
  'images/reviews/Без назви3.jpg',
  'images/reviews/Без назви4.jpg',
  'images/reviews/Без назви5.jpg'
].map(src => ({src, name:'Клієнт', text:'Все супер! Рекомендую.', rating:5}));

const INSTAGRAM_INFO = {
  handle:'@mi__store___',
  url:'https://www.instagram.com/mi__store___/',
  followers:'16K',
  following:'0',
  posts:'775',
  tagline:'ЧОЛОВІЧІ ТРУСИ | БІЛИЗНА | БОКСЕРИ',
  avatar:'https://scontent.cdninstagram.com/v/t51.2885-19/439972418_939455991156567_1796180730567660296_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=104&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy43NTguQzMifQ%3D%3D&_nc_ohc=ZCK5kZkNEnYQ7kNvwF6YJAL&_nc_oc=AdkLevTcCAoncdWtLrH37KS9tzTq5yJiJCmRwt0LiQnHpzGTIQVAgtoRxHT7l7dxY7s&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AfpBMOOpvsGKr1K0ewFRIJksztWqSZ3usWKdFZcVggvong&oe=69633FF0'
};

const INSTAGRAM_MODELS = [
  {
    id:'insta-drop-01',
    productId:'v2',
    title:'Airflow Ice',
    label:'Drop 01',
    image:'images/products/v2b.jpg',
    description:'Перфорація й контрастні пояси, які ми показуємо у шапці профілю як маст-хев.',
    tags:['перфорація','спорт']
  },
  {
    id:'insta-drop-02',
    productId:'v9',
    title:'Midnight Premium',
    label:'Drop 02',
    image:'images/products/v9a.jpg',
    description:'Темний преміум-сет з блиском, який найчастіше репостять клієнти ввечері.',
    tags:['premium','must have']
  },
  {
    id:'insta-drop-03',
    productId:'v5',
    title:'Thermo Base',
    label:'Drop 03',
    image:'images/products/v5a.jpg',
    description:'Термобілизна з ранкових сторіс: біг, зал та міжсезоння.',
    tags:['термо','outdoor']
  },
  {
    id:'insta-drop-04',
    productId:'v1',
    title:'Graphite Base',
    label:'Drop 04',
    image:'images/products/v1b.jpg',
    description:'Графітова база для контенту «before work». XL-4XL ідеально сідають.',
    tags:['база','XL-4XL']
  }
];

const NOVA_POSHTA_LOCATIONS = [
  {city:'Київ', branches:['Відділення №1 (вул. Хрещатик, 50)','Відділення №12 (ТРЦ Gulliver)','Поштомат №301 (Либідська, 1)']},
  {city:'Львів', branches:['Відділення №3 (пр. Свободи, 15)','Відділення №18 (Сихів, пр. Червоної Калини)','Поштомат №512 (Forum Lviv)']},
  {city:'Одеса', branches:['Відділення №2 (вул. Рішельєвська, 8)','Відділення №14 (Таїрова)','Поштомат №422 (Garden City)']},
  {city:'Харків', branches:['Відділення №1 (пр. Науки, 9)','Відділення №23 (ТРЦ Nikolsky)','Поштомат №510 (Південний вокзал)']},
  {city:'Дніпро', branches:['Відділення №4 (пр. Д. Яворницького, 50)','Відділення №16 (Правий берег)','Поштомат №404 (MOST City)']},
  {city:'Запоріжжя', branches:['Відділення №5 (пр. Соборний, 92)','Відділення №14 (Хортицький)','Поштомат №320 (Ашана)']},
  {city:'Вінниця', branches:['Відділення №1 (вул. Київська, 16)','Відділення №7 (Соборна, 8)','Поштомат №205 (Megamall)']},
  {city:'Полтава', branches:['Відділення №4 (вул. Соборності, 40)','Відділення №10 (Алмазний)','Поштомат №302 (Екватор)']},
  {city:'Чернівці', branches:['Відділення №3 (вул. Героїв Майдану, 5)','Відділення №9 (Головна, 200)','Поштомат №120 (Центр)']},
  {city:'Івано-Франківськ', branches:['Відділення №2 (вул. Грушевського, 1)','Відділення №6 (Бельведерська)','Поштомат №210 (Арсен)']},
  {city:'Чернігів', branches:['Відділення №1 (пр. Миру, 35)','Відділення №5 (Подусівка)','Поштомат №180 (Епіцентр)']},
  {city:'Миколаїв', branches:['Відділення №2 (пр. Центральний, 90)','Відділення №12 (Корабельний)','Поштомат №260 (City Center)']},
  {city:'Черкаси', branches:['Відділення №3 (б-р Шевченка, 200)','Відділення №7 (Митниця)','Поштомат №155 (Дніпро Plaza)']},
  {city:'Рівне', branches:['Відділення №1 (вул. Київська, 10)','Відділення №5 (Чайка)','Поштомат №140 (Злата Плаза)']},
  {city:'Тернопіль', branches:['Відділення №3 (вул. Руська, 17)','Відділення №8 (Дружба)','Поштомат №190 (Подоляни)']},
  {city:'Житомир', branches:['Відділення №1 (вул. Київська, 24)','Відділення №7 (ТРЦ Global UA)','Поштомат №233 (вул. Перемоги, 53)']},
  {city:'Хмельницький', branches:['Відділення №2 (вул. Кам\'янецька, 19)','Відділення №9 (ТРЦ Оазис)','Поштомат №312 (вул. Зарічанська, 3/1)']},
  {city:'Суми', branches:['Відділення №1 (вул. Харківська, 5)','Відділення №8 (ТРЦ Мануфактура)','Поштомат №178 (пр. М. Лушпи, 32)']},
  {city:'Кропивницький', branches:['Відділення №2 (вул. Велика Перспективна, 40)','Відділення №7 (вул. Попова, 26)','Поштомат №141 (ТРЦ Depot)']},
  {city:'Луцьк', branches:['Відділення №1 (пр. Волі, 27)','Відділення №9 (ТРЦ ПортCity)','Поштомат №206 (вул. Лесі Українки, 43)']},
  {city:'Ужгород', branches:['Відділення №2 (вул. Корзо, 15)','Відділення №6 (вул. Капушанська, 120)','Поштомат №132 (ТРЦ Дастор)']},
  {city:'Херсон', branches:['Відділення №3 (пр. Ушакова, 49)','Відділення №9 (вул. Перекопська, 173)','Поштомат №118 (ТРЦ Фабрика)']},
  {city:'Кривий Ріг', branches:['Відділення №5 (пр. Металургів, 30)','Відділення №14 (95-й квартал)','Поштомат №270 (ТРЦ Victory Plaza)']},
  {city:'Кременчук', branches:['Відділення №1 (вул. Соборна, 27)','Відділення №6 (вул. Першотравнева, 33)','Поштомат №164 (ТРЦ Galaxy)']},
  {city:'Біла Церква', branches:['Відділення №1 (вул. Ярослава Мудрого, 40)','Відділення №7 (вул. Леваневського, 53)','Поштомат №150 (ТРЦ Вега)']}
];
const NOVA_POSHTA_API_URL = 'https://api.novaposhta.ua/v2.0/json/';
const NOVA_POSHTA_API_STORAGE_KEY = 'mi_np_api_key';
const NOVA_POSHTA_CACHE = {cities:new Map(), warehouses:new Map()};

const ORDER_DRAWER_STATE = {product:null, size:'', packs:1, packSize:PACK_DEFAULT};
let ORDER_DRAWER_REFS = null;
const CHECKOUT_STATE = {product:null, size:'', packs:1, packSize:PACK_DEFAULT};
let CHECKOUT_REFS = null;
const HOME_FILTER_STATE = {size:'', pack:'', type:'', must:false, priceMin:null, priceMax:null};

/* ===== State ===== */
function loadState(){
  const raw = localStorage.getItem('mi_store_state');
  if(!raw) return {products:BASE_PRODUCTS, popular:{}};
  try{
    const parsed = JSON.parse(raw);
    const map = new Map(BASE_PRODUCTS.map(p => [p.id, p]));
    (parsed.products || []).forEach(p => {
      if(map.has(p.id)){
        map.set(p.id, {...map.get(p.id), ...p});
      }
    });
    return {products:[...map.values()], popular:parsed.popular || {}};
  }catch(err){
    console.warn('State load failed', err);
    return {products:BASE_PRODUCTS, popular:{}};
  }
}
function saveState(state){
  try{ localStorage.setItem('mi_store_state', JSON.stringify(state)); }
  catch(err){ console.warn('State save failed', err); }
}
let STATE = loadState();

/* ===== Utils ===== */
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
const firstAvailableSize = product => product.sizes.find(s => product.availability[s]);
const getProductPrice = product => {
  const value = Number(product?.price);
  return Number.isFinite(value) && value > 0 ? value : CURRENT_PRICE;
};
const getProductOldPrice = product => {
  const value = Number(product?.oldPrice);
  if(Number.isFinite(value) && value > 0) return value;
  const current = getProductPrice(product);
  if(current === 990) return OLD_PRICE_PREMIUM;
  if(current === CURRENT_PRICE) return OLD_PRICE;
  return current + (PRICE_DELTA || 40);
};
const getProductPackSize = product => {
  const value = Number(product?.packSize);
  if(Number.isFinite(value) && value > 0) return value;
  return PACK_DEFAULT;
};
const getPackOptions = product => {
  const options = Array.isArray(product?.packOptions) && product.packOptions.length ? product.packOptions : [getProductPackSize(product)];
  return options.slice().sort((a,b) => a-b);
};
const getDefaultPackSize = product => {
  const options = getPackOptions(product);
  return options[options.length - 1] || getProductPackSize(product);
};
const normalizePackSize = (product, desired) => {
  const options = getPackOptions(product);
  if(options.includes(desired)) return desired;
  return getDefaultPackSize(product);
};
const getPackPrice = (product, packSize) => {
  const baseSize = getProductPackSize(product);
  const basePrice = getProductPrice(product);
  const perPiece = basePrice / baseSize;
  return Math.round(perPiece * (packSize || baseSize));
};
const pluralPacks = count => {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if(mod10 === 1 && mod100 !== 11) return 'комплект';
  if(mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'комплекти';
  return 'комплектів';
};

function filterHomeProducts(){
  return STATE.products.filter(p => {
    if(HOME_FILTER_STATE.must && !MUST_HAVE_IDS.includes(p.id)) return false;
    if(HOME_FILTER_STATE.size && !(p.sizes || []).includes(HOME_FILTER_STATE.size)) return false;
    if(HOME_FILTER_STATE.pack){
      const packValue = Number(HOME_FILTER_STATE.pack);
      if(!getPackOptions(p).includes(packValue)) return false;
    }
    if(HOME_FILTER_STATE.type){
      const isThermal = (p.tags || []).includes('thermal');
      if(HOME_FILTER_STATE.type === 'thermal' && !isThermal) return false;
      if(HOME_FILTER_STATE.type === 'underwear' && isThermal) return false;
    }
    const minPrice = Number(HOME_FILTER_STATE.priceMin);
    const maxPrice = Number(HOME_FILTER_STATE.priceMax);
    if(Number.isFinite(minPrice) && Number.isFinite(maxPrice)){
      const price = getProductPrice(p);
      if(price < minPrice || price > maxPrice) return false;
    }
    return true;
  });
}

function copy(text){
  try{ navigator.clipboard.writeText(text); }
  catch(_){
    const ta=document.createElement('textarea');
    ta.value=text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
}

function plural(n){
  const m = n % 10;
  const mm = n % 100;
  if(m === 1 && mm !== 11) return 'товар';
  if(m >= 2 && m <= 4 && (mm < 12 || mm > 14)) return 'товари';
  return 'товарів';
}

const debounce = (fn, delay=260) => {
  let t;
  return (...args) => {
    if(t) clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
};

function getNovaPoshtaApiKey(){
  if(typeof window !== 'undefined' && window.NOVA_POSHTA_API_KEY){
    return String(window.NOVA_POSHTA_API_KEY).trim();
  }
  try{
    return (localStorage.getItem(NOVA_POSHTA_API_STORAGE_KEY) || '').trim();
  }catch(_){
    return '';
  }
}

async function novaPoshtaRequest(modelName, calledMethod, methodProperties){
  const apiKey = getNovaPoshtaApiKey();
  if(!apiKey) throw new Error('Nova Poshta API key missing');
  const res = await fetch(NOVA_POSHTA_API_URL, {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({apiKey, modelName, calledMethod, methodProperties})
  });
  const data = await res.json();
  if(!data.success){
    const err = (data.errors || []).join(', ') || 'Nova Poshta API error';
    throw new Error(err);
  }
  return data.data || [];
}

async function fetchNovaPoshtaCities(term){
  const key = (term || '').trim().toLowerCase();
  if(NOVA_POSHTA_CACHE.cities.has(key)) return NOVA_POSHTA_CACHE.cities.get(key);
  const props = {Page:1, Limit: term ? 50 : 80};
  if(term) props.FindByString = term;
  const data = await novaPoshtaRequest('Address', 'getCities', props);
  NOVA_POSHTA_CACHE.cities.set(key, data);
  return data;
}

async function fetchNovaPoshtaWarehouses(cityRef, cityName, term){
  const cacheKey = `${cityRef || cityName || ''}::${(term || '').trim().toLowerCase()}`;
  if(NOVA_POSHTA_CACHE.warehouses.has(cacheKey)) return NOVA_POSHTA_CACHE.warehouses.get(cacheKey);
  const props = {Limit:200};
  if(cityRef) props.CityRef = cityRef;
  else if(cityName) props.CityName = cityName;
  if(term) props.FindByString = term;
  const data = await novaPoshtaRequest('Address', 'getWarehouses', props);
  NOVA_POSHTA_CACHE.warehouses.set(cacheKey, data);
  return data;
}

function renderCityOptions(citySelect, cities){
  citySelect.innerHTML = '';
  if(!cities.length){
    const empty = document.createElement('option');
    empty.textContent = 'Місто не знайдено';
    empty.disabled = true;
    citySelect.appendChild(empty);
    return;
  }
  cities.forEach((city, idx) => {
    const option = document.createElement('option');
    const name = city.Description || city.city || '';
    const area = city.AreaDescription || '';
    option.value = name;
    option.textContent = area ? `${name} (${area})` : name;
    if(city.Ref) option.dataset.ref = city.Ref;
    if(idx === 0) option.selected = true;
    citySelect.appendChild(option);
  });
}

function renderBranchOptions(branchSelect, branches){
  branchSelect.innerHTML = '';
  if(!branches.length){
    const empty = document.createElement('option');
    empty.textContent = 'Відділення не знайдені';
    empty.disabled = true;
    branchSelect.appendChild(empty);
    return;
  }
  branches.forEach((branch, idx) => {
    const option = document.createElement('option');
    option.value = branch;
    option.textContent = branch;
    if(idx === 0) option.selected = true;
    branchSelect.appendChild(option);
  });
}

function setupNovaPoshtaSelects(refs){
  if(!refs) return;
  const {citySelect, branchSelect, citySearch, branchSearch} = refs;
  if(!citySelect || !branchSelect) return;
  const apiKey = getNovaPoshtaApiKey();

  const renderStaticCities = term => {
    const search = (term || '').trim().toLowerCase();
    const cities = NOVA_POSHTA_LOCATIONS.filter(loc => !search || loc.city.toLowerCase().includes(search));
    renderCityOptions(citySelect, cities.map(loc => ({Description:loc.city, city:loc.city})));
  };

  const renderStaticBranches = () => {
    const search = (branchSearch?.value || '').trim().toLowerCase();
    const selected = citySelect.options[citySelect.selectedIndex];
    if(!citySelect.value || selected?.disabled){
      renderBranchOptions(branchSelect, []);
      return;
    }
    const loc = NOVA_POSHTA_LOCATIONS.find(l => l.city === citySelect.value) || NOVA_POSHTA_LOCATIONS[0];
    const branches = (loc?.branches || []).filter(branch => !search || branch.toLowerCase().includes(search));
    renderBranchOptions(branchSelect, branches);
  };

  const renderApiCities = async term => {
    try{
      const cities = await fetchNovaPoshtaCities(term);
      renderCityOptions(citySelect, cities);
      await renderApiBranches();
    }catch(err){
      console.warn('Nova Poshta cities failed', err);
      renderStaticCities(term);
      renderStaticBranches();
    }
  };

  const renderApiBranches = async () => {
    const option = citySelect.options[citySelect.selectedIndex];
    const cityRef = option ? option.dataset.ref : '';
    const cityName = citySelect.value;
    const term = (branchSearch?.value || '').trim();
    if(!cityName || option?.disabled){
      renderBranchOptions(branchSelect, []);
      return;
    }
    try{
      const data = await fetchNovaPoshtaWarehouses(cityRef, cityName, term);
      const branches = data.map(item => item.Description).filter(Boolean);
      renderBranchOptions(branchSelect, branches);
    }catch(err){
      console.warn('Nova Poshta branches failed', err);
      renderStaticBranches();
    }
  };

  const onCityChange = () => {
    if(branchSearch) branchSearch.value = '';
    if(apiKey) renderApiBranches();
    else renderStaticBranches();
  };

  if(citySearch){
    const handler = debounce(() => {
      const term = citySearch.value;
      if(branchSearch) branchSearch.value = '';
      if(apiKey) renderApiCities(term);
      else{
        renderStaticCities(term);
        renderStaticBranches();
      }
    });
    citySearch.addEventListener('input', handler);
  }
  if(branchSearch){
    const handler = debounce(() => {
      if(apiKey) renderApiBranches();
      else renderStaticBranches();
    });
    branchSearch.addEventListener('input', handler);
  }
  citySelect.addEventListener('change', onCityChange);

  if(apiKey) renderApiCities(citySearch?.value || '');
  else{
    renderStaticCities(citySearch?.value || '');
    renderStaticBranches();
  }
}

function setSmartSrc(imgEl, primarySrc){
  const candidates = [];
  if(primarySrc) candidates.push(primarySrc);
  if(primarySrc && primarySrc.startsWith('images/')){
    candidates.push(primarySrc.replace('images/', 'images/products/'));
  }
  const fallback = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" font-size="20" fill="#9ca3af" dominant-baseline="middle" text-anchor="middle">Фото недоступне</text></svg>`
  );
  let i = 0;
  const tryNext = () => {
    if(i < candidates.length){
      imgEl.src = candidates[i++];
    }else{
      imgEl.src = fallback;
    }
  };
  imgEl.onerror = tryNext;
  tryNext();
}

function safeCloseDialog(dlg, returnValue){
  if(!dlg) return;
  if(returnValue !== undefined){
    try{ dlg.returnValue = returnValue; }catch(_){ /* ignore */ }
  }
  if(typeof dlg.close === 'function'){
    try{ dlg.close(returnValue); return; }
    catch(_){ /* fallback below */ }
  }
  dlg.removeAttribute('open');
  dlg.dispatchEvent(new Event('close'));
}

function resolveTimerDeadline(el){
  if(!el){
    return new Date(Date.now() + 12 * 3600000);
  }
  const dataset = el.dataset || {};
  const attr = dataset.deadline;
  if(attr){
    const parsed = new Date(attr);
    if(!Number.isNaN(parsed.getTime())) return parsed;
  }
  const hoursRaw = dataset.hours || '0';
  const hours = parseFloat(hoursRaw);
  if(hours > 0) return new Date(Date.now() + hours * 3600000);
  const now = new Date();
  const endOfDay = new Date(now);
  endOfDay.setHours(23,59,59,999);
  if(endOfDay <= now) endOfDay.setDate(endOfDay.getDate() + 1);
  return endOfDay;
}

function triggerPageIntro(){
  var body = document.body;
  if(!body) return;
  var canAnimate = typeof CSS !== 'undefined' && CSS && typeof CSS.supports === 'function' && CSS.supports('animation-name','pageFade');
  if(!canAnimate){
    body.classList.remove('page-animate');
    return;
  }
  body.classList.remove('page-animate');
  body.classList.add('page-animate');
  var cleanup = function(){ body.classList.remove('page-animate'); };
  body.addEventListener('animationend', cleanup, {once:true});
  setTimeout(cleanup, 900);
}

/* ===== Common UI ===== */
function bootCommon(){
  const brand = $('#brandClick');
  if(brand){
    let clicks = 0;
    brand.addEventListener('click', evt => {
      evt.preventDefault();
      if(++clicks >= 5){
        clicks = 0;
        const pin = prompt('PIN?');
        if(pin === ADMIN_PIN){
          location.href = 'admin.html';
          return;
        }
      }
      const home = 'index.html';
      if(location.pathname.endsWith('/index.html') || location.pathname.endsWith('/')){
        window.scrollTo({top:0, behavior:'smooth'});
      }else{
        location.href = home;
      }
    });
  }

  const timerEl = $('#timer');
  if(timerEl){
    let deadline = resolveTimerDeadline(timerEl);
    const tick = () => {
      const diff = deadline.getTime() - Date.now();
      if(diff <= 0){
        if(timerEl.dataset.deadline){
          timerEl.textContent = '00:00:00';
          return;
        }
        deadline = resolveTimerDeadline(timerEl);
        return;
      }
      const totalSeconds = Math.floor(diff / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      timerEl.textContent = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    };
    tick();
    setInterval(tick, 1000);
  }

  document.addEventListener('click', evt => {
    const closer = evt.target.closest('[data-dialog-close],[data-dialog-return], button[value="cancel"]');
    if(!closer) return;
    const dlg = closer.closest('dialog');
    if(!dlg) return;
    const dataAttr = (closer.dataset || {}).dialogReturn;
    let ret = dataAttr;
    if(ret === undefined || ret === null){
      const attrValue = closer.getAttribute("data-dialog-close");
      ret = attrValue !== null ? attrValue : closer.value;
    }
    safeCloseDialog(dlg, ret);
    evt.preventDefault();
  });

  if('IntersectionObserver' in window){
    const observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    $$('.reveal').forEach(function(el){ observer.observe(el); });
  }else{
    $$('.reveal').forEach(function(el){ el.classList.add('show'); });
  }

}

/* ===== MUST HAVE slider ===== */
function bootMustHaveSlider(){
  const slider = document.querySelector('[data-musthave-slider]');
  const descEl = document.querySelector('[data-mh-desc]');
  const listEl = document.querySelector('[data-mh-list]');
  const noteEl = document.querySelector('[data-mh-note]');
  if(!slider) return;
  const img = slider.querySelector('img');
  const dotsHost = slider.querySelector('.slider-dots');
  const progressBar = slider.querySelector('[data-mh-progress]');
  const slides = [
    {
      image:'images/promo-musthave 1.jpg',
      desc:'5 шт MUST HAVE: Airflow, Classic і Midnight — три фактури, які тримають форму й не перегрівають.',
      bullets:['5 шт у комплекті — економія на кожній парі','Airflow — перфорація та охолодження для тренувань','Midnight — преміум мікрофібра з темним поясом'],
      note:'5 шт = 990 грн · швидка відправка Новою поштою'
    },
    {
      image:'images/promo-musthave 2.jpg',
      desc:'4 шт MUST HAVE: темні сети з блиском пояса — щільна посадка, акуратний вигляд, мінімум швів.',
      bullets:['4 шт у комплекті — оптимальний старт','Classic — 95% бавовна та м’які шви','Blackout mix — темний мікс без зайвого брендингу'],
      note:'4 шт = 850 грн · допомагаємо підібрати розмір у Direct'
    }
  ];
  if(!slides.length || !img) return;

  let idx = 0;
  let timer = null;
  let touchStartX = 0;
  let isPaused = false;
  const interval = 5200;

  const updateProgress = () => {
    if(!progressBar) return;
    progressBar.style.animation = 'none';
    progressBar.offsetHeight;
    progressBar.style.animation = `sliderProgress ${interval}ms linear infinite`;
  };

  const renderDots = () => {
    if(!dotsHost) return;
    dotsHost.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = i === idx ? 'active' : '';
      dot.addEventListener('click', () => {
        idx = i;
        update();
        restart();
      });
      dotsHost.appendChild(dot);
    });
  };

  const update = () => {
    const slide = slides[idx];
    if(img) img.classList.add('mh-fade');
    const apply = () => {
      setSmartSrc(img, slide.image);
      if(descEl) descEl.textContent = slide.desc;
      if(listEl){
        listEl.innerHTML = '';
        (slide.bullets || []).forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          listEl.appendChild(li);
        });
      }
      if(noteEl) noteEl.textContent = slide.note;
      if(dotsHost){
        Array.from(dotsHost.children).forEach((dot, i) => {
          dot.classList.toggle('active', i === idx);
        });
      }
      requestAnimationFrame(() => {
        if(img) img.classList.remove('mh-fade');
      });
    };
    setTimeout(apply, 180);
  };

  const restart = () => {
    if(timer) clearInterval(timer);
    timer = setInterval(() => {
      idx = (idx + 1) % slides.length;
      update();
    }, interval);
    updateProgress();
  };

  const pause = () => {
    if(timer) clearInterval(timer);
    timer = null;
    isPaused = true;
    if(progressBar) progressBar.style.animationPlayState = 'paused';
  };

  const resume = () => {
    if(!isPaused) return;
    isPaused = false;
    if(progressBar) progressBar.style.animationPlayState = 'running';
    restart();
  };

  const shift = dir => {
    idx = (idx + dir + slides.length) % slides.length;
    update();
    restart();
  };

  const prev = slider.querySelector('[data-prev]');
  const next = slider.querySelector('[data-next]');
  if(prev) prev.addEventListener('click', () => shift(-1));
  if(next) next.addEventListener('click', () => shift(1));

  slider.addEventListener('mouseenter', pause);
  slider.addEventListener('mouseleave', resume);
  slider.addEventListener('focusin', pause);
  slider.addEventListener('focusout', resume);
  slider.addEventListener('keydown', evt => {
    if(evt.key === 'ArrowLeft') shift(-1);
    if(evt.key === 'ArrowRight') shift(1);
  });
  slider.addEventListener('touchstart', evt => {
    touchStartX = evt.touches[0]?.clientX || 0;
  }, {passive:true});
  slider.addEventListener('touchend', evt => {
    const endX = evt.changedTouches[0]?.clientX || 0;
    const diff = endX - touchStartX;
    if(Math.abs(diff) > 40){
      shift(diff > 0 ? -1 : 1);
    }
  });
  document.addEventListener('visibilitychange', () => {
    if(document.hidden) pause();
    else resume();
  });

  renderDots();
  update();
  restart();
}

function bootPromoHighlights(){
  const wraps = $$('[data-promo-pills]');
  wraps.forEach(wrap => {
    const pills = $$('span', wrap);
    if(!pills.length) return;
    let idx = 0;
    let timer = null;
    const setActive = nextIdx => {
      pills.forEach((pill, i) => pill.classList.toggle('active', i === nextIdx));
    };
    const start = () => {
      if(timer) clearInterval(timer);
      timer = setInterval(() => {
        idx = (idx + 1) % pills.length;
        setActive(idx);
      }, 3200);
    };
    const stop = () => {
      if(timer) clearInterval(timer);
      timer = null;
    };
    pills.forEach((pill, i) => {
      pill.addEventListener('click', () => {
        idx = i;
        setActive(idx);
        start();
      });
    });
    wrap.addEventListener('mouseenter', stop);
    wrap.addEventListener('mouseleave', start);
    wrap.addEventListener('focusin', stop);
    wrap.addEventListener('focusout', start);
    setActive(idx);
    start();
  });
}

/* ===== Product Card ===== */
function createProductCard(product){
  const card = document.createElement('article');
  card.className = 'product-card reveal';

  const wrap = document.createElement('div');
  wrap.className = 'pimg-wrap';
  const img = document.createElement('img');
  img.className = 'pimg';
  img.alt = product.name;
  img.loading = 'lazy';
  const primaryImage = product.images && product.images[0];
  setSmartSrc(img, primaryImage);
  wrap.appendChild(img);
  card.appendChild(wrap);

  const packOptions = getPackOptions(product);
  const defaultPack = getDefaultPackSize(product);
  const currentPrice = getPackPrice(product, defaultPack);
  const oldPrice = getProductOldPrice(product);
  const top = document.createElement('div');
  top.className = 'row';
  top.innerHTML = `<div class="ptitle">${product.name}</div><div class="price"><span class="price-new">${formatCurrency(currentPrice)}</span><span class="price-old">${formatCurrency(oldPrice)}</span></div>`;
  card.appendChild(top);

  const brand = document.createElement('div');
  brand.className = 'product-brand';
  brand.textContent = product.brand;
  card.appendChild(brand);

  const badges = document.createElement('div');
  badges.className = 'badges';
  if(product.badge){
    const badgeEl = document.createElement('span');
    badgeEl.className = 'badge';
    badgeEl.textContent = product.badge;
    badges.appendChild(badgeEl);
  }
  if(MUST_HAVE_IDS.includes(product.id)){
    const badgeEl = document.createElement('span');
    badgeEl.className = 'badge';
    badgeEl.textContent = 'MUST HAVE';
    badges.appendChild(badgeEl);
  }
  if(product.trend){
    const badgeEl = document.createElement('span');
    badgeEl.className = 'badge';
    badgeEl.textContent = 'Trend';
    badges.appendChild(badgeEl);
  }
  if(badges.childElementCount) card.appendChild(badges);

  const packInfo = document.createElement('div');
  packInfo.className = 'pack-info';
  packInfo.textContent = `${formatCurrency(currentPrice)} · ${defaultPack} шт` + (packOptions.length > 1 ? ' (+ інші опції)' : '');
  card.appendChild(packInfo);

  const metaText = product.material || product.description;
  if(metaText){
    const meta = document.createElement('div');
    meta.className = 'product-meta';
    meta.textContent = metaText;
    card.appendChild(meta);
  }

  const sizeRow = document.createElement('div');
  sizeRow.className = 'row';
  const sizeLabel = document.createElement('div');
  sizeLabel.textContent = 'Розмір:';
  const select = document.createElement('select');
  select.innerHTML = '<option value="">— оберіть —</option>' + product.sizes.map(size => {
    const available = product.availability[size];
    return `<option value="${size}" ${available ? '' : 'disabled'}>${size}${available ? '' : ' (немає)'}</option>`;
  }).join('');
  sizeRow.append(sizeLabel, select);
  card.appendChild(sizeRow);

  const actions = document.createElement('div');
  actions.className = 'actions';
  const orderBtn = document.createElement('button');
  orderBtn.type = 'button';
  orderBtn.className = 'btn btn-primary';
  orderBtn.textContent = 'Купити';
  actions.append(orderBtn);
  card.appendChild(actions);

  orderBtn.addEventListener('click', () => {
    const size = select.value || firstAvailableSize(product) || product.sizes[0];
    openOrder(product, size);
    STATE.popular[product.id] = (STATE.popular[product.id] || 0) + 1;
    saveState({products:STATE.products, popular:STATE.popular});
  });

  card.addEventListener('click', evt => {
    if(evt.target.closest('button') || evt.target.closest('select')) return;
    location.href = `product.html?id=${encodeURIComponent(product.id)}`;
  });

  return card;
}

function buildProductGallery(product){
  const gallery = document.createElement('div');
  gallery.className = 'product-page-gallery';
  const mainImg = document.createElement('img');
  mainImg.className = 'product-page-img';
  mainImg.alt = product.name;
  mainImg.loading = 'lazy';
  setSmartSrc(mainImg, (product.images || [])[0]);
  gallery.appendChild(mainImg);
  if(Array.isArray(product.images) && product.images.length > 1){
    const thumbs = document.createElement('div');
    thumbs.className = 'product-page-thumbs';
    product.images.forEach((src, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'product-page-thumb';
      if(idx === 0) btn.classList.add('active');
      const img = document.createElement('img');
      img.alt = `${product.name} фото ${idx + 1}`;
      img.loading = 'lazy';
      setSmartSrc(img, src);
      btn.appendChild(img);
      btn.addEventListener('click', () => {
        setSmartSrc(mainImg, src);
        $$('.product-page-thumb', thumbs).forEach(th => th.classList.toggle('active', th === btn));
      });
      thumbs.appendChild(btn);
    });
    gallery.appendChild(thumbs);
  }
  const note = document.createElement('div');
  note.className = 'product-page-gallery-note';
  note.textContent = 'Гортай фото, щоб побачити всі варіанти.';
  gallery.appendChild(note);
  return gallery;
}

function createProductDetail(product){
  const wrap = document.createElement('div');
  wrap.className = 'product-page';

  const grid = document.createElement('div');
  grid.className = 'product-page-grid';
  grid.appendChild(buildProductGallery(product));

  const info = document.createElement('div');
  info.className = 'product-page-info';
  grid.appendChild(info);

  const brandEl = document.createElement('div');
  brandEl.className = 'product-brand';
  brandEl.textContent = product.brand;

  const title = document.createElement('h1');
  title.textContent = product.name;

  const priceBlock = document.createElement('div');
  priceBlock.className = 'product-page-prices';
  const priceMain = document.createElement('div');
  priceMain.className = 'product-price-main';
  const packOptions = getPackOptions(product);
  const defaultPack = getDefaultPackSize(product);
  priceMain.textContent = formatCurrency(getPackPrice(product, defaultPack));
  const priceList = document.createElement('ul');
  priceList.className = 'product-price-list';
  packOptions.forEach(opt => {
    const li = document.createElement('li');
    li.textContent = `${formatCurrency(getPackPrice(product, opt))} · ${opt} шт`;
    priceList.appendChild(li);
  });
  priceBlock.append(priceMain, priceList);

  const desc = document.createElement('p');
  desc.textContent = product.description || 'Опис тимчасово недоступний.';

  const metaList = document.createElement('ul');
  metaList.className = 'product-meta-list';
  if(product.material){
    const li = document.createElement('li');
    li.textContent = product.material;
    metaList.appendChild(li);
  }
  const noteLi = document.createElement('li');
  noteLi.textContent = 'Маломірять — якщо сумніваєшся, бери +1 розмір.';
  metaList.appendChild(noteLi);

  const detailBox = document.createElement('div');
  detailBox.className = 'product-vericoh-detail';
  const detailTitle = document.createElement('strong');
  detailTitle.textContent = 'Опис Vericoh';
  const detailText = document.createElement('p');
  detailText.textContent = product.detail || VERICOH_DETAIL;
  detailBox.append(detailTitle, detailText);

  const form = document.createElement('div');
  form.className = 'product-form';

  const sizeSelect = document.createElement('select');
  sizeSelect.innerHTML = '<option value="">— оберіть —</option>' + (product.sizes || []).map(size => {
    const available = product.availability[size];
    return `<option value="${size}" ${available ? '' : 'disabled'}>${size}${available ? '' : ' (немає)'}</option>`;
  }).join('');

  const packSelect = document.createElement('select');
  packOptions.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt;
    option.textContent = `${opt} шт`;
    packSelect.appendChild(option);
  });

  const sizeLabel = document.createElement('label');
  sizeLabel.textContent = 'Розмір';
  sizeLabel.appendChild(sizeSelect);

  const packLabel = document.createElement('label');
  packLabel.textContent = 'Комплект';
  packLabel.appendChild(packSelect);

  const qtyControl = document.createElement('div');
  qtyControl.className = 'qty-control';
  const minusBtn = document.createElement('button');
  minusBtn.type = 'button';
  minusBtn.dataset.qty = 'minus';
  minusBtn.textContent = '−';
  const plusBtn = document.createElement('button');
  plusBtn.type = 'button';
  plusBtn.dataset.qty = 'plus';
  plusBtn.textContent = '+';
  const qtyReadout = document.createElement('div');
  qtyReadout.className = 'qty-readout';
  const qtyStrong = document.createElement('strong');
  const qtySmall = document.createElement('small');
  qtyReadout.append(qtyStrong, qtySmall);
  qtyControl.append(minusBtn, qtyReadout, plusBtn);

  const qtyNote = document.createElement('div');
  qtyNote.className = 'product-qty-note';

  const summary = document.createElement('div');
  summary.className = 'product-price-summary';

  form.append(sizeLabel, packLabel, qtyControl, summary, qtyNote);

  const actions = document.createElement('div');
  actions.className = 'product-page-actions';
  const buyBtn = document.createElement('button');
  buyBtn.type = 'button';
  buyBtn.className = 'btn btn-primary';
  buyBtn.textContent = 'Купити';
  const backLink = document.createElement('a');
  backLink.className = 'btn btn-ghost';
  backLink.href = 'index.html#homeCatalog';
  backLink.textContent = '← До каталогу';
  actions.append(buyBtn, backLink);

  info.append(brandEl, title, priceBlock, desc, metaList, detailBox, form, actions);

  const guideBlock = document.createElement('div');
  guideBlock.className = 'product-page-size-guide';
  const guideTitle = document.createElement('div');
  guideTitle.textContent = 'Розмірна сітка';
  const guideButton = document.createElement('button');
  guideButton.type = 'button';
  guideButton.className = 'btn btn-ghost';
  guideButton.setAttribute('data-size-modal','');
  guideButton.textContent = 'Відкрити у повному розмірі';
  const guideFrame = document.createElement('div');
  guideFrame.className = 'size-guide-frame';
  const guideImg = document.createElement('img');
  guideImg.src = 'images/size-guide.jpg';
  guideImg.alt = 'Розмірна сітка';
  guideImg.loading = 'lazy';
  guideFrame.appendChild(guideImg);
  guideBlock.append(guideTitle, guideButton, guideFrame);

  const state = {
    size: firstAvailableSize(product) || (product.sizes || [])[0] || '',
    packSize: defaultPack,
    packs:1
  };
  if(state.size){
    sizeSelect.value = state.size;
  }
  packSelect.value = state.packSize;

  const updateSummary = () => {
    const perPack = getPackPrice(product, state.packSize);
    priceMain.textContent = formatCurrency(perPack);
    qtyStrong.textContent = `${state.packs} ${pluralPacks(state.packs)}`;
    qtySmall.textContent = `${state.packs * state.packSize} шт`;
    qtyNote.textContent = `Комплект по ${state.packSize} шт. Замовлення кратне комплекту.`;
    summary.innerHTML = `<strong>${formatCurrency(perPack * state.packs)}</strong><span>Разом (без доставки)</span>`;
  };
  updateSummary();

  sizeSelect.addEventListener('change', () => {
    state.size = sizeSelect.value;
  });
  packSelect.addEventListener('change', () => {
    state.packSize = normalizePackSize(product, Number(packSelect.value) || defaultPack);
    updateSummary();
  });
  [minusBtn, plusBtn].forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.qty === 'plus' ? 1 : -1;
      state.packs = Math.max(1, state.packs + dir);
      updateSummary();
    });
  });
  buyBtn.addEventListener('click', () => {
    if(!state.size){
      state.size = firstAvailableSize(product) || '';
      sizeSelect.value = state.size;
    }
    openOrder(product, state.size, {packSize:state.packSize, packs:state.packs});
  });

  wrap.append(grid, guideBlock);
  return wrap;
}

function enhanceProductPageGallery(card, product){
  if(!card || !product) return;
  const wrap = card.querySelector('.pimg-wrap');
  const mainImg = wrap ? wrap.querySelector('.pimg') : null;
  if(!wrap || !mainImg) return;
  if(!Array.isArray(product.images) || product.images.length <= 1) return;
  wrap.classList.add('with-thumbs');
  const thumbs = document.createElement('div');
  thumbs.className = 'thumb-row';
  product.images.forEach((src, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'thumb';
    const img = document.createElement('img');
    img.alt = product.name + ' фото ' + (idx + 1);
    img.loading = 'lazy';
    setSmartSrc(img, src);
    btn.appendChild(img);
    if(idx === 0) btn.classList.add('active');
    btn.addEventListener('click', () => {
      setSmartSrc(mainImg, src);
      $$('.thumb', thumbs).forEach(t => t.classList.toggle('active', t === btn));
    });
    thumbs.appendChild(btn);
  });
  wrap.appendChild(thumbs);
}

/* ===== Catalog with filters ===== */
function bootCatalog(){
  const wrap = $('.catalog-wrap');
  if(!wrap) return;

  const search = $('#f-search');
  const sortSel = $('#f-sort');
  const chipsSize = $$('[data-size]');
  const chipsCat = $$('[data-cat]');
  const onlyAvail = $('#f-avail');
  const resetBtn = $('#f-reset');
  const grid = wrap.querySelector('.prod-grid');
  const countEl = wrap.querySelector('.count');
  const priceMinInput = $('#f-price-min');
  const priceMaxInput = $('#f-price-max');
  const priceMinLabel = $('#f-price-min-val');
  const priceMaxLabel = $('#f-price-max-val');

  const params = new URLSearchParams(location.search);
  let q = params.get('q') || '';
  let size = params.get('size') || '';
  let cat = params.get('cat') || '';
  let avail = params.get('avail') === '1';
  let sort = params.get('sort') || 'popular';
  const prices = STATE.products.map(getProductPrice);
  const absMin = Math.min(...prices);
  const absMax = Math.max(...prices);
  let priceMin = params.get('min') ? Number(params.get('min')) : absMin;
  let priceMax = params.get('max') ? Number(params.get('max')) : absMax;
  priceMin = Number.isFinite(priceMin) ? priceMin : absMin;
  priceMax = Number.isFinite(priceMax) ? priceMax : absMax;

  if(search) search.value = q;
  chipsSize.forEach(ch => ch.classList.toggle('active', ch.dataset.size === size));
  chipsCat.forEach(ch => ch.classList.toggle('active', ch.dataset.cat === cat));
  if(onlyAvail) onlyAvail.checked = avail;
  if(sortSel) sortSel.value = sort;
  if(priceMinInput){
    priceMinInput.min = Math.max(600, Math.floor(absMin/10)*10);
    priceMinInput.max = Math.ceil(absMax/10)*10;
    priceMinInput.value = priceMin;
  }
  if(priceMaxInput){
    priceMaxInput.min = Math.max(600, Math.floor(absMin/10)*10);
    priceMaxInput.max = Math.ceil(absMax/10)*10;
    priceMaxInput.value = priceMax;
  }
  const updatePriceLabels = () => {
    if(priceMinLabel) priceMinLabel.textContent = `${formatCurrency(Number(priceMinInput?.value || priceMin))}`;
    if(priceMaxLabel) priceMaxLabel.textContent = `${formatCurrency(Number(priceMaxInput?.value || priceMax))}`;
  };
  updatePriceLabels();

  const sync = () => {
    const p = new URLSearchParams();
    if(q) p.set('q', q);
    if(size) p.set('size', size);
    if(cat) p.set('cat', cat);
    if(avail) p.set('avail', '1');
    if(sort !== 'popular') p.set('sort', sort);
    if(priceMin > absMin) p.set('min', Math.round(priceMin));
    if(priceMax < absMax) p.set('max', Math.round(priceMax));
    history.replaceState({}, '', `${location.pathname}?${p.toString()}`);
  };

  const sortList = list => {
    if(sort === 'priceAsc') return list.sort((a,b) => getProductPrice(a) - getProductPrice(b));
    if(sort === 'priceDesc') return list.sort((a,b) => getProductPrice(b) - getProductPrice(a));
    if(sort === 'newest') return list.slice().reverse();
    return list.sort((a,b) => (STATE.popular[b.id] || 0) - (STATE.popular[a.id] || 0));
  };

  const render = () => {
    let list = STATE.products.filter(p => {
      if(q){
        const haystack = (p.name + ' ' + p.brand + ' ' + (p.tags || []).join(' ')).toLowerCase();
        if(!haystack.includes(q.toLowerCase())) return false;
      }
      if(size){
        if(!p.sizes.includes(size)) return false;
        if(avail && !p.availability[size]) return false;
      }else if(avail){
        const any = p.sizes.some(s => p.availability[s]);
        if(!any) return false;
      }
      if(cat){
        const isThermal = (p.tags || []).includes('thermal');
        if(cat === 'underwear' && isThermal) return false;
        if(cat === 'thermal' && !isThermal) return false;
      }
      const price = getProductPrice(p);
      if(price < priceMin || price > priceMax) return false;
      return true;
    });

    list = sortList(list);
    if(countEl) countEl.textContent = `${list.length} ${plural(list.length)}`;

    grid.innerHTML = '';
    list.forEach(p => {
      const card = createProductCard(p);
      grid.appendChild(card);
      requestAnimationFrame(() => card.classList.add('show'));
    });
  };

  if(search) search.addEventListener('input', () => { q = search.value.trim(); sync(); render(); });
  if(sortSel) sortSel.addEventListener('change', () => { sort = sortSel.value; sync(); render(); });
  chipsSize.forEach(ch => ch.addEventListener('click', () => {
    size = (size === ch.dataset.size) ? '' : ch.dataset.size;
    chipsSize.forEach(c => c.classList.toggle('active', c === ch && size));
    sync(); render();
  }));
  chipsCat.forEach(ch => ch.addEventListener('click', () => {
    cat = (cat === ch.dataset.cat) ? '' : ch.dataset.cat;
    chipsCat.forEach(c => c.classList.toggle('active', c === ch && cat));
    sync(); render();
  }));
  if(onlyAvail) onlyAvail.addEventListener('change', () => { avail = onlyAvail.checked; sync(); render(); });
  const clampPrice = () => {
    priceMin = Number(priceMinInput?.value || absMin);
    priceMax = Number(priceMaxInput?.value || absMax);
    if(priceMin > priceMax){ const tmp = priceMin; priceMin = priceMax; priceMax = tmp; }
    if(priceMinInput) priceMinInput.value = priceMin;
    if(priceMaxInput) priceMaxInput.value = priceMax;
    updatePriceLabels();
  };
  if(priceMinInput) priceMinInput.addEventListener('input', () => { clampPrice(); sync(); render(); });
  if(priceMaxInput) priceMaxInput.addEventListener('input', () => { clampPrice(); sync(); render(); });
  if(resetBtn) resetBtn.addEventListener('click', () => {
    q=''; size=''; cat=''; avail=false; sort='popular'; priceMin=absMin; priceMax=absMax;
    if(search) search.value='';
    chipsSize.forEach(c => c.classList.remove('active'));
    chipsCat.forEach(c => c.classList.remove('active'));
    if(onlyAvail) onlyAvail.checked=false;
    if(sortSel) sortSel.value='popular';
    if(priceMinInput) priceMinInput.value = priceMin;
    if(priceMaxInput) priceMaxInput.value = priceMax;
    updatePriceLabels();
    sync(); render();
  });

  render();
}

function saveCheckoutPayload(payload){
  try{ sessionStorage.setItem('mi_checkout', JSON.stringify(payload)); }
  catch(_){ /* ignore */ }
}

function loadCheckoutPayload(){
  try{
    const raw = sessionStorage.getItem('mi_checkout');
    if(!raw) return null;
    return JSON.parse(raw);
  }catch(_){
    return null;
  }
}

/* ===== Order (single) ===== */
function openOrder(product, size, options={}){
  if(!product){
    alert('Товар недоступний.');
    return;
  }
  const normalizedSize = size || firstAvailableSize(product) || (product.sizes || [])[0] || '';
  const packSize = normalizePackSize(product, options.packSize);
  const packs = Math.max(1, options.packs || 1);
  const payload = {
    id:product.id,
    name:product.name,
    brand:product.brand,
    image:(product.images || [])[0],
    size:normalizedSize,
    packSize,
    packs,
    pricePerPack:getPackPrice(product, packSize),
    total:getPackPrice(product, packSize) * packs
  };
  saveCheckoutPayload(payload);
  if(ORDER_DRAWER_REFS && ORDER_DRAWER_REFS.drawer && ORDER_DRAWER_REFS.overlay){
    ORDER_DRAWER_STATE.product = product;
    ORDER_DRAWER_STATE.size = normalizedSize;
    ORDER_DRAWER_STATE.packSize = packSize;
    ORDER_DRAWER_STATE.packs = packs;
    syncOrderDrawer();
    ORDER_DRAWER_REFS.overlay.classList.add('show');
    ORDER_DRAWER_REFS.drawer.classList.add('open');
    ORDER_DRAWER_REFS.drawer.setAttribute('aria-hidden','false');
    if(document.body) document.body.classList.add('drawer-open');
    if(typeof ORDER_DRAWER_REFS.drawer.focus === 'function'){
      ORDER_DRAWER_REFS.drawer.focus({preventScroll:true});
    }
    return;
  }
  location.href = 'checkout.html';
}

function closeOrderDrawer(){
  if(!ORDER_DRAWER_REFS) return;
  ORDER_DRAWER_REFS.overlay.classList.remove('show');
  ORDER_DRAWER_REFS.drawer.classList.remove('open');
  ORDER_DRAWER_REFS.drawer.setAttribute('aria-hidden','true');
  ORDER_DRAWER_REFS.drawer.classList.remove('form-open');
  if(ORDER_DRAWER_REFS.modal){
    safeCloseDialog(ORDER_DRAWER_REFS.modal, 'cancel');
  }
  if(document.body) document.body.classList.remove('drawer-open');
  ORDER_DRAWER_STATE.product = null;
  ORDER_DRAWER_STATE.size = '';
  ORDER_DRAWER_STATE.packs = 1;
  ORDER_DRAWER_STATE.packSize = PACK_DEFAULT;
}

function syncOrderDrawer(){
  if(!ORDER_DRAWER_REFS || !ORDER_DRAWER_STATE.product) return;
  const product = ORDER_DRAWER_STATE.product;
  const packOptions = getPackOptions(product);
  ORDER_DRAWER_STATE.packSize = normalizePackSize(product, ORDER_DRAWER_STATE.packSize);
  const packSize = ORDER_DRAWER_STATE.packSize;
  const sizeList = product.sizes || [];
  ORDER_DRAWER_STATE.packs = Math.max(1, ORDER_DRAWER_STATE.packs || 1);
  if(!sizeList.includes(ORDER_DRAWER_STATE.size)){
    ORDER_DRAWER_STATE.size = firstAvailableSize(product) || sizeList[0] || '';
  }
  if(ORDER_DRAWER_REFS.sizeSelect){
    ORDER_DRAWER_REFS.sizeSelect.innerHTML = '';
    sizeList.forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = `${size}${product.availability[size] ? '' : ' (немає)'}`;
      option.disabled = !product.availability[size];
      ORDER_DRAWER_REFS.sizeSelect.appendChild(option);
    });
    ORDER_DRAWER_REFS.sizeSelect.value = ORDER_DRAWER_STATE.size;
  }
  if(ORDER_DRAWER_REFS.packSelect){
    ORDER_DRAWER_REFS.packSelect.innerHTML = '';
    packOptions.forEach(opt => {
      const option = document.createElement('option');
      option.value = opt;
      option.textContent = `${opt} шт`;
      ORDER_DRAWER_REFS.packSelect.appendChild(option);
    });
    ORDER_DRAWER_REFS.packSelect.value = packSize;
    ORDER_DRAWER_REFS.packSelect.disabled = packOptions.length === 1;
  }
  if(ORDER_DRAWER_REFS.img) setSmartSrc(ORDER_DRAWER_REFS.img, (product.images || [])[0]);
  if(ORDER_DRAWER_REFS.nameEl) ORDER_DRAWER_REFS.nameEl.textContent = product.name;
  if(ORDER_DRAWER_REFS.metaEl) ORDER_DRAWER_REFS.metaEl.textContent = `Комплект: ${packSize} шт • Розмір: ${ORDER_DRAWER_STATE.size || 'оберіть розмір'}`;
  const perPackPrice = getPackPrice(product, packSize);
  if(ORDER_DRAWER_REFS.pricePackEl) ORDER_DRAWER_REFS.pricePackEl.textContent = formatCurrency(perPackPrice);
  if(ORDER_DRAWER_REFS.totalEl) ORDER_DRAWER_REFS.totalEl.textContent = formatCurrency(perPackPrice * ORDER_DRAWER_STATE.packs);
  if(ORDER_DRAWER_REFS.packCountEl) ORDER_DRAWER_REFS.packCountEl.textContent = `${ORDER_DRAWER_STATE.packs} ${pluralPacks(ORDER_DRAWER_STATE.packs)}`;
  if(ORDER_DRAWER_REFS.piecesEl){
    const totalPieces = packSize * ORDER_DRAWER_STATE.packs;
    ORDER_DRAWER_REFS.piecesEl.textContent = `${totalPieces} шт (по ${packSize})`;
  }
  if(ORDER_DRAWER_REFS.checkoutSummary){
    const totalPieces = packSize * ORDER_DRAWER_STATE.packs;
    ORDER_DRAWER_REFS.checkoutSummary.textContent = `${product.name} • ${ORDER_DRAWER_STATE.size || 'оберіть розмір'} • ${ORDER_DRAWER_STATE.packs} ${pluralPacks(ORDER_DRAWER_STATE.packs)} (${totalPieces} шт) • ${formatCurrency(perPackPrice * ORDER_DRAWER_STATE.packs)}`;
  }
}

function populateNovaPoshtaSelects(){
  if(!ORDER_DRAWER_REFS) return;
  setupNovaPoshtaSelects(ORDER_DRAWER_REFS);
}

function bootOrderDrawer(){
  const drawer = $('#orderDrawer');
  const overlay = $('#orderOverlay');
  const sizeSelect = $('#drawerSize');
  const checkoutBtn = $('#drawerCheckout');
  const modal = $('#drawerCheckoutModal');
  const form = $('#drawerCheckoutForm');
  if(!drawer || !overlay || !sizeSelect || !modal || !form) return;
  drawer.setAttribute('tabindex','-1');
  ORDER_DRAWER_REFS = {
    drawer,
    overlay,
    modal,
    form,
    sizeSelect,
    packSelect:$('#drawerPackSize'),
    citySelect:$('#npCity'),
    citySearch:$('#npCitySearch'),
    branchSelect:$('#npBranch'),
    branchSearch:$('#npBranchSearch'),
    checkoutSummary:$('#drawerCheckoutSummary'),
    img:$('#drawerProductImage'),
    nameEl:$('#drawerProductName'),
    metaEl:$('#drawerProductMeta'),
    pricePackEl:$('#drawerPricePerPack'),
    totalEl:$('#drawerTotal'),
    packCountEl:$('#drawerPackCount'),
    piecesEl:$('#drawerPiecesCount')
  };
  populateNovaPoshtaSelects();
  drawer.classList.remove('form-open');
  sizeSelect.addEventListener('change', () => {
    ORDER_DRAWER_STATE.size = sizeSelect.value;
    syncOrderDrawer();
  });
  if(ORDER_DRAWER_REFS.packSelect){
    ORDER_DRAWER_REFS.packSelect.addEventListener('change', () => {
      ORDER_DRAWER_STATE.packSize = normalizePackSize(ORDER_DRAWER_STATE.product, Number(ORDER_DRAWER_REFS.packSelect.value));
      syncOrderDrawer();
    });
  }
  $$('[data-qty]', drawer).forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.qty === 'plus' ? 1 : -1;
      ORDER_DRAWER_STATE.packs = Math.max(1, ORDER_DRAWER_STATE.packs + dir);
      syncOrderDrawer();
    });
  });
  $$('[data-cart-close]').forEach(btn => btn.addEventListener('click', closeOrderDrawer));
  overlay.addEventListener('click', closeOrderDrawer);
  if(checkoutBtn){
    checkoutBtn.addEventListener('click', () => {
      if(!ORDER_DRAWER_STATE.product){
        alert('Товар недоступний.');
        return;
      }
      syncOrderDrawer();
      if(typeof modal.showModal === 'function'){
        modal.showModal();
      }else{
        modal.setAttribute('open','');
      }
      const firstField = form.querySelector('input,select,textarea');
      if(firstField) firstField.focus({preventScroll:true});
    });
  }
  modal.addEventListener('click', evt => {
    const r = modal.getBoundingClientRect();
    if(evt.clientY < r.top || evt.clientY > r.bottom || evt.clientX < r.left || evt.clientX > r.right){
      safeCloseDialog(modal, 'cancel');
    }
  });
  document.addEventListener('keydown', evt => {
    if(evt.key === 'Escape' && ORDER_DRAWER_REFS?.drawer?.classList.contains('open') && !ORDER_DRAWER_REFS?.modal?.open){
      closeOrderDrawer();
    }
  });
  form.addEventListener('submit', evt => {
    evt.preventDefault();
    if(!ORDER_DRAWER_STATE.product) return;
    const fd = new FormData(form);
    const product = ORDER_DRAWER_STATE.product;
    const packSize = normalizePackSize(product, ORDER_DRAWER_STATE.packSize);
    const packs = ORDER_DRAWER_STATE.packs;
    const totalPieces = packSize * packs;
    const totalPrice = getPackPrice(product, packSize) * packs;
    const payment = fd.get('payment') === 'full' ? 'Повна оплата' : 'Післяплата';
    const summary = `ЗАМОВЛЕННЯ MI_STORE\nМодель: ${product.name}\nРозмір: ${ORDER_DRAWER_STATE.size || 'не вказано'}\nКомплектів: ${packs} (по ${packSize} шт)\nВсього штук: ${totalPieces}\nСума: ${formatCurrency(totalPrice)} без доставки\n—\nІм’я: ${fd.get('firstName')} ${fd.get('lastName')}\nТелефон: ${fd.get('phone')}\nМісто: ${fd.get('npCity')}\nВідділення: ${fd.get('npBranch')}\nОплата: ${payment}\nКоментар: ${fd.get('comment') || ''}`;
    copy(summary);
    alert('Заявку скопійовано у буфер. Встав у Instagram/Telegram.');
    form.reset();
    closeOrderDrawer();
  });
}

function populateCheckoutCities(){
  if(!CHECKOUT_REFS) return;
  setupNovaPoshtaSelects(CHECKOUT_REFS);
}

function syncCheckoutSummary(){
  if(!CHECKOUT_REFS || !CHECKOUT_STATE.product) return;
  const product = CHECKOUT_STATE.product;
  const packOptions = getPackOptions(product);
  CHECKOUT_STATE.packSize = normalizePackSize(product, CHECKOUT_STATE.packSize);
  CHECKOUT_STATE.packs = Math.max(1, CHECKOUT_STATE.packs || 1);
  if(!product.sizes.includes(CHECKOUT_STATE.size)){
    CHECKOUT_STATE.size = firstAvailableSize(product) || product.sizes[0] || '';
  }
  const packSize = CHECKOUT_STATE.packSize;
  const packs = CHECKOUT_STATE.packs;
  const perPack = getPackPrice(product, packSize);
  const total = perPack * packs;
  if(CHECKOUT_REFS.img) setSmartSrc(CHECKOUT_REFS.img, (product.images || [])[0]);
  if(CHECKOUT_REFS.nameEl) CHECKOUT_REFS.nameEl.textContent = product.name;
  if(CHECKOUT_REFS.metaEl) CHECKOUT_REFS.metaEl.textContent = `${product.brand} • ${packSize} шт у комплекті`;
  if(CHECKOUT_REFS.sizeSelect){
    CHECKOUT_REFS.sizeSelect.innerHTML = '';
    product.sizes.forEach(size => {
      const opt = document.createElement('option');
      opt.value = size;
      opt.textContent = `${size}${product.availability[size] ? '' : ' (немає)'}`;
      opt.disabled = !product.availability[size];
      CHECKOUT_REFS.sizeSelect.appendChild(opt);
    });
    CHECKOUT_REFS.sizeSelect.value = CHECKOUT_STATE.size;
  }
  if(CHECKOUT_REFS.packSelect){
    CHECKOUT_REFS.packSelect.innerHTML = '';
    packOptions.forEach(opt => {
      const option = document.createElement('option');
      option.value = opt;
      option.textContent = `${opt} шт`;
      CHECKOUT_REFS.packSelect.appendChild(option);
    });
    CHECKOUT_REFS.packSelect.value = packSize;
    CHECKOUT_REFS.packSelect.disabled = packOptions.length === 1;
  }
  if(CHECKOUT_REFS.qtyEl) CHECKOUT_REFS.qtyEl.textContent = `${packs} ${pluralPacks(packs)}`;
  if(CHECKOUT_REFS.piecesEl) CHECKOUT_REFS.piecesEl.textContent = `${packs * packSize} шт загалом`;
  if(CHECKOUT_REFS.pricePackEl) CHECKOUT_REFS.pricePackEl.textContent = formatCurrency(perPack);
  if(CHECKOUT_REFS.totalEl) CHECKOUT_REFS.totalEl.textContent = formatCurrency(total);
}

function bootCheckoutPage(){
  const root = document.querySelector('[data-checkout]');
  if(!root) return;
  CHECKOUT_REFS = {
    img:document.querySelector('[data-co-img]'),
    nameEl:document.querySelector('[data-co-name]'),
    metaEl:document.querySelector('[data-co-meta]'),
    sizeSelect:document.querySelector('#coSize'),
    packSelect:document.querySelector('#coPack'),
    qtyMinus:document.querySelector('[data-co-minus]'),
    qtyPlus:document.querySelector('[data-co-plus]'),
    qtyEl:document.querySelector('[data-co-qty]'),
    piecesEl:document.querySelector('[data-co-pieces]'),
    pricePackEl:document.querySelector('[data-co-price]'),
    totalEl:document.querySelector('[data-co-total]'),
    citySelect:document.querySelector('#city'),
    citySearch:document.querySelector('#coCitySearch'),
    branchSelect:document.querySelector('#warehouse'),
    branchSearch:document.querySelector('#coBranchSearch'),
    form:document.querySelector('#checkoutForm'),
    paymentNote:document.querySelector('#coPaymentNote')
  };
  const payload = loadCheckoutPayload();
  const product = payload ? (STATE.products.find(p => p.id === payload.id) || STATE.products[0]) : STATE.products[0];
  if(!product){
    root.innerHTML = '<p class="muted">Товар не знайдено. Повернись до каталогу.</p>';
    return;
  }
  CHECKOUT_STATE.product = product;
  CHECKOUT_STATE.size = payload?.size || firstAvailableSize(product) || product.sizes[0] || '';
  CHECKOUT_STATE.packSize = payload?.packSize || getDefaultPackSize(product);
  CHECKOUT_STATE.packs = payload?.packs || 1;

  populateCheckoutCities();
  if(CHECKOUT_REFS.sizeSelect){
    CHECKOUT_REFS.sizeSelect.addEventListener('change', () => {
      CHECKOUT_STATE.size = CHECKOUT_REFS.sizeSelect.value;
      syncCheckoutSummary();
    });
  }
  if(CHECKOUT_REFS.packSelect){
    CHECKOUT_REFS.packSelect.addEventListener('change', () => {
      CHECKOUT_STATE.packSize = normalizePackSize(product, Number(CHECKOUT_REFS.packSelect.value));
      syncCheckoutSummary();
    });
  }
  if(CHECKOUT_REFS.qtyMinus){
    CHECKOUT_REFS.qtyMinus.addEventListener('click', () => {
      CHECKOUT_STATE.packs = Math.max(1, CHECKOUT_STATE.packs - 1);
      syncCheckoutSummary();
    });
  }
  if(CHECKOUT_REFS.qtyPlus){
    CHECKOUT_REFS.qtyPlus.addEventListener('click', () => {
      CHECKOUT_STATE.packs = CHECKOUT_STATE.packs + 1;
      syncCheckoutSummary();
    });
  }
  const paymentRadios = $$('input[name=\"payment\"]');
  const updatePaymentNote = () => {
    if(!CHECKOUT_REFS.paymentNote) return;
    const val = (paymentRadios.find(r => r.checked)?.value) || 'cod';
    CHECKOUT_REFS.paymentNote.textContent = val === 'full'
      ? 'IBAN: UA11 1234 5678 9012 3456 7890 1234 (Mono/Приват). Отримувач: MI_STORE.'
      : 'Оплата при отриманні на відділенні Нової пошти (післяплата).';
  };
  paymentRadios.forEach(r => r.addEventListener('change', updatePaymentNote));
  updatePaymentNote();
  syncCheckoutSummary();
}

/* ===== Trends ===== */
function bootTrends(){
  const grid = $('.trend-grid');
  if(!grid) return;
  grid.innerHTML='';
  STATE.products.forEach(p => {
    const card = createProductCard(p);
    grid.appendChild(card);
    requestAnimationFrame(() => card.classList.add('show'));
  });
}

/* ===== Reviews ===== */
function bootReviews(){
  const grid = $('.review-grid');
  if(!grid) return;
  grid.innerHTML='';
  REVIEWS.forEach(r => {
    const img=document.createElement('img');
    img.src=r.src;
    img.alt=r.name;
    img.loading='lazy';
    img.addEventListener('click', () => openLightbox(r.src));
    grid.appendChild(img);
  });
}

function openLightbox(src){
  const dlg=document.createElement('dialog');
  dlg.className='modal';
  const img=document.createElement('img');
  img.className='lb-img';
  img.src=src;
  img.alt='review photo';
  const actions=document.createElement('div');
  actions.className='modal-actions';
  actions.style.justifyContent='center';
  actions.style.marginTop='8px';
  const closeBtn=document.createElement('button');
  closeBtn.type='button';
  closeBtn.className='btn';
  closeBtn.textContent='Закрити';
  closeBtn.setAttribute('data-dialog-close','close');
  actions.appendChild(closeBtn);
  dlg.append(img,actions);
  document.body.appendChild(dlg);
  dlg.showModal();
  const esc=ev=>{ if(ev.key==='Escape') safeCloseDialog(dlg,'close'); };
  document.addEventListener('keydown',esc);
  dlg.addEventListener('click',e=>{
    const r=dlg.getBoundingClientRect();
    if(e.clientY<r.top||e.clientY>r.bottom||e.clientX<r.left||e.clientX>r.right){ safeCloseDialog(dlg,'close'); }
  });
  dlg.addEventListener('close',()=>{ document.removeEventListener('keydown',esc); dlg.remove(); });
}

function bootInstagram(){
  const statsMarkup = `
    <article class="stat-card">
      <span class="label">Підписники</span>
      <span class="value">${INSTAGRAM_INFO.followers}</span>
    </article>
    <article class="stat-card">
      <span class="label">Підписок</span>
      <span class="value">${INSTAGRAM_INFO.following}</span>
    </article>
    <article class="stat-card">
      <span class="label">Пости</span>
      <span class="value">${INSTAGRAM_INFO.posts}</span>
    </article>`;
  $$('[data-insta-stats]').forEach(el => { el.innerHTML = statsMarkup; });
  $$('[data-insta-bio]').forEach(el => {
    el.textContent = `${INSTAGRAM_INFO.tagline} · ${INSTAGRAM_INFO.followers} підписників, ${INSTAGRAM_INFO.posts} постів у ${INSTAGRAM_INFO.handle}`;
  });
  $$('[data-insta-note]').forEach(el => {
    el.textContent = `${INSTAGRAM_INFO.followers} людей довіряють нашому Instagram та діляться своїми фітами.`;
  });
  $$('[data-insta-posts]').forEach(el => {
    el.textContent = `${INSTAGRAM_INFO.posts} постів з живими відгуками`;
  });
  $$('[data-insta-tagline]').forEach(el => { el.textContent = INSTAGRAM_INFO.tagline; });
  $$('[data-insta-link]').forEach(link => {
    link.href = INSTAGRAM_INFO.url;
    link.textContent = INSTAGRAM_INFO.handle;
    link.target = '_blank';
    link.rel = 'noopener';
  });
  $$('[data-insta-handle]').forEach(el => { el.textContent = INSTAGRAM_INFO.handle; });
  $$('[data-insta-avatar]').forEach(img => {
    if(INSTAGRAM_INFO.avatar){
      img.src = INSTAGRAM_INFO.avatar;
    }
  });
  const grid = $('#instaModelsGrid');
  if(grid){
    grid.innerHTML = '';
    INSTAGRAM_MODELS.forEach(model => {
      const product = STATE.products.find(p => p.id === model.productId) || STATE.products[0];
      const price = product ? getProductPrice(product) : CURRENT_PRICE;
      const oldPrice = product ? getProductOldPrice(product) : OLD_PRICE;
      const card = document.createElement('article');
      card.className = 'insta-card';
      const media = document.createElement('div');
      media.className = 'insta-card-media';
      const img = document.createElement('img');
      img.alt = model.title;
      img.loading = 'lazy';
      setSmartSrc(img, model.image || (product && product.images ? product.images[0] : ''));
      media.appendChild(img);
      const body = document.createElement('div');
      body.className = 'insta-card-body';
      if(model.label){
        const label = document.createElement('span');
        label.className = 'insta-card-label';
        label.textContent = model.label;
        body.appendChild(label);
      }
      const title = document.createElement('h3');
      title.textContent = model.title;
      body.appendChild(title);
      const desc = document.createElement('p');
      desc.textContent = model.description;
      body.appendChild(desc);
      if(Array.isArray(model.tags) && model.tags.length){
        const tagsWrap = document.createElement('div');
        tagsWrap.className = 'insta-card-tags';
        model.tags.forEach(tag => {
          const span = document.createElement('span');
          span.textContent = '#' + tag;
          tagsWrap.appendChild(span);
        });
        body.appendChild(tagsWrap);
      }
      const footer = document.createElement('div');
      footer.className = 'insta-card-footer';
      const priceRow = document.createElement('div');
      priceRow.className = 'insta-card-price';
      priceRow.innerHTML = `<span class="price-new">${formatCurrency(price)}</span><span class="price-old">${formatCurrency(oldPrice)}</span>`;
      const actions = document.createElement('div');
      actions.className = 'insta-card-actions';
      const orderBtn = document.createElement('button');
      orderBtn.type = 'button';
      orderBtn.className = 'btn btn-primary';
      orderBtn.textContent = 'Замовити';
      orderBtn.addEventListener('click', () => {
        if(product){
          const size = firstAvailableSize(product) || product.sizes[0];
          openOrder(product, size);
        }else{
          alert('Товар тимчасово недоступний.');
        }
      });
      actions.append(orderBtn);
      footer.append(priceRow, actions);
      card.append(media, body, footer);
      grid.appendChild(card);
    });
  }
}

/* ===== Kit (4 шт) ===== */
function bootKit(){
  const openBtn = $('#openKitBuilder');
  const dlg = $('#kitModal');
  if(!openBtn || !dlg) return;
  const host = $('#kitBuilder');
  const form = $('#kitForm');

  openBtn.addEventListener('click', () => {
    host.innerHTML='';
    for(let i=0;i<4;i++){
      const row=document.createElement('div');
      row.className='kit-item card';
      row.innerHTML=`<label>Модель <select class="kit-product"></select></label><label>Розмір <select class="kit-size"></select></label>`;
      host.appendChild(row);
    }
    const productSelects = $$('.kit-product', host);
    productSelects.forEach(sel => {
      STATE.products.forEach(p => {
        const option=document.createElement('option');
        option.value=p.id;
        option.textContent=p.name;
        sel.appendChild(option);
      });
      const updateSizes = () => {
        const row = sel.closest('.kit-item');
        const sizeSel = row.querySelector('.kit-size');
        const prod = STATE.products.find(x => x.id === sel.value) || STATE.products[0];
        sizeSel.innerHTML='';
        prod.sizes.forEach(size => {
          const option=document.createElement('option');
          option.value=size;
          option.textContent=size + (prod.availability[size] ? '' : ' (немає)');
          option.disabled=!prod.availability[size];
          sizeSel.appendChild(option);
        });
      };
      sel.addEventListener('change', updateSizes);
      updateSizes();
    });
    dlg.showModal();
  });

  form.addEventListener('close', () => {
    if(form.returnValue !== 'submit') return;
    const fd=new FormData(form);
    const rows=$$('.kit-item', host);
    const items=rows.map((row, idx) => {
      const pid=row.querySelector('.kit-product').value;
      const size=row.querySelector('.kit-size').value;
      const productEntry = STATE.products.find(x => x.id === pid);
      const name = productEntry && productEntry.name ? productEntry.name : pid;
      return `${idx+1}) ${name}, розмір ${size}`;
    }).join('\n');
    const msg=`ЗАМОВЛЕННЯ КОМПЛЕКТ (4 шт = ${KIT_PRICE} грн/шт, стара ${KIT_OLD_PRICE} грн + 2 пари шкарпеток)\n${items}\n— \nІм’я: ${fd.get('name')}\nТелефон: ${fd.get('phone')}\nМісто/НП: ${fd.get('np')}\nКоментар: ${fd.get('comment') || ''}`;
    copy(msg);
    alert('Заявку на комплект скопійовано у буфер.');
  });
}

/* ===== Size guide modal triggers ===== */
function bootSizeGuide(){
  const triggers = $$('[data-size-modal]');
  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const dlg=document.createElement('dialog');
      dlg.className='modal';
      const img=document.createElement('img');
      img.className='lb-img';
      img.src='images/size-guide.jpg';
      img.alt='Розмірна сітка';
      const actions=document.createElement('div');
      actions.className='modal-actions';
      actions.style.justifyContent='center';
      actions.style.marginTop='8px';
      const closeBtn=document.createElement('button');
      closeBtn.type='button';
      closeBtn.className='btn';
      closeBtn.textContent='Закрити';
      closeBtn.setAttribute('data-dialog-close','close');
      actions.appendChild(closeBtn);
      dlg.append(img,actions);
      document.body.appendChild(dlg);
      dlg.showModal();
      const esc=ev=>{ if(ev.key==='Escape') safeCloseDialog(dlg,'close'); };
      document.addEventListener('keydown',esc);
      dlg.addEventListener('click',e=>{
        const r=dlg.getBoundingClientRect();
        if(e.clientY<r.top||e.clientY>r.bottom||e.clientX<r.left||e.clientX>r.right){ safeCloseDialog(dlg,'close'); }
      });
      dlg.addEventListener('close',()=>{ document.removeEventListener('keydown',esc); dlg.remove(); });
    });
  });
}

/* ===== Product page ===== */
function bootProduct(){
  const holder = $('#productHolder');
  if(!holder) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const product = STATE.products.find(p => p.id === id) || STATE.products[0];
  if(!product){
    holder.innerHTML = '<p class="muted">Товар не знайдено.</p>';
    return;
  }
  holder.innerHTML = '';
  holder.appendChild(createProductDetail(product));
}

/* ===== Home catalog ===== */
function bootHomeCatalog(){
  const grid = $('#homeCatalogGrid');
  if(!grid) return;
  const filterRoot = $('#homeFilter');
  const sizeButtons = filterRoot ? $$('[data-size]', filterRoot) : [];
  const packRadios = filterRoot ? $$('input[name="homePack"]', filterRoot) : [];
  const typeRadios = filterRoot ? $$('input[name="homeType"]', filterRoot) : [];
  const priceMinInput = $('#home-price-min');
  const priceMaxInput = $('#home-price-max');
  const priceMinLabel = $('#home-price-min-val');
  const priceMaxLabel = $('#home-price-max-val');
  const mustToggle = $('#homeMustHave');
  const resetBtn = $('#homeFilterReset');
  const prices = STATE.products.map(getProductPrice);
  const absMin = prices.length ? Math.min(...prices) : CURRENT_PRICE;
  const absMax = prices.length ? Math.max(...prices) : CURRENT_PRICE;

  if(!Number.isFinite(HOME_FILTER_STATE.priceMin)) HOME_FILTER_STATE.priceMin = absMin;
  if(!Number.isFinite(HOME_FILTER_STATE.priceMax)) HOME_FILTER_STATE.priceMax = absMax;
  const updatePriceLabels = () => {
    if(priceMinLabel) priceMinLabel.textContent = formatCurrency(Number(priceMinInput?.value || HOME_FILTER_STATE.priceMin));
    if(priceMaxLabel) priceMaxLabel.textContent = formatCurrency(Number(priceMaxInput?.value || HOME_FILTER_STATE.priceMax));
  };
  const clampPrice = () => {
    HOME_FILTER_STATE.priceMin = Number(priceMinInput?.value || absMin);
    HOME_FILTER_STATE.priceMax = Number(priceMaxInput?.value || absMax);
    if(HOME_FILTER_STATE.priceMin > HOME_FILTER_STATE.priceMax){
      const tmp = HOME_FILTER_STATE.priceMin;
      HOME_FILTER_STATE.priceMin = HOME_FILTER_STATE.priceMax;
      HOME_FILTER_STATE.priceMax = tmp;
    }
    if(priceMinInput) priceMinInput.value = HOME_FILTER_STATE.priceMin;
    if(priceMaxInput) priceMaxInput.value = HOME_FILTER_STATE.priceMax;
    updatePriceLabels();
  };

  const updateSizeButtons = () => {
    sizeButtons.forEach(btn => {
      btn.classList.toggle('active', HOME_FILTER_STATE.size === btn.dataset.size);
    });
  };

  const render = () => {
    grid.innerHTML = '';
    const list = filterHomeProducts();
    if(!list.length){
      const empty = document.createElement('p');
      empty.className = 'home-empty';
      empty.textContent = 'Під цей фільтр нічого не знайшли. Спробуй скинути параметри.';
      grid.appendChild(empty);
      return;
    }
    list.forEach(p => {
      const card = createProductCard(p);
      grid.appendChild(card);
      requestAnimationFrame(() => card.classList.add('show'));
    });
  };

  sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const value = btn.dataset.size;
      HOME_FILTER_STATE.size = HOME_FILTER_STATE.size === value ? '' : value;
      updateSizeButtons();
      render();
    });
  });

  packRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if(radio.checked){
        HOME_FILTER_STATE.pack = radio.value;
        render();
      }
    });
  });
  typeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if(radio.checked){
        HOME_FILTER_STATE.type = radio.value;
        render();
      }
    });
  });
  if(priceMinInput){
    priceMinInput.min = Math.max(600, Math.floor(absMin / 10) * 10);
    priceMinInput.max = Math.ceil(absMax / 10) * 10;
    priceMinInput.value = HOME_FILTER_STATE.priceMin;
    priceMinInput.addEventListener('input', () => {
      clampPrice();
      render();
    });
  }
  if(priceMaxInput){
    priceMaxInput.min = Math.max(600, Math.floor(absMin / 10) * 10);
    priceMaxInput.max = Math.ceil(absMax / 10) * 10;
    priceMaxInput.value = HOME_FILTER_STATE.priceMax;
    priceMaxInput.addEventListener('input', () => {
      clampPrice();
      render();
    });
  }

  if(mustToggle){
    mustToggle.addEventListener('change', () => {
      HOME_FILTER_STATE.must = mustToggle.checked;
      render();
    });
  }

  if(resetBtn){
    resetBtn.addEventListener('click', () => {
      HOME_FILTER_STATE.size = '';
      HOME_FILTER_STATE.pack = '';
      HOME_FILTER_STATE.type = '';
      HOME_FILTER_STATE.must = false;
      HOME_FILTER_STATE.priceMin = absMin;
      HOME_FILTER_STATE.priceMax = absMax;
      updateSizeButtons();
      packRadios.forEach(radio => {
        radio.checked = radio.value === '';
      });
      typeRadios.forEach(radio => {
        radio.checked = radio.value === '';
      });
      if(mustToggle) mustToggle.checked = false;
      if(priceMinInput) priceMinInput.value = HOME_FILTER_STATE.priceMin;
      if(priceMaxInput) priceMaxInput.value = HOME_FILTER_STATE.priceMax;
      updatePriceLabels();
      render();
    });
  }

  updateSizeButtons();
  if(packRadios.length){
    const activePack = HOME_FILTER_STATE.pack;
    const matched = packRadios.find(r => r.value === activePack);
    if(matched) matched.checked = true;
  }
  if(typeRadios.length){
    const activeType = HOME_FILTER_STATE.type;
    const matchedType = typeRadios.find(r => r.value === activeType);
    if(matchedType) matchedType.checked = true;
  }
  if(mustToggle) mustToggle.checked = HOME_FILTER_STATE.must;
  updatePriceLabels();
  render();
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  triggerPageIntro();
  bootCommon();
  bootMustHaveSlider();
  bootPromoHighlights();
  bootOrderDrawer();
  bootCatalog();
  bootProduct();
  bootHomeCatalog();
  bootTrends();
  bootReviews();
  bootKit();
  bootSizeGuide();
  bootInstagram();
  bootCheckoutPage();
















});
