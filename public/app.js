/* ===== DATA ===== */
const products = [
  { id:1, name:"Vintage Levi's Denim Jacket", category:"thrift", price:48, oldPrice:null, badge:"New", emoji:"🧥", bg:"linear-gradient(135deg,#dbeafe,#bfdbfe)", rating:4.9, reviews:23, desc:"A perfectly worn-in Levi's denim jacket from the 90s. Size M. Minor fading adds to the charm.", sizes:["XS","S","M","L"], isNew:true, inStock:true },
  { id:2, name:"Pastel Resin Keychain", category:"keychains", price:14, oldPrice:null, badge:"Handmade", emoji:"🔑", bg:"linear-gradient(135deg,#fce4ec,#f8bbd0)", rating:5.0, reviews:41, desc:"Hand-poured pastel resin keychain with dried flowers inside. Each one is completely unique.", colors:["Pink","Lavender","Mint","Clear"], isNew:true, inStock:true, customizable:true },
  { id:3, name:"Y2K Butterfly Crop Top", category:"thrift", price:22, oldPrice:30, badge:"Sale", emoji:"🦋", bg:"linear-gradient(135deg,#e8f5e9,#c8e6c9)", rating:4.7, reviews:18, desc:"Adorable Y2K-era butterfly print crop top. Size S. Stretchy material, great condition.", sizes:["XS","S","M"], isNew:false, inStock:true },
  { id:4, name:"Galaxy Swirl Keychain", category:"keychains", price:16, oldPrice:null, badge:"New", emoji:"🌌", bg:"linear-gradient(135deg,#ede7f6,#d1c4e9)", rating:4.8, reviews:29, desc:"Deep purple and blue galaxy swirl resin keychain with gold flakes. Absolutely stunning.", colors:["Galaxy","Midnight","Cosmos"], isNew:true, inStock:true, customizable:true },
  { id:5, name:"Oversized Plaid Blazer", category:"thrift", price:55, oldPrice:null, badge:null, emoji:"🧣", bg:"linear-gradient(135deg,#fff3e0,#ffe0b2)", rating:4.6, reviews:12, desc:"Vintage oversized plaid blazer in warm autumn tones. Size L (fits M-XL). Perfect layering piece.", sizes:["M","L","XL"], isNew:false, inStock:true },
  { id:6, name:"Strawberry Charm Keychain", category:"keychains", price:12, oldPrice:null, badge:"Fan Fave", emoji:"🍓", bg:"linear-gradient(135deg,#fce4ec,#ffcdd2)", rating:5.0, reviews:67, desc:"Our most popular design! Cute strawberry charm with resin coating. Comes with a gold clasp.", colors:["Red","Pink","White"], isNew:false, inStock:true, customizable:true },
  { id:7, name:"90s Windbreaker Jacket", category:"thrift", price:38, oldPrice:50, badge:"Sale", emoji:"🌬️", bg:"linear-gradient(135deg,#e0f2fe,#b3e5fc)", rating:4.5, reviews:9, desc:"Colorful 90s windbreaker in excellent condition. Size M. Lightweight and perfect for layering.", sizes:["S","M","L"], isNew:false, inStock:true },
  { id:8, name:"Custom Name Keychain", category:"keychains", price:18, oldPrice:null, badge:"Custom", emoji:"✨", bg:"linear-gradient(135deg,#fffde7,#fff9c4)", rating:4.9, reviews:88, desc:"Personalized resin keychain with your name or initials. Takes 3-5 days to make. Worth the wait!", colors:["Gold","Silver","Rose Gold","Rainbow"], isNew:false, inStock:true, customizable:true },
  { id:9, name:"Floral Mini Dress", category:"thrift", price:32, oldPrice:null, badge:"New", emoji:"🌸", bg:"linear-gradient(135deg,#fce4ec,#f8bbd0)", rating:4.8, reviews:15, desc:"Delicate floral mini dress from the early 2000s. Size S. Excellent condition, no flaws.", sizes:["XS","S"], isNew:true, inStock:true },
  { id:10, name:"Moon Phase Keychain Set", category:"keychains", price:28, oldPrice:null, badge:"Set of 3", emoji:"🌙", bg:"linear-gradient(135deg,#e8eaf6,#c5cae9)", rating:4.9, reviews:34, desc:"Set of 3 moon phase keychains — new moon, crescent, and full moon. Perfect gift set.", colors:["Pearl","Midnight","Gold"], isNew:false, inStock:true, customizable:false },
  { id:11, name:"Vintage Band Tee", category:"thrift", price:28, oldPrice:null, badge:"Rare", emoji:"🎸", bg:"linear-gradient(135deg,#f3e5f5,#e1bee7)", rating:4.7, reviews:21, desc:"Authentic vintage band tee from the 80s. Faded graphics, soft cotton. Size M. One of a kind.", sizes:["S","M","L"], isNew:false, inStock:true },
  { id:12, name:"Holographic Keychain", category:"keychains", price:15, oldPrice:null, badge:"New", emoji:"🌈", bg:"linear-gradient(135deg,#e0f7fa,#b2ebf2)", rating:4.6, reviews:19, desc:"Iridescent holographic resin keychain that changes color in the light. Absolutely magical.", colors:["Holo","Iridescent","Chrome"], isNew:true, inStock:true, customizable:true },
];

const galleryItems = [
  { emoji:"👗", bg:"linear-gradient(135deg,#fce4ec,#f8bbd0)", label:"Thrift Haul" },
  { emoji:"🔑", bg:"linear-gradient(135deg,#ede7f6,#d1c4e9)", label:"New Keychains" },
  { emoji:"🧥", bg:"linear-gradient(135deg,#e3f2fd,#bbdefb)", label:"Vintage Finds" },
  { emoji:"✨", bg:"linear-gradient(135deg,#fffde7,#fff9c4)", label:"Custom Orders" },
  { emoji:"🌸", bg:"linear-gradient(135deg,#fce4ec,#ffcdd2)", label:"Spring Drops" },
  { emoji:"🌙", bg:"linear-gradient(135deg,#e8eaf6,#c5cae9)", label:"Moon Collection" },
  { emoji:"🍓", bg:"linear-gradient(135deg,#e8f5e9,#c8e6c9)", label:"Fan Faves" },
  { emoji:"💫", bg:"linear-gradient(135deg,#fff3e0,#ffe0b2)", label:"Behind the Scenes" },
];

const testimonials = [
  { text:"I ordered a custom keychain with my name and it arrived even more beautiful than I imagined. The resin is so clear and the colors are perfect. Will definitely order again!", author:"Sofia M.", handle:"@sofiamakes", avatar:"🌸", stars:5 },
  { text:"The vintage denim jacket I got is absolutely perfect. You can tell every piece is carefully selected. It fits like it was made for me. 10/10 would recommend!", author:"Jade K.", handle:"@jadestyle", avatar:"💜", stars:5 },
  { text:"Thrift & Thread is my go-to for unique pieces. I've ordered 4 keychains now and each one is better than the last. The packaging is also so cute!", author:"Mia R.", handle:"@mia.thrifts", avatar:"🌙", stars:5 },
  { text:"Got the strawberry keychain as a gift for my bestie and she LOVED it. The quality is amazing for the price. Shipping was fast too!", author:"Lily T.", handle:"@lilythreads", avatar:"🍓", stars:5 },
  { text:"The Y2K crop top is everything. It's exactly as described and the photos don't do it justice. This shop has such a good eye for vintage pieces.", author:"Zara P.", handle:"@zaravintage", avatar:"🦋", stars:5 },
  { text:"Ordered a custom name keychain for my whole friend group. Everyone was obsessed. The seller was so sweet and communicated throughout the whole process.", author:"Emma L.", handle:"@emmaandco", avatar:"✨", stars:5 },
];

const timelineData = [
  { year:"2021", title:"The Beginning", desc:"Started making keychains at the kitchen table as a hobby. First sale was to a neighbor who couldn't stop complimenting the resin work." },
  { year:"2022", title:"The Thrift Hunt Begins", desc:"Started combining keychain making with weekend thrift store trips. Realized there was a market for curated, quality vintage pieces." },
  { year:"2023", title:"Going Online", desc:"Launched our first online shop. Sold out in 48 hours. The community response was overwhelming and humbling." },
  { year:"2024", title:"500 Happy Customers", desc:"Hit our 500th order milestone. Expanded the keychain line to include custom name pieces and seasonal collections." },
  { year:"2025", title:"Still Growing", desc:"Now shipping worldwide, collaborating with local artists, and building a community of people who believe fashion should be personal and sustainable." },
];

const valuesData = [
  { icon:"♻️", title:"Sustainable", desc:"Every thrifted piece we sell is one less item in a landfill. We believe fashion can be beautiful and responsible." },
  { icon:"🤲", title:"Handmade", desc:"Every keychain is made by hand, with care and intention. No two pieces are exactly alike — that's the point." },
  { icon:"💛", title:"Community", desc:"We're more than a shop. We're a community of people who love unique, personal style and sustainable choices." },
  { icon:"🌍", title:"Inclusive", desc:"Fashion is for everyone. Our pieces are curated to celebrate all styles, sizes, and aesthetics." },
];

/* ===== LOAD PRODUCTS FROM ADMIN (localStorage) ===== */
(function loadAdminProducts() {
  const stored = localStorage.getItem('tt_products');
  if (stored) {
    try {
      const adminData = JSON.parse(stored);
      if (Array.isArray(adminData) && adminData.length > 0) {
        // Replace the hardcoded products array with admin-managed data
        products.length = 0;
        adminData.forEach(p => products.push(p));
      }
    } catch(e) { /* fall back to defaults */ }
  }
})();

/* ===== STATE ===== */
let cart = JSON.parse(localStorage.getItem('tt_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('tt_wishlist') || '[]');
let currentPage = 'home';
let currentFilter = 'all';
let carouselIndex = 0;
let carouselItemsPerView = 4;
let currentUser = null;

/* ===== USER AUTH ===== */
function checkUser() {
  const user = localStorage.getItem('user');
  if (user) {
    currentUser = JSON.parse(user);
    updateNavForUser();
  }
}

function updateNavForUser() {
  const navLinks = document.getElementById('navLinks');
  if (currentUser) {
    // Replace Login/Register with Account/Logout
    const loginLi = navLinks.querySelector('a[href="login.html"]').parentElement;
    const registerLi = navLinks.querySelector('a[href="register.html"]').parentElement;
    if (loginLi) loginLi.innerHTML = `<a href="#" class="nav-link" onclick="logout()">Logout</a>`;
    if (registerLi) registerLi.innerHTML = `<span class="nav-link">Hi, ${currentUser.name}</span>`;
  }
}

function logout() {
  localStorage.removeItem('user');
  currentUser = null;
  location.reload();
}

/* ===== UTILS ===== */
function saveCart() { localStorage.setItem('tt_cart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('tt_wishlist', JSON.stringify(wishlist)); }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function bumpBadge(el) {
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
  if (total > 0) bumpBadge(badge);
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadge');
  badge.textContent = wishlist.length;
  badge.style.display = wishlist.length > 0 ? 'flex' : 'none';
}

function formatPrice(p) { return '₹' + p.toFixed(2); }

/* ===== NAVIGATION ===== */
function navigateTo(page, filter) {
  if (currentPage === page && !filter) return;
  currentPage = page;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });

  const target = document.getElementById(page);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (page === 'shop') {
    if (filter) setFilter(filter);
    renderShopGrid();
  }
  if (page === 'cart') renderCartPage();
  if (page === 'about') initTimeline();

  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');

  // Re-trigger reveal animations
  setTimeout(initReveal, 100);
}

/* ===== LOADER ===== */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    initReveal();
  }, 2200);
});

/* ===== NAVBAR ===== */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

document.getElementById('hamburger').addEventListener('click', function() {
  this.classList.toggle('open');
  document.getElementById('navLinks').classList.toggle('open');
});

/* ===== REVEAL ON SCROLL ===== */
function initReveal() {
  const els = document.querySelectorAll('.reveal-up:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

/* ===== PRODUCT CARD BUILDER ===== */
function buildProductCard(product, context) {
  const inWishlist = wishlist.includes(product.id);
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = product.id;
  card.dataset.category = product.category;
  card.innerHTML = `
    <div class="product-img-wrap">
      ${product.image
        ? `<img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy" />`
        : `<div class="product-img-placeholder" style="background:${product.bg}">
             <div class="product-img-bg" style="background:${product.bg}"></div>
             <span class="product-emoji">${product.emoji}</span>
           </div>`
      }
      ${product.badge ? `<span class="product-badge ${product.badge === 'New' || product.badge === 'Handmade' ? 'new' : product.badge === 'Sale' ? 'sale' : ''}">${product.badge}</span>` : ''}
      <button class="wishlist-btn ${inWishlist ? 'active' : ''}" data-id="${product.id}" aria-label="Add to wishlist">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </button>
      <div class="product-actions">
        <button class="product-action-btn btn-quick-view" data-id="${product.id}">Quick View</button>
        <button class="product-action-btn btn-add-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    </div>
    <div class="product-info">
      <div class="product-category">${product.category === 'thrift' ? 'Thrift Fashion' : 'Handmade Keychain'}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-price-row">
        <span class="product-price">${formatPrice(product.price)}</span>
        ${product.oldPrice ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>` : ''}
      </div>
      <div class="product-rating">
        <span class="stars">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '½' : ''}</span>
        <span class="rating-count">(${product.reviews})</span>
      </div>
    </div>
  `;

  // Events
  card.querySelector('.wishlist-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleWishlist(product.id, e.currentTarget);
  });
  card.querySelector('.btn-quick-view').addEventListener('click', (e) => {
    e.stopPropagation();
    openQuickView(product.id);
  });
  card.querySelector('.btn-add-cart').addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(product.id);
    animateAddToCart(e.currentTarget);
  });
  card.addEventListener('click', () => openProductDetail(product.id));

  return card;
}

/* ===== CART FUNCTIONS ===== */
function addToCart(productId, qty = 1, variant = null) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId && i.variant === variant);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty, variant });
  }
  saveCart();
  updateCartBadge();
  renderCartSidebar();
  showToast(`✓ ${product.name} added to cart`);
}

function removeFromCart(productId, variant = null) {
  cart = cart.filter(i => !(i.id === productId && i.variant === variant));
  saveCart();
  updateCartBadge();
  renderCartSidebar();
  if (currentPage === 'cart') renderCartPage();
}

function updateCartQty(productId, delta, variant = null) {
  const item = cart.find(i => i.id === productId && i.variant === variant);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartBadge();
  renderCartSidebar();
  if (currentPage === 'cart') renderCartPage();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const p = products.find(pr => pr.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function animateAddToCart(btn) {
  const orig = btn.textContent;
  btn.textContent = '✓ Added!';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
  }, 1500);
}

/* ===== WISHLIST FUNCTIONS ===== */
function toggleWishlist(productId, btn) {
  const product = products.find(p => p.id === productId);
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
    if (btn) {
      btn.classList.remove('active');
      btn.querySelector('svg').setAttribute('fill', 'none');
    }
    showToast(`Removed from wishlist`);
  } else {
    wishlist.push(productId);
    if (btn) {
      btn.classList.add('active');
      btn.querySelector('svg').setAttribute('fill', 'currentColor');
    }
    showToast(`♥ Added to wishlist`);
  }
  saveWishlist();
  updateWishlistBadge();
  renderWishlistSidebar();
}

/* ===== CART SIDEBAR ===== */
function renderCartSidebar() {
  const container = document.getElementById('cartSidebarItems');
  const footer = document.getElementById('cartSidebarFooter');
  document.getElementById('cartCount').textContent = `(${cart.reduce((s,i)=>s+i.qty,0)})`;

  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-sidebar-empty"><div class="empty-icon">🛒</div><p>Your cart is empty</p></div>`;
    footer.innerHTML = '';
    return;
  }

  container.innerHTML = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-sidebar-item">
        <div class="cart-sidebar-img" style="background:${p.bg}">${p.emoji}</div>
        <div class="cart-sidebar-details">
          <div class="cart-sidebar-name">${p.name}</div>
          ${item.variant ? `<div style="font-size:0.75rem;color:var(--gray-500)">${item.variant}</div>` : ''}
          <div class="cart-sidebar-price">${formatPrice(p.price * item.qty)} <span style="font-weight:400;color:var(--gray-500);font-size:0.8rem">× ${item.qty}</span></div>
          <button class="cart-sidebar-remove" onclick="removeFromCart(${p.id}, ${item.variant ? `'${item.variant}'` : 'null'})">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  const total = getCartTotal();
  footer.innerHTML = `
    <div class="sidebar-total"><span>Total</span><span>${formatPrice(total)}</span></div>
    <button class="sidebar-checkout-btn" onclick="handleCheckout()">Checkout → ${formatPrice(total)}</button>
    <button class="sidebar-view-cart" onclick="openCartPage()">View Full Cart</button>
  `;
}

function openCartPage() {
  closeCartSidebar();
  navigateTo('cart');
}

function handleCheckout() {
  showToast('🎉 Redirecting to checkout...');
  setTimeout(() => showToast('✓ Thank you for your order!'), 2000);
}

/* ===== WISHLIST SIDEBAR ===== */
function renderWishlistSidebar() {
  const container = document.getElementById('wishlistSidebarItems');
  document.getElementById('wishlistCount').textContent = `(${wishlist.length})`;

  if (wishlist.length === 0) {
    container.innerHTML = `<div class="cart-sidebar-empty"><div class="empty-icon">♡</div><p>Your wishlist is empty</p></div>`;
    return;
  }

  container.innerHTML = wishlist.map(id => {
    const p = products.find(pr => pr.id === id);
    if (!p) return '';
    return `
      <div class="cart-sidebar-item">
        <div class="cart-sidebar-img" style="background:${p.bg}">${p.emoji}</div>
        <div class="cart-sidebar-details">
          <div class="cart-sidebar-name">${p.name}</div>
          <div class="cart-sidebar-price">${formatPrice(p.price)}</div>
          <div style="display:flex;gap:0.5rem;margin-top:0.25rem">
            <button class="cart-sidebar-remove" onclick="addToCart(${p.id});showToast('Added to cart!')">Add to Cart</button>
            <button class="cart-sidebar-remove" onclick="toggleWishlist(${p.id})">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ===== SIDEBAR OPEN/CLOSE ===== */
function openCartSidebar() {
  renderCartSidebar();
  document.getElementById('cartSidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCartSidebar() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.body.style.overflow = '';
}
function openWishlistSidebar() {
  renderWishlistSidebar();
  document.getElementById('wishlistSidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeWishlistSidebar() {
  document.getElementById('wishlistSidebar').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cartBtn').addEventListener('click', openCartSidebar);
document.getElementById('cartClose').addEventListener('click', closeCartSidebar);
document.getElementById('cartOverlay').addEventListener('click', closeCartSidebar);
document.getElementById('wishlistBtn').addEventListener('click', openWishlistSidebar);
document.getElementById('wishlistClose').addEventListener('click', closeWishlistSidebar);
document.getElementById('wishlistOverlay').addEventListener('click', closeWishlistSidebar);

/* ===== QUICK VIEW MODAL ===== */
function openQuickView(productId) {
  const p = products.find(pr => pr.id === productId);
  if (!p) return;
  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-img" style="background:${p.bg}">${p.emoji}</div>
      <div>
        <div class="product-detail-category">${p.category === 'thrift' ? 'Thrift Fashion' : 'Handmade Keychain'}</div>
        <h2 style="font-family:var(--font-display);font-size:1.75rem;font-weight:700;margin-bottom:0.75rem">${p.name}</h2>
        <div class="product-detail-rating">
          <span class="stars">${'★'.repeat(Math.floor(p.rating))}</span>
          <span class="rating-count">(${p.reviews} reviews)</span>
        </div>
        <div style="font-size:1.75rem;font-weight:700;margin:1rem 0">${formatPrice(p.price)}${p.oldPrice ? `<span style="font-size:1rem;color:var(--gray-500);text-decoration:line-through;margin-left:0.5rem">${formatPrice(p.oldPrice)}</span>` : ''}</div>
        <p style="color:var(--gray-700);line-height:1.7;margin-bottom:1.5rem">${p.desc}</p>
        ${p.sizes ? `<div class="product-options"><div class="option-label">Size</div><div class="option-chips">${p.sizes.map(s=>`<button class="option-chip" onclick="this.parentElement.querySelectorAll('.option-chip').forEach(c=>c.classList.remove('active'));this.classList.add('active')">${s}</button>`).join('')}</div></div>` : ''}
        ${p.colors ? `<div class="product-options"><div class="option-label">Color</div><div class="option-chips">${p.colors.map(c=>`<button class="option-chip" onclick="this.parentElement.querySelectorAll('.option-chip').forEach(ch=>ch.classList.remove('active'));this.classList.add('active')">${c}</button>`).join('')}</div></div>` : ''}
        ${p.customizable ? `<div class="custom-input-wrap"><label class="custom-input-label">Personalization (optional)</label><input type="text" class="custom-input" placeholder="e.g. Your name, initials, or a short message" maxlength="30" /></div>` : ''}
        <div style="display:flex;gap:1rem;margin-top:1.5rem">
          <button class="btn btn-primary" style="flex:1" onclick="addToCart(${p.id});closeModal();animateAddToCart(this)">Add to Cart</button>
          <button class="btn btn-outline" onclick="openProductDetail(${p.id});closeModal()">Full Details</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); closeCartSidebar(); closeWishlistSidebar(); } });

/* ===== PRODUCT DETAIL PAGE ===== */
function openProductDetail(productId) {
  const p = products.find(pr => pr.id === productId);
  if (!p) return;
  const container = document.getElementById('productContainer');
  const suggested = products.filter(pr => pr.id !== p.id && pr.category === p.category).slice(0, 4);

  container.innerHTML = `
    <button class="back-btn" onclick="navigateTo('shop')">← Back to Shop</button>
    <div class="product-detail-layout">
      <div class="product-gallery">
        <div class="gallery-main" id="galleryMain" style="background:${p.bg}">${p.emoji}</div>
        <div class="gallery-thumbs">
          ${[p.emoji, '🔍', '📦', '✨'].map((e,i) => `
            <div class="gallery-thumb ${i===0?'active':''}" style="background:${p.bg}" onclick="selectThumb(this, '${e}', '${p.bg}')">${e}</div>
          `).join('')}
        </div>
      </div>
      <div class="product-detail-info">
        <div class="product-detail-category">${p.category === 'thrift' ? '✦ Thrift Fashion' : '✦ Handmade Keychain'}</div>
        <h1 class="product-detail-name">${p.name}</h1>
        <div class="product-detail-rating">
          <span class="stars">${'★'.repeat(Math.floor(p.rating))}</span>
          <span class="rating-count">${p.rating} · ${p.reviews} reviews</span>
        </div>
        <div class="product-detail-price">
          ${formatPrice(p.price)}
          ${p.oldPrice ? `<span class="old">${formatPrice(p.oldPrice)}</span>` : ''}
        </div>
        <p class="product-detail-desc">${p.desc}</p>
        ${p.sizes ? `
          <div class="product-options">
            <div class="option-label">Select Size</div>
            <div class="option-chips">
              ${p.sizes.map((s,i) => `<button class="option-chip ${i===0?'active':''}" onclick="this.parentElement.querySelectorAll('.option-chip').forEach(c=>c.classList.remove('active'));this.classList.add('active')">${s}</button>`).join('')}
            </div>
          </div>
        ` : ''}
        ${p.colors ? `
          <div class="product-options">
            <div class="option-label">Select Color</div>
            <div class="option-chips">
              ${p.colors.map((c,i) => `<button class="option-chip ${i===0?'active':''}" onclick="this.parentElement.querySelectorAll('.option-chip').forEach(ch=>ch.classList.remove('active'));this.classList.add('active')">${c}</button>`).join('')}
            </div>
          </div>
        ` : ''}
        ${p.customizable ? `
          <div class="custom-input-wrap">
            <label class="custom-input-label">✦ Personalization</label>
            <input type="text" class="custom-input" id="customText" placeholder="Enter your name, initials, or a short message (max 30 chars)" maxlength="30" />
            <p style="font-size:0.75rem;color:var(--gray-500);margin-top:0.4rem">Leave blank for no personalization. Takes 3-5 extra days.</p>
          </div>
        ` : ''}
        <div class="qty-row">
          <div class="qty-control">
            <button class="qty-btn" id="qtyMinus">−</button>
            <span class="qty-num" id="qtyNum">1</span>
            <button class="qty-btn" id="qtyPlus">+</button>
          </div>
          <span style="font-size:0.85rem;color:var(--gray-500)">In Stock ✓</span>
        </div>
        <div class="detail-actions">
          <button class="btn btn-primary" id="detailAddCart">Add to Cart</button>
          <button class="btn btn-outline" id="detailWishlist">${wishlist.includes(p.id) ? '♥ Wishlisted' : '♡ Wishlist'}</button>
        </div>
        <div class="product-meta">
          <div class="meta-item"><span class="meta-icon">🚚</span><span class="meta-text">Free shipping on orders over $50</span></div>
          <div class="meta-item"><span class="meta-icon">↩️</span><span class="meta-text">Easy returns within 14 days</span></div>
          <div class="meta-item"><span class="meta-icon">🔒</span><span class="meta-text">Secure checkout</span></div>
          ${p.customizable ? `<div class="meta-item"><span class="meta-icon">⏱️</span><span class="meta-text">Custom orders take 3-5 extra business days</span></div>` : ''}
        </div>
      </div>
    </div>
    <div class="suggested-section">
      <div class="section-header">
        <span class="section-tag">✦ You Might Also Like</span>
        <h2 class="section-title">More ${p.category === 'thrift' ? 'Thrift Finds' : 'Keychains'}</h2>
      </div>
      <div class="products-grid" id="suggestedGrid"></div>
    </div>
  `;

  // Qty controls
  let qty = 1;
  document.getElementById('qtyMinus').addEventListener('click', () => { qty = Math.max(1, qty-1); document.getElementById('qtyNum').textContent = qty; });
  document.getElementById('qtyPlus').addEventListener('click', () => { qty = Math.min(10, qty+1); document.getElementById('qtyNum').textContent = qty; });

  // Add to cart
  document.getElementById('detailAddCart').addEventListener('click', function() {
    const customText = document.getElementById('customText')?.value || null;
    addToCart(p.id, qty, customText);
    animateAddToCart(this);
  });

  // Wishlist
  document.getElementById('detailWishlist').addEventListener('click', function() {
    toggleWishlist(p.id);
    this.textContent = wishlist.includes(p.id) ? '♥ Wishlisted' : '♡ Wishlist';
  });

  // Suggested
  const suggestedGrid = document.getElementById('suggestedGrid');
  suggested.forEach(sp => suggestedGrid.appendChild(buildProductCard(sp)));

  navigateTo('product');
}

function selectThumb(el, emoji, bg) {
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const main = document.getElementById('galleryMain');
  main.style.background = bg;
  main.textContent = emoji;
  main.style.animation = 'none';
  void main.offsetWidth;
  main.style.animation = 'pageFadeIn 0.3s ease';
}

/* ===== SHOP PAGE ===== */
function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
}

function renderShopGrid() {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  grid.innerHTML = '';

  let filtered = [...products];
  if (currentFilter === 'thrift') filtered = filtered.filter(p => p.category === 'thrift');
  else if (currentFilter === 'keychains') filtered = filtered.filter(p => p.category === 'keychains');
  else if (currentFilter === 'new') filtered = filtered.filter(p => p.isNew);

  const sort = document.getElementById('sortSelect')?.value;
  if (sort === 'price-low') filtered.sort((a,b) => a.price - b.price);
  else if (sort === 'price-high') filtered.sort((a,b) => b.price - a.price);
  else if (sort === 'newest') filtered.sort((a,b) => b.isNew - a.isNew);

  filtered.forEach((p, i) => {
    const card = buildProductCard(p, 'shop');
    card.style.animationDelay = `${i * 50}ms`;
    card.classList.add('fade-in');
    grid.appendChild(card);
  });
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setFilter(btn.dataset.filter);
    renderShopGrid();
  });
});

document.getElementById('sortSelect')?.addEventListener('change', renderShopGrid);

/* ===== CART PAGE ===== */
function renderCartPage() {
  const layout = document.getElementById('cartLayout');
  if (!layout) return;

  if (cart.length === 0) {
    layout.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything yet. Let's fix that!</p>
        <button class="btn btn-primary" onclick="navigateTo('shop')">Start Shopping</button>
      </div>
    `;
    return;
  }

  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  layout.innerHTML = `
    <div class="cart-items-section">
      <h3 style="font-family:var(--font-display);font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">Cart Items (${cart.reduce((s,i)=>s+i.qty,0)})</h3>
      <div id="cartItemsList"></div>
    </div>
    <div class="cart-summary">
      <h3>Order Summary</h3>
      <div class="summary-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:#22c55e">Free</span>' : formatPrice(shipping)}</span></div>
      ${shipping > 0 ? `<p style="font-size:0.8rem;color:var(--gray-500);margin-bottom:0.5rem">Add ${formatPrice(50 - subtotal)} more for free shipping!</p>` : ''}
      <div class="promo-input-wrap">
        <input type="text" class="promo-input" placeholder="Promo code" id="promoInput" />
        <button class="promo-btn" onclick="applyPromo()">Apply</button>
      </div>
      <div class="summary-row total"><span>Total</span><span>${formatPrice(total)}</span></div>
      <button class="checkout-btn" onclick="handleCheckout()">Checkout → ${formatPrice(total)}</button>
      <p style="font-size:0.75rem;color:var(--gray-500);text-align:center;margin-top:1rem">🔒 Secure checkout · Free returns</p>
    </div>
  `;

  const list = document.getElementById('cartItemsList');
  cart.forEach(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return;
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-img" style="background:${p.bg}">${p.emoji}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${p.name}</div>
        ${item.variant ? `<div class="cart-item-variant">Personalization: "${item.variant}"</div>` : ''}
        <div class="cart-item-price">${formatPrice(p.price * item.qty)}</div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQty(${p.id}, -1, ${item.variant ? `'${item.variant}'` : 'null'})">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${p.id}, 1, ${item.variant ? `'${item.variant}'` : 'null'})">+</button>
          </div>
          <button class="cart-remove-btn" onclick="removeFromCart(${p.id}, ${item.variant ? `'${item.variant}'` : 'null'})">Remove</button>
        </div>
      </div>
    `;
    list.appendChild(el);
  });
}

function applyPromo() {
  const code = document.getElementById('promoInput')?.value.trim().toUpperCase();
  if (code === 'THRIFT10') showToast('✓ 10% discount applied!');
  else if (code === 'LOVE') showToast('✓ Free shipping applied!');
  else showToast('Invalid promo code');
}

/* ===== HOME PAGE RENDERS ===== */
function renderFeaturedGrid() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = products.slice(0, 4);
  featured.forEach(p => grid.appendChild(buildProductCard(p)));
}

function renderCarousel() {
  const track = document.getElementById('carouselTrack');
  const dotsContainer = document.getElementById('carouselDots');
  if (!track) return;

  const newDrops = products.filter(p => p.isNew);
  newDrops.forEach(p => {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.appendChild(buildProductCard(p));
    track.appendChild(item);
  });

  // Dots
  const totalDots = Math.ceil(newDrops.length / carouselItemsPerView);
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('button');
    dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Slide ${i+1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  updateCarouselItemsPerView();
}

function updateCarouselItemsPerView() {
  const w = window.innerWidth;
  if (w < 480) carouselItemsPerView = 1;
  else if (w < 768) carouselItemsPerView = 2;
  else if (w < 1024) carouselItemsPerView = 3;
  else carouselItemsPerView = 4;

  document.querySelectorAll('.carousel-item').forEach(item => {
    item.style.flex = `0 0 calc(${100/carouselItemsPerView}% - ${(carouselItemsPerView-1)*1.5/carouselItemsPerView}rem)`;
  });
}

function goToSlide(index) {
  const track = document.getElementById('carouselTrack');
  const items = track.querySelectorAll('.carousel-item');
  const maxIndex = Math.max(0, items.length - carouselItemsPerView);
  carouselIndex = Math.max(0, Math.min(index, maxIndex));

  const itemWidth = items[0]?.offsetWidth + 24 || 0;
  track.style.transform = `translateX(-${carouselIndex * itemWidth}px)`;

  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === Math.floor(carouselIndex / carouselItemsPerView));
  });
}

document.getElementById('carouselNext')?.addEventListener('click', () => goToSlide(carouselIndex + 1));
document.getElementById('carouselPrev')?.addEventListener('click', () => goToSlide(carouselIndex - 1));
window.addEventListener('resize', () => { updateCarouselItemsPerView(); goToSlide(carouselIndex); });

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  galleryItems.forEach(item => {
    const el = document.createElement('div');
    el.className = 'gallery-item';
    el.innerHTML = `
      <div class="gallery-item-inner" style="background:${item.bg}">${item.emoji}</div>
      <div class="gallery-overlay"><span>View Post</span></div>
    `;
    grid.appendChild(el);
  });
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;
  testimonials.forEach(t => {
    const el = document.createElement('div');
    el.className = 'testimonial-card';
    el.innerHTML = `
      <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar" style="background:var(--pink-light)">${t.avatar}</div>
        <div>
          <div class="author-name">${t.author}</div>
          <div class="author-handle">${t.handle}</div>
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
}

/* ===== ABOUT PAGE ===== */
function initTimeline() {
  const container = document.getElementById('timeline');
  if (!container || container.children.length > 0) return;
  timelineData.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-title">${item.title}</div>
      <div class="timeline-desc">${item.desc}</div>
    `;
    container.appendChild(el);
    setTimeout(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
      }, { threshold: 0.2 });
      observer.observe(el);
    }, i * 100);
  });
}

function renderValues() {
  const grid = document.getElementById('valuesGrid');
  if (!grid) return;
  valuesData.forEach(v => {
    const el = document.createElement('div');
    el.className = 'value-card';
    el.innerHTML = `
      <span class="value-icon">${v.icon}</span>
      <div class="value-title">${v.title}</div>
      <div class="value-desc">${v.desc}</div>
    `;
    grid.appendChild(el);
  });
}

/* ===== CONTACT FORM ===== */
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.btn');
  const btnText = btn.querySelector('.btn-text');
  const btnSending = btn.querySelector('.btn-sending');
  btnText.style.display = 'none';
  btnSending.style.display = 'inline';
  btn.disabled = true;

  setTimeout(() => {
    btnText.style.display = 'inline';
    btnSending.style.display = 'none';
    btn.disabled = false;
    document.getElementById('formSuccess').classList.add('show');
    this.reset();
    setTimeout(() => document.getElementById('formSuccess').classList.remove('show'), 5000);
  }, 1800);
});

/* ===== NEWSLETTER ===== */
document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  showToast('✓ You\'re on the list! Welcome to the fam 🎉');
  this.reset();
});

/* ===== INIT ===== */
function init() {
  checkUser();
  renderFeaturedGrid();
  renderCarousel();
  renderGallery();
  renderTestimonials();
  renderValues();
  updateCartBadge();
  updateWishlistBadge();

  // Nav link clicks
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(el.dataset.page);
    });
  });

  // Touch swipe for carousel
  let touchStartX = 0;
  const carouselWrapper = document.querySelector('.carousel-track-wrapper');
  if (carouselWrapper) {
    carouselWrapper.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    carouselWrapper.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goToSlide(carouselIndex + (diff > 0 ? 1 : -1));
    });
  }

  setTimeout(initReveal, 300);
}

document.addEventListener('DOMContentLoaded', init);
