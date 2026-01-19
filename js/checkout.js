(() => {
  const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwAxBt37K-rcJOz7TjAg9dZB5xBYrl-uwOuhERKjAO_adsnqedFfYR0c8oDiPObRU6D/exec';
  const WEBHOOK_TOKEN = 'MI_STORE_TOKEN_123';

  const form = document.getElementById('checkoutForm');
  if (!form) return;

  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const phoneInput = document.getElementById('phone');
  const citySelect = document.getElementById('city');
  const warehouseSelect = document.getElementById('warehouse');
  const commentInput = document.getElementById('comment');
  const paymentCod = document.getElementById('paymentCod');
  const paymentFull = document.getElementById('paymentFull');

  const getCheckoutProduct = () => {
    if (window.CHECKOUT_STATE?.product) {
      return window.CHECKOUT_STATE.product;
    }
    if (typeof window.loadCheckoutPayload === 'function' && window.STATE?.products) {
      const payload = window.loadCheckoutPayload();
      if (payload?.id) {
        return window.STATE.products.find(item => item.id === payload.id) || null;
      }
    }
    return null;
  };

  const getCheckoutTotals = product => {
    const packSize = typeof window.normalizePackSize === 'function'
      ? window.normalizePackSize(product, window.CHECKOUT_STATE?.packSize)
      : window.CHECKOUT_STATE?.packSize || product?.packSize || 0;
    const packs = Math.max(1, window.CHECKOUT_STATE?.packs || 1);
    const totalPrice = typeof window.getPackPrice === 'function'
      ? window.getPackPrice(product, packSize) * packs
      : product?.price || 0;
    return {packSize, packs, totalPrice};
  };

  form.addEventListener('submit', evt => {
    evt.preventDefault();

    const firstName = String(firstNameInput?.value || '').trim();
    const lastName = String(lastNameInput?.value || '').trim();
    const phone = String(phoneInput?.value || '').trim();
    const city = String(citySelect?.value || '').trim();
    const warehouse = String(warehouseSelect?.value || '').trim();
    const comment = String(commentInput?.value || '').trim();
    const payment = paymentFull?.checked ? 'Повна оплата' : 'Післяплата';

    if (!phone || !city || !warehouse) {
      alert('Будь ласка, заповніть телефон, місто та відділення Нової пошти.');
      return;
    }

    const product = getCheckoutProduct();
    const {packs, totalPrice} = getCheckoutTotals(product);
    const size = window.CHECKOUT_STATE?.size || '';

    const payload = new URLSearchParams({
      token: WEBHOOK_TOKEN,
      product: product?.name || '',
      size,
      qty: String(packs),
      price: String(totalPrice),
      firstName,
      lastName,
      phone,
      city,
      warehouse,
      payment,
      comment,
      source: 'github_pages',
      status: 'NEW'
    });

    fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
      body: payload.toString()
    })
      .then(() => {
        alert('Замовлення відправлено ✅');
        form.reset();
        sessionStorage.removeItem('mi_checkout');
        if (window.CHECKOUT_STATE) {
          window.CHECKOUT_STATE.packs = 1;
          window.CHECKOUT_STATE.packSize = window.getDefaultPackSize
            ? window.getDefaultPackSize(product)
            : window.CHECKOUT_STATE.packSize;
          window.CHECKOUT_STATE.size = window.firstAvailableSize
            ? window.firstAvailableSize(product) || product?.sizes?.[0] || ''
            : window.CHECKOUT_STATE.size;
          if (typeof window.syncCheckoutSummary === 'function') {
            window.syncCheckoutSummary();
          }
        }
      })
      .catch(() => {
        alert('Не вдалося відправити ❌');
      });
  });
})();
