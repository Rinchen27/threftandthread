/* ===== DEFAULT PRODUCTS (same as store) ===== */
const DEFAULT_PRODUCTS = [
  { id:1, name:"Vintage Levi's Denim Jacket", category:"thrift", price:48, oldPrice:null, badge:"New", emoji:"🧥", bg:"linear-gradient(135deg,#dbeafe,#bfdbfe)", rating:4.9, reviews:23, desc:"A perfectly worn-in Levi's denim jacket from the 90s. Size M. Minor fading adds to the charm.", sizes:["XS","S","M","L"], colors:[], isNew:true, inStock:true, customizable:false, image:null },
  { id:2, name:"Pastel Resin Keychain", category:"keychains", price:14, oldPrice:null, badge:"Handmade", emoji:"🔑", bg:"linear-gradient(135deg,#fce4ec,#f8bbd0)", rating:5.0, reviews:41, desc:"Hand-poured pastel resin keychain with dried flowers inside. Each one is completely unique.", sizes:[], colors:["Pink","Lavender","Mint","Clear"], isNew:true, inStock:true, customizable:true, image:null },
  { id:3, name:"Y2K Butterfly Crop Top", category:"thrift", price:22, oldPrice:30, badge:"Sale", emoji:"🦋", bg:"linear-gradient(135deg,#e8f5e9,#c8e6c9)", rating:4.7, reviews:18, desc:"Adorable Y2K-era butterfly print crop top. Size S. Stretchy material, great condition.", sizes:["XS","S","M"], colors:[], isNew:false, inStock:true, customizable:false, image:null },
  { id:4, name:"Galaxy Swirl Keychain", category:"keychains", price:16, oldPrice:null, badge:"New", emoji:"🌌", bg:"linear-gradient(135deg,#ede7f6,#d1c4e9)", rating:4.8, reviews:29, desc:"Deep purple and blue galaxy swirl resin keychain with gold flakes. Absolutely stunning.", sizes:[], colors:["Galaxy","Midnight","Cosmos"], isNew:true, inStock:true, customizable:true, image:null },
  { id:5, name:"Oversized Plaid Blazer", category:"thrift", price:55, oldPrice:null, badge:null, emoji:"🧣", bg:"linear-gradient(135deg,#fff3e0,#ffe0b2)", rating:4.6, reviews:12, desc:"Vintage oversized plaid blazer in warm autumn tones. Size L (fits M-XL). Perfect layering piece.", sizes:["M","L","XL"], colors:[], isNew:false, inStock:true, customizable:false, image:null },
  { id:6, name:"Strawberry Charm Keychain", category:"keychains", price:12, oldPrice:null, badge:"Fan Fave", emoji:"🍓", bg:"linear-gradient(135deg,#fce4ec,#ffcdd2)", rating:5.0, reviews:67, desc:"Our most popular design! Cute strawberry charm with resin coating. Comes with a gold clasp.", sizes:[], colors:["Red","Pink","White"], isNew:false, inStock:true, customizable:true, image:null },
  { id:7, name:"90s Windbreaker Jacket", category:"thrift", price:38, oldPrice:50, badge:"Sale", emoji:"🌬️", bg:"linear-gradient(135deg,#e0f2fe,#b3e5fc)", rating:4.5, reviews:9, desc:"Colorful 90s windbreaker in excellent condition. Size M. Lightweight and perfect for layering.", sizes:["S","M","L"], colors:[], isNew:false, inStock:true, customizable:false, image:null },
  { id:8, name:"Custom Name Keychain", category:"keychains", price:18, oldPrice:null, badge:"Custom", emoji:"✨", bg:"linear-gradient(135deg,#fffde7,#fff9c4)", rating:4.9, reviews:88, desc:"Personalized resin keychain with your name or initials. Takes 3-5 days to make. Worth the wait!", sizes:[], colors:["Gold","Silver","Rose Gold","Rainbow"], isNew:false, inStock:true, customizable:true, image:null },
  { id:9, name:"Floral Mini Dress", category:"thrift", price:32, oldPrice:null, badge:"New", emoji:"🌸", bg:"linear-gradient(135deg,#fce4ec,#f8bbd0)", rating:4.8, reviews:15, desc:"Delicate floral mini dress from the early 2000s. Size S. Excellent condition, no flaws.", sizes:["XS","S"], colors:[], isNew:true, inStock:true, customizable:false, image:null },
  { id:10, name:"Moon Phase Keychain Set", category:"keychains", price:28, oldPrice:null, badge:"Set of 3", emoji:"🌙", bg:"linear-gradient(135deg,#e8eaf6,#c5cae9)", rating:4.9, reviews:34, desc:"Set of 3 moon phase keychains — new moon, crescent, and full moon. Perfect gift set.", sizes:[], colors:["Pearl","Midnight","Gold"], isNew:false, inStock:true, customizable:false, image:null },
  { id:11, name:"Vintage Band Tee", category:"thrift", price:28, oldPrice:null, badge:"Rare", emoji:"🎸", bg:"linear-gradient(135deg,#f3e5f5,#e1bee7)", rating:4.7, reviews:21, desc:"Authentic vintage band tee from the 80s. Faded graphics, soft cotton. Size M. One of a kind.", sizes:["S","M","L"], colors:[], isNew:false, inStock:true, customizable:false, image:null },
  { id:12, name:"Holographic Keychain", category:"keychains", price:15, oldPrice:null, badge:"New", emoji:"🌈", bg:"linear-gradient(135deg,#e0f7fa,#b2ebf2)", rating:4.6, reviews:19, desc:"Iridescent holographic resin keychain that changes color in the light. Absolutely magical.", sizes:[], colors:["Holo","Iridescent","Chrome"], isNew:true, inStock:true, customizable:true, image:null },
];

const EMOJIS = ['🧥','👗','👕','👖','🧣','🧤','🧦','👒','👜','👛','🔑','✨','🌸','🌙','🍓','🌈','🌌','💫','🦋','🎸','💎','🌺','🍀','⭐','🎀','🌻'];
const BG_PRESETS = [
  'linear-gradient(135deg,#fce4ec,#f8bbd0)',
  'linear-gradient(135deg,#ede7f6,#d1c4e9)',
  'linear-gradient(135deg,#e0f2fe,#b3e5fc)',
  'linear-gradient(135deg,#e8f5e9,#c8e6c9)',
  'linear-gradient(135deg,#fff3e0,#ffe0b2)',
  'linear-gradient(135deg,#fffde7,#fff9c4)',
  'linear-gradient(135deg,#e8eaf6,#c5cae9)',
  'linear-gradient(135deg,#e0f7fa,#b2ebf2)',
  'linear-gradient(135deg,#f3e5f5,#e1bee7)',
  'linear-gradient(135deg,#dbeafe,#bfdbfe)',
  'linear-gradient(135deg,#fef3c7,#fde68a)',
  'linear-gradient(135deg,#d1fae5,#a7f3d0)',
];

const MOCK_ORDERS = [
  { id:'#TT-1042', customer:'Sofia Martinez', items:'Pastel Resin Keychain × 2', total:28, status:'delivered', date:'May 10, 2025' },
  { id:'#TT-1041', customer:'Jade Kim', items:"Vintage Levi's Denim Jacket × 1", total:48, status:'shipped', date:'May 11, 2025' },
  { id:'#TT-1040', customer:'Mia Rodriguez', items:'Custom Name Keychain × 3', total:54, status:'pending', date:'May 12, 2025' },
  { id:'#TT-1039', customer:'Lily Thompson', items:'Strawberry Charm Keychain × 1, Y2K Crop Top × 1', total:34, status:'delivered', date:'May 9, 2025' },
  { id:'#TT-1038', customer:'Zara Patel', items:'Moon Phase Keychain Set × 1', total:28, status:'shipped', date:'May 8, 2025' },
  { id:'#TT-1037', customer:'Emma Liu', items:'Floral Mini Dress × 1', total:32, status:'delivered', date:'May 7, 2025' },
];

/* ===== STATE ===== */
let adminProducts = [];
let currentSizes = [];
let currentColors = [];
let currentImageData = null;
let productTableFilter = 'all';
let productSearchQuery = '';
let confirmCallback = null;

const ADMIN_PASSWORD_KEY = 'tt_admin_pwd';
const PRODUCTS_KEY = 'tt_admin_products';

/* ===== INIT ===== */
function getPassword() {
  return localStorage.getItem(ADMIN_PASSWORD_KEY) || 'admin123';
}

function loadProducts() {
  const stored = localStorage.getItem(PRODUCTS_KEY);
  if (stored) {
    try { adminProducts = JSON.parse(stored); return; } catch(e) {}
  }
  adminProducts = DEFAULT_PRODUCTS.map(p => ({ ...p, image: null }));
  saveProducts();
}

function saveProducts() {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(adminProducts));
  // Also sync to the main store's product key so the storefront picks up changes
  syncToStore();
}

function syncToStore() {
  // Write a simplified version for the storefront to read
  localStorage.setItem('tt_products', JSON.stringify(adminProducts));
}

/* ===== LOGIN ===== */
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const pwd = document.getElementById('loginPassword').value;
  const err = document.getElementById('loginError');
  if (pwd === getPassword()) {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('adminApp').classList.remove('hidden');
    loadProducts();
    initAdmin();
  } else {
    err.classList.add('show');
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginPassword').focus();
    setTimeout(() => err.classList.remove('show'), 3000);
  }
});

function logout() {
  document.getElementById('adminApp').classList.add('hidden');
  document.getElementById('loginScreen').style.display = '';
  document.getElementById('loginPassword').value = '';
}
document.getElementById('logoutBtn').addEventListener('click', logout);
document.getElementById('logoutBtnSm').addEventListener('click', logout);

/* ===== SIDEBAR MOBILE ===== */
document.getElementById('sidebarToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});
document.getElementById('adminMain').addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('open');
});

/* ===== VIEW SWITCHING ===== */
function switchView(viewName) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const view = document.getElementById(`view-${viewName}`);
  if (view) view.classList.add('active');
  const navItem = document.querySelector(`.nav-item[data-view="${viewName}"]`);
  if (navItem) navItem.classList.add('active');
  document.getElementById('sidebar').classList.remove('open');

  if (viewName === 'dashboard') renderDashboard();
  if (viewName === 'products') renderProductsTable();
  if (viewName === 'add-product') {
    resetForm();
    document.getElementById('formTitle').textContent = 'Add New Product';
    document.getElementById('formSubtitle').textContent = 'Fill in the details below';
    document.getElementById('submitBtnText').textContent = 'Save Product';
    document.getElementById('editProductId').value = '';
  }
  if (viewName === 'orders') renderOrders();
}

document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});

/* ===== INIT ADMIN ===== */
function initAdmin() {
  // Date
  document.getElementById('headerDate').innerHTML = new Date().toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

  // Emoji picker
  const picker = document.getElementById('emojiPicker');
  EMOJIS.forEach(e => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'emoji-opt';
    btn.textContent = e;
    btn.addEventListener('click', () => {
      document.getElementById('fieldEmoji').value = e;
      picker.querySelectorAll('.emoji-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
    picker.appendChild(btn);
  });

  // BG presets
  const bgContainer = document.getElementById('bgPresets');
  BG_PRESETS.forEach(bg => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'bg-preset';
    btn.style.background = bg;
    btn.title = bg;
    btn.addEventListener('click', () => {
      document.getElementById('fieldBg').value = bg;
      bgContainer.querySelectorAll('.bg-preset').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
    bgContainer.appendChild(btn);
  });

  // Image upload
  const area = document.getElementById('imageUploadArea');
  const input = document.getElementById('imageInput');
  area.addEventListener('click', () => input.click());
  area.addEventListener('dragover', e => { e.preventDefault(); area.classList.add('drag-over'); });
  area.addEventListener('dragleave', () => area.classList.remove('drag-over'));
  area.addEventListener('drop', e => {
    e.preventDefault(); area.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) handleImageFile(file);
  });
  input.addEventListener('change', () => {
    if (input.files[0]) handleImageFile(input.files[0]);
  });

  // Product search
  document.getElementById('productSearch').addEventListener('input', function() {
    productSearchQuery = this.value.toLowerCase();
    renderProductsTable();
  });

  // Filter tabs
  document.querySelectorAll('#productFilterTabs .tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#productFilterTabs .tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      productTableFilter = tab.dataset.cat;
      renderProductsTable();
    });
  });

  // Product form submit
  document.getElementById('productForm').addEventListener('submit', handleProductSubmit);

  // Password form
  document.getElementById('passwordForm').addEventListener('submit', handlePasswordChange);

  // Import
  document.getElementById('importInput').addEventListener('change', handleImport);

  renderDashboard();
}

/* ===== IMAGE HANDLING ===== */
function handleImageFile(file) {
  if (!file.type.startsWith('image/')) { showAdminToast('Please upload an image file', 'error'); return; }
  if (file.size > 5 * 1024 * 1024) { showAdminToast('Image must be under 5MB', 'error'); return; }
  const reader = new FileReader();
  reader.onload = (e) => {
    currentImageData = e.target.result;
    const preview = document.getElementById('imagePreview');
    const placeholder = document.getElementById('uploadPlaceholder');
    const actions = document.getElementById('imageActions');
    preview.src = currentImageData;
    preview.classList.remove('hidden');
    placeholder.style.display = 'none';
    actions.classList.remove('hidden');
    showAdminToast('Image uploaded successfully ✓', 'success');
  };
  reader.readAsDataURL(file);
}

function clearImage() {
  currentImageData = null;
  const preview = document.getElementById('imagePreview');
  const placeholder = document.getElementById('uploadPlaceholder');
  const actions = document.getElementById('imageActions');
  preview.src = '';
  preview.classList.add('hidden');
  placeholder.style.display = '';
  actions.classList.add('hidden');
  document.getElementById('imageInput').value = '';
}

/* ===== TAG SYSTEM ===== */
function addTag(type, value) {
  if (!value.trim()) return;
  const arr = type === 'sizes' ? currentSizes : currentColors;
  if (arr.includes(value)) return;
  arr.push(value);
  renderTags(type);
}

function addTagFromInput(type, inputId) {
  const input = document.getElementById(inputId);
  addTag(type, input.value.trim());
  input.value = '';
}

function removeTag(type, value) {
  if (type === 'sizes') currentSizes = currentSizes.filter(v => v !== value);
  else currentColors = currentColors.filter(v => v !== value);
  renderTags(type);
}

function renderTags(type) {
  const arr = type === 'sizes' ? currentSizes : currentColors;
  const container = document.getElementById(type === 'sizes' ? 'sizeTagList' : 'colorTagList');
  container.innerHTML = arr.map(v => `
    <span class="tag">
      ${v}
      <button type="button" class="tag-remove" onclick="removeTag('${type}','${v}')">✕</button>
    </span>
  `).join('');
}

/* ===== PRODUCT FORM ===== */
function resetForm() {
  document.getElementById('productForm').reset();
  document.getElementById('editProductId').value = '';
  currentSizes = [];
  currentColors = [];
  currentImageData = null;
  renderTags('sizes');
  renderTags('colors');
  clearImage();
  document.getElementById('formError').classList.remove('show');
  document.querySelectorAll('.emoji-opt').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.bg-preset').forEach(b => b.classList.remove('active'));
  document.getElementById('fieldEmoji').value = '';
  document.getElementById('fieldBg').value = '';
}

function handleProductSubmit(e) {
  e.preventDefault();
  const err = document.getElementById('formError');
  err.classList.remove('show');

  const name = document.getElementById('fieldName').value.trim();
  const category = document.getElementById('fieldCategory').value;
  const price = parseFloat(document.getElementById('fieldPrice').value);
  const desc = document.getElementById('fieldDesc').value.trim();

  if (!name) { showFormError('Product name is required'); return; }
  if (!category) { showFormError('Please select a category'); return; }
  if (!price || price <= 0) { showFormError('Please enter a valid price'); return; }
  if (!desc) { showFormError('Description is required'); return; }

  const oldPrice = parseFloat(document.getElementById('fieldOldPrice').value) || null;
  const rating = parseFloat(document.getElementById('fieldRating').value) || 4.9;
  const reviews = parseInt(document.getElementById('fieldReviews').value) || 0;
  const badge = document.getElementById('fieldBadge').value || null;
  const inStock = document.getElementById('fieldInStock').checked;
  const isNew = document.getElementById('fieldIsNew').checked;
  const customizable = document.getElementById('fieldCustomizable').checked;
  const emoji = document.getElementById('fieldEmoji').value || '🛍️';
  const bg = document.getElementById('fieldBg').value || 'linear-gradient(135deg,#fce4ec,#f8bbd0)';

  const editId = document.getElementById('editProductId').value;

  const productData = {
    name, category, price,
    oldPrice: oldPrice && oldPrice > price ? oldPrice : null,
    desc, badge, emoji, bg,
    rating: Math.min(5, Math.max(0, rating)),
    reviews,
    inStock, isNew, customizable,
    sizes: [...currentSizes],
    colors: [...currentColors],
    image: currentImageData,
  };

  if (editId) {
    // Edit existing
    const idx = adminProducts.findIndex(p => p.id === parseInt(editId));
    if (idx !== -1) {
      adminProducts[idx] = { ...adminProducts[idx], ...productData };
      showAdminToast('✓ Product updated successfully', 'success');
    }
  } else {
    // Add new
    const newId = Math.max(0, ...adminProducts.map(p => p.id)) + 1;
    adminProducts.unshift({ id: newId, ...productData });
    showAdminToast('✓ Product added successfully', 'success');
  }

  saveProducts();
  resetForm();
  switchView('products');
}

function showFormError(msg) {
  const err = document.getElementById('formError');
  err.textContent = msg;
  err.classList.add('show');
}

function editProduct(id) {
  const p = adminProducts.find(pr => pr.id === id);
  if (!p) return;

  switchView('add-product');
  document.getElementById('formTitle').textContent = 'Edit Product';
  document.getElementById('formSubtitle').textContent = `Editing: ${p.name}`;
  document.getElementById('submitBtnText').textContent = 'Update Product';
  document.getElementById('editProductId').value = p.id;

  document.getElementById('fieldName').value = p.name;
  document.getElementById('fieldCategory').value = p.category;
  document.getElementById('fieldPrice').value = p.price;
  document.getElementById('fieldOldPrice').value = p.oldPrice || '';
  document.getElementById('fieldDesc').value = p.desc;
  document.getElementById('fieldBadge').value = p.badge || '';
  document.getElementById('fieldRating').value = p.rating;
  document.getElementById('fieldReviews').value = p.reviews;
  document.getElementById('fieldInStock').checked = p.inStock;
  document.getElementById('fieldIsNew').checked = p.isNew;
  document.getElementById('fieldCustomizable').checked = p.customizable;
  document.getElementById('fieldEmoji').value = p.emoji || '';
  document.getElementById('fieldBg').value = p.bg || '';

  currentSizes = [...(p.sizes || [])];
  currentColors = [...(p.colors || [])];
  renderTags('sizes');
  renderTags('colors');

  // Image
  if (p.image) {
    currentImageData = p.image;
    const preview = document.getElementById('imagePreview');
    preview.src = p.image;
    preview.classList.remove('hidden');
    document.getElementById('uploadPlaceholder').style.display = 'none';
    document.getElementById('imageActions').classList.remove('hidden');
  }

  // Highlight emoji
  document.querySelectorAll('.emoji-opt').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === p.emoji);
  });

  // Highlight bg preset
  document.querySelectorAll('.bg-preset').forEach(btn => {
    btn.classList.toggle('active', btn.title === p.bg);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteProduct(id) {
  const p = adminProducts.find(pr => pr.id === id);
  if (!p) return;
  showConfirm(
    'Delete Product',
    `Are you sure you want to delete "${p.name}"? This cannot be undone.`,
    () => {
      adminProducts = adminProducts.filter(pr => pr.id !== id);
      saveProducts();
      renderProductsTable();
      renderDashboard();
      showAdminToast('Product deleted', 'error');
    }
  );
}

/* ===== DASHBOARD ===== */
function renderDashboard() {
  const total = adminProducts.length;
  const thrift = adminProducts.filter(p => p.category === 'thrift').length;
  const keychains = adminProducts.filter(p => p.category === 'keychains').length;
  const inStock = adminProducts.filter(p => p.inStock).length;
  const avgPrice = total ? (adminProducts.reduce((s,p) => s + p.price, 0) / total).toFixed(2) : '0.00';

  document.getElementById('statsGrid').innerHTML = `
    <div class="stat-card">
      <div class="stat-card-top">
        <span class="stat-icon">🛍️</span>
        <span class="stat-change up">+${adminProducts.filter(p=>p.isNew).length} new</span>
      </div>
      <div class="stat-value">${total}</div>
      <div class="stat-label">Total Products</div>
    </div>
    <div class="stat-card">
      <div class="stat-card-top">
        <span class="stat-icon">👗</span>
        <span class="stat-change neutral">${Math.round(thrift/total*100)||0}%</span>
      </div>
      <div class="stat-value">${thrift}</div>
      <div class="stat-label">Thrift Items</div>
    </div>
    <div class="stat-card">
      <div class="stat-card-top">
        <span class="stat-icon">🔑</span>
        <span class="stat-change neutral">${Math.round(keychains/total*100)||0}%</span>
      </div>
      <div class="stat-value">${keychains}</div>
      <div class="stat-label">Keychains</div>
    </div>
    <div class="stat-card">
      <div class="stat-card-top">
        <span class="stat-icon">💰</span>
        <span class="stat-change up">avg</span>
      </div>
      <div class="stat-value">₹${avgPrice}</div>
      <div class="stat-label">Avg. Price</div>
    </div>
  `;

  // Recent products
  const recentList = document.getElementById('recentProductsList');
  const recent = adminProducts.slice(0, 5);
  recentList.innerHTML = recent.map(p => `
    <div class="recent-product-item">
      <div class="recent-thumb" style="background:${p.bg}">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" />` : p.emoji}
      </div>
      <div class="recent-info">
        <div class="recent-name">${p.name}</div>
        <div class="recent-cat">${p.category === 'thrift' ? 'Thrift Fashion' : 'Keychain'}</div>
      </div>
      <div class="recent-price">₹${p.price.toFixed(2)}</div>
    </div>
  `).join('');

  // Category bars
  document.getElementById('categoryBars').innerHTML = `
    <div class="cat-bar-item">
      <div class="cat-bar-label"><span>Thrift Fashion</span><span>${thrift} items</span></div>
      <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${total?thrift/total*100:0}%;background:var(--blue)"></div></div>
    </div>
    <div class="cat-bar-item">
      <div class="cat-bar-label"><span>Keychains</span><span>${keychains} items</span></div>
      <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${total?keychains/total*100:0}%;background:var(--pink)"></div></div>
    </div>
    <div class="cat-bar-item">
      <div class="cat-bar-label"><span>In Stock</span><span>${inStock} items</span></div>
      <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${total?inStock/total*100:0}%;background:var(--green)"></div></div>
    </div>
    <div class="cat-bar-item">
      <div class="cat-bar-label"><span>New Arrivals</span><span>${adminProducts.filter(p=>p.isNew).length} items</span></div>
      <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${total?adminProducts.filter(p=>p.isNew).length/total*100:0}%;background:var(--yellow)"></div></div>
    </div>
  `;
}

/* ===== PRODUCTS TABLE ===== */
function renderProductsTable() {
  let filtered = [...adminProducts];

  if (productTableFilter !== 'all') {
    filtered = filtered.filter(p => p.category === productTableFilter);
  }
  if (productSearchQuery) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(productSearchQuery) ||
      p.desc.toLowerCase().includes(productSearchQuery) ||
      p.category.toLowerCase().includes(productSearchQuery)
    );
  }

  document.getElementById('productCountLabel').textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''} found`;

  const tbody = document.getElementById('productsTableBody');

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr><td colspan="7">
        <div class="empty-table">
          <div class="empty-icon">🔍</div>
          <p>No products found</p>
        </div>
      </td></tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(p => `
    <tr>
      <td>
        <div class="table-thumb" style="background:${p.bg}">
          ${p.image ? `<img src="${p.image}" alt="${p.name}" />` : p.emoji}
        </div>
      </td>
      <td>
        <div class="table-name">
          ${p.name}
          <small>${p.desc.substring(0, 60)}...</small>
        </div>
      </td>
      <td><span class="cat-badge ${p.category}">${p.category === 'thrift' ? 'Thrift' : 'Keychain'}</span></td>
      <td>
        <strong>₹${p.price.toFixed(2)}</strong>
        ${p.oldPrice ? `<br><small style="color:var(--gray);text-decoration:line-through">₹${p.oldPrice.toFixed(2)}</small>` : ''}
      </td>
      <td>
        <span class="stock-badge ${p.inStock ? 'in' : 'out'}">
          <span class="stock-dot ${p.inStock ? 'in' : 'out'}"></span>
          ${p.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </td>
      <td>${p.badge ? `<span class="badge-pill">${p.badge}</span>` : '<span style="color:var(--gray)">—</span>'}</td>
      <td>
        <div class="table-actions">
          <button class="action-btn edit" onclick="editProduct(${p.id})">✏️ Edit</button>
          <button class="action-btn delete" onclick="deleteProduct(${p.id})">🗑️</button>
        </div>
      </td>
    </tr>
  `).join('');
}

/* ===== ORDERS ===== */
function renderOrders() {
  const list = document.getElementById('ordersList');
  list.innerHTML = MOCK_ORDERS.map(o => `
    <div class="order-card">
      <div>
        <div class="order-id">${o.id} · ${o.date}</div>
        <div class="order-customer">${o.customer}</div>
        <div class="order-items">${o.items}</div>
      </div>
      <div class="order-total">₹${o.total.toFixed(2)}</div>
      <span class="order-status ${o.status}">${o.status.charAt(0).toUpperCase() + o.status.slice(1)}</span>
    </div>
  `).join('');
}

/* ===== SETTINGS ===== */
function handlePasswordChange(e) {
  e.preventDefault();
  const current = document.getElementById('currentPwd').value;
  const newPwd = document.getElementById('newPwd').value;
  const confirm = document.getElementById('confirmPwd').value;
  const msg = document.getElementById('pwdMsg');

  msg.className = 'settings-msg';

  if (current !== getPassword()) {
    msg.textContent = 'Current password is incorrect';
    msg.classList.add('error');
    return;
  }
  if (newPwd.length < 6) {
    msg.textContent = 'New password must be at least 6 characters';
    msg.classList.add('error');
    return;
  }
  if (newPwd !== confirm) {
    msg.textContent = 'Passwords do not match';
    msg.classList.add('error');
    return;
  }

  localStorage.setItem(ADMIN_PASSWORD_KEY, newPwd);
  msg.textContent = '✓ Password updated successfully';
  msg.classList.add('success');
  this.reset();
  setTimeout(() => { msg.className = 'settings-msg'; }, 3000);
}

function saveStoreInfo() {
  showAdminToast('✓ Store info saved', 'success');
}

function exportProducts() {
  const data = JSON.stringify(adminProducts, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `thrift-thread-products-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showAdminToast('✓ Products exported', 'success');
}

function importProducts() {
  document.getElementById('importInput').click();
}

function handleImport(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!Array.isArray(data)) throw new Error('Invalid format');
      showConfirm(
        'Import Products',
        `This will replace your current ${adminProducts.length} products with ${data.length} imported products. Continue?`,
        () => {
          adminProducts = data;
          saveProducts();
          renderDashboard();
          showAdminToast(`✓ Imported ${data.length} products`, 'success');
        }
      );
    } catch(err) {
      showAdminToast('Invalid JSON file', 'error');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function confirmReset() {
  showConfirm(
    'Reset Products',
    'This will delete all your products and restore the default 12 demo products. This cannot be undone.',
    () => {
      adminProducts = DEFAULT_PRODUCTS.map(p => ({ ...p, image: null }));
      saveProducts();
      renderDashboard();
      showAdminToast('✓ Products reset to defaults', 'success');
    }
  );
}

/* ===== CONFIRM DIALOG ===== */
function showConfirm(title, msg, onConfirm) {
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmMsg').textContent = msg;
  document.getElementById('confirmOverlay').classList.add('open');
  confirmCallback = onConfirm;
}

document.getElementById('confirmOk').addEventListener('click', () => {
  document.getElementById('confirmOverlay').classList.remove('open');
  if (confirmCallback) { confirmCallback(); confirmCallback = null; }
});
document.getElementById('confirmCancel').addEventListener('click', () => {
  document.getElementById('confirmOverlay').classList.remove('open');
  confirmCallback = null;
});

/* ===== TOAST ===== */
let toastTimer;
function showAdminToast(msg, type = '') {
  const t = document.getElementById('adminToast');
  t.textContent = msg;
  t.className = `admin-toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
}

/* ===== KEYBOARD SHORTCUTS ===== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('confirmOverlay').classList.remove('open');
    document.getElementById('sidebar').classList.remove('open');
  }
});

/* ===== AUTO-INIT if already logged in (session) ===== */
// Uncomment below to skip login during development:
// document.getElementById('loginScreen').style.display = 'none';
// document.getElementById('adminApp').classList.remove('hidden');
// loadProducts(); initAdmin();
