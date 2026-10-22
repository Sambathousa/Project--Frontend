import './style.css';

type Size = 'S' | 'M' | 'L';
type Dish = { fb?: string; name: string; khmer: string; category: string; prices: Record<Size, number>; description: string; image: string; tag?: string };
// Fixed price for each size: p(Small, Medium, Large)
const p = (S: number, M: number, L: number): Record<Size, number> => ({ S, M, L });
// Real photo first (public/images/<name>.jpg); falls back to the illustration (<name>.svg) if the photo is missing.
const img = (name: string) => `/images/${name}.jpg`;
const dishes: Dish[] = [
  { name:'Fish Amok', khmer:'អាម៉ុកត្រី', category:'signature', prices:p(6.5, 8.5, 11), description:'Silky coconut curry with kroeung paste, steamed gently in banana leaf — Cambodia’s national dish.', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhPW7P-2zIIC_4hM78uU_cf3d3dXvcOkeVmR-Z9wamQ&s=10', fb:'/images/fish-amok.svg', tag:'Chef’s favorite' },
  { name:'Samlor Korko', khmer:'សម្លកកូរ', category:'soups', prices:p(5.5, 7, 9), description:'Traditional Khmer stirring soup with roasted rice powder, prahok, pumpkin, green papaya and herbs.', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAAWRyfBRFzN3YQksXSqcE3TgmTmwxJJyye8YglXYWg&s=10', fb:'/images/samlor-korko.svg', tag:'Ancient recipe' },
  { name:'Samlor Kari', khmer:'សម្លការី', category:'soups', prices:p(6, 7.5, 9.5), description:'Fragrant Khmer curry soup with chicken, sweet potato, eggplant and coconut milk.', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxI4j4eQj57RBEKUhkmGmJjORw91tvxAM9V1P4RQ61mw&s=10', fb:'/images/samlor-kari.svg' },
  { name:'Beef Lok Lak', khmer:'ឡុកឡាក់សាច់គោ', category:'signature', prices:p(7, 9, 11.5), description:'Tender wok-seared beef, crisp lettuce, tomato, fried egg and Kampot pepper-lime dip.', image:'https://commons.wikimedia.org/wiki/Special:FilePath/2016_Phnom_Penh,_Kambod%C5%BCa%C5%84ski_Lok_Lak_(02).jpg?width=900', fb:'/images/lok-lak.svg' },
  { name:'Bai Sach Chrouk', khmer:'បាយសាច់ជ្រូកអាំង', category:'signature', prices:p(4, 5, 6.5), description:'Coconut-marinated grilled pork over broken rice with pickled vegetables and a bowl of broth.', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpE89grywu2zcHGGZPq99uT-PTj-0XFP2nJs_bltDTLA&s=10', fb:'/images/bai-sach-chrouk.svg' },
  { name:'Nom Banh Chok', khmer:'នំបញ្ចុក', category:'noodles', prices:p(4.5, 5.5, 7), description:'Fresh rice noodles with a fragrant green fish gravy, banana blossom and garden herbs.', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnAnm0-8myY6UafeY_f4ilHeL058jpUS6-eJRPxtrDA&s=10', fb:'/images/nom-banh-chok.svg' },
  { name:'Kuy Teav', khmer:'គុយទាវ', category:'noodles', prices:p(4, 5, 6.5), description:'Phnom Penh–style rice noodle soup in clear pork broth with shrimp, herbs and crispy garlic.', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFwsgxLqGaA8sI0ROO9i9vMtTDdGZjUK3q0VUax8uuA&s=10', fb:'/images/kuy-teav.svg' },
  { name:'Green Mango Salad', khmer:'ញាំស្វាយខ្ចី', category:'starters', prices:p(3.5, 4.5, 6), description:'Shredded green mango, herbs, roasted peanuts and a bright sweet-sour dressing.', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshPqkhHvgVnneT7B6h9Ii3UtQSTvjpQq0wWWczgoPXg&s=10', fb:'/images/green-mango-salad.svg' },
  { name:'Num Pang Pâté', khmer:'នំប៉័ងប៉ាតេ', category:'starters', prices:p(2.5, 3, 4), description:'Crisp Khmer baguette with pâté, pickled carrot, cucumber, cilantro and chili.', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwnwk1LaqAEUyFD1ah4dj3BrYesfVAV-H8X0T0bTnJQ&s=10', fb:'/images/num-pang.svg' },
  { name:'Sankhya Lapov', khmer:'សង់ខ្យាល្ពៅ', category:'dessert', prices:p(3, 3.5, 5), description:'Silky coconut custard steamed inside a whole kabocha pumpkin.', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7Q-jqAwCsEb6zoXxXt_j0ibMbkhp1kQWNLsbA4234g&s=10', fb:'/images/sankhya-lapov.svg' },
  { name:'Mango Sticky Rice', khmer:'បាយដំណើបស្វាយ', category:'dessert', prices:p(3, 3.5, 5), description:'Warm coconut sticky rice with sweet ripe mango and toasted sesame.', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5b9DVCnPXNeAncFes6r9G44C3BJdm33IN3AnFqmCWvQ&s=10', fb:'/images/mango-sticky-rice.svg' },
  { name:'Pandan Coconut Cake', khmer:'នំដូងស្លឹកតយ', category:'dessert', prices:p(3, 3.5, 5), description:'Soft pandan cake finished with coconut cream and toasted sesame.', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ybDlLf2abWMJip03gLd8l2jbLSlmENz9TpMJx0A54g&s=10', fb:'/images/pandan-cake.svg' }
];

const path = window.location.pathname.split('/').pop() || 'index.html';
const active = path.replace('.html', '');
const navItems = [
  ['Home','index.html','home'], ['Menu','menu.html','menu'], ['Our Story','about.html','about'],
  ['Gallery','gallery.html','gallery'], ['Contact','contact.html','contact'], ['Orders','orders.html','orders']
];
const header = document.querySelector<HTMLElement>('#site-header');
if (header) {
  header.innerHTML = `
    <div class="nav-surface fixed inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-[#fbf7efee] backdrop-blur-xl">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="index.html" class="flex items-center gap-3" aria-label="Sovann Khmer Kitchen home">
          <span class="grid h-11 w-11 place-items-center rounded-full bg-[#254d3b] text-[#f4d48c]"><svg viewBox="0 0 48 48" class="h-7 w-7" fill="currentColor" aria-hidden="true"><path d="M24 4c3 5 4 9 3 13h-6c-1-4 0-8 3-13Zm-9 10c2 3 3 6 2 9h-5c-1-3 0-6 3-9Zm18 0c3 3 4 6 3 9h-5c-1-3 0-6 2-9ZM9 25h30v4H9zM6 31h36v4H6zM4 37h40v5H4z"/></svg></span>
          <span><span class="block font-display text-lg font-bold leading-tight">Sovann</span><span class="text-[10px] font-semibold uppercase tracking-[.23em] text-stone-500">Khmer Kitchen</span></span>
        </a>
        <div id="nav-links" class="hidden items-center gap-7 md:flex">
          ${navItems.map(([label,href,key])=>`<a class="text-sm font-semibold transition hover:text-amber-700 ${active===key?'text-amber-700':'text-stone-600'}" ${active===key?'aria-current="page"':''} href="${href}">${label}</a>`).join('')}
        </div>
        <div class="flex items-center gap-2">
          <button id="theme-toggle" class="rounded-full border border-stone-300 px-3 py-2 text-sm" aria-label="Toggle dark mode" title="Toggle dark mode">☾</button>
          <a href="contact.html#reservation" class="hidden rounded-full bg-[#254d3b] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#183728] sm:inline-flex">Book a table ↗</a>
          <button id="menu-toggle" class="rounded-full border border-stone-300 px-3 py-2 md:hidden" aria-label="Open navigation menu" aria-expanded="false">☰</button>
        </div>
      </nav>
      <div id="mobile-nav" class="hidden border-t border-stone-200 px-5 pb-4 md:hidden">
        ${navItems.map(([label,href])=>`<a class="block py-3 text-sm font-semibold" href="${href}">${label}</a>`).join('')}
      </div>
    </div>`;
}

const footer = document.querySelector<HTMLElement>('#site-footer');
if (footer) footer.innerHTML = `
  <footer class="bg-[#183728] text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
      <div><div class="font-display text-2xl font-bold">Sovann Khmer Kitchen</div><p class="mt-3 max-w-sm text-sm leading-6 text-white/70">A little taste of Cambodia, made with heart, local ingredients and recipes passed down through generations.</p></div>
      <div><h2 class="font-bold">Visit us</h2><p class="mt-3 text-sm leading-6 text-white/70">Street 240, Phnom Penh, Cambodia<br>Daily · 10:00 AM – 10:00 PM<br>+855 12 345 678</p></div>
      <div><h2 class="font-bold">Explore</h2><div class="mt-3 flex flex-wrap gap-4 text-sm text-white/70"><a href="menu.html">Menu</a><a href="about.html">Our story</a><a href="gallery.html">Gallery</a><a href="contact.html">Contact</a></div><p class="mt-5 text-sm text-white/70">Follow the flavors · @sovannkhmerkitchen</p></div>
    </div>
    <div class="border-t border-white/15 px-5 py-5 text-center text-xs text-white/55">© ${new Date().getFullYear()} Sovann Khmer Kitchen. Made with love in Cambodia.<br>Photos via Wikimedia Commons (CC BY-SA): Angkor Wat by Satdeep Gill and B. C. Tørrissen; Lok Lak by Marcin Konsek.</div>
  </footer>`;

const money = (n: number) => `$${n.toFixed(2)}`;
const sizeLabel: Record<Size, string> = { S: 'Small', M: 'Medium', L: 'Large' };
const sizeKeys: Size[] = ['S', 'M', 'L'];
const activeSize = ['bg-[#254d3b]', 'text-white', 'border-[#254d3b]'];
const categoryLabel: Record<string, string> = { signature: 'Signature', soups: 'Samlor · Soups', noodles: 'Noodles', starters: 'Starters', dessert: 'Dessert' };
const dishCard = (dish: Dish) => `
  <article data-dish="${dish.name}" class="surface flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <button type="button" data-open aria-label="Choose a size and see details for ${dish.name}" class="group relative block w-full cursor-pointer overflow-hidden text-left">
      <img src="${dish.image}" alt="${dish.name} (${dish.khmer}) — Khmer dish" class="h-56 w-full object-cover transition duration-500 group-hover:scale-105 group-focus-visible:scale-105" loading="lazy" onerror="this.onerror=null;this.src='${dish.fb ?? dish.image.replace('.jpg','.svg')}'">
      ${dish.tag ? `<span class="absolute left-4 top-4 rounded-full bg-[#f4d48c] px-3 py-1 text-xs font-bold text-[#183728]">${dish.tag}</span>` : ''}
      <span class="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/75 via-black/20 to-transparent pb-5 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"><span class="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#183728] shadow-lg">Select size · S M L</span></span>
    </button>
    <div class="flex flex-1 flex-col p-5">
      <span class="w-fit rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800">${categoryLabel[dish.category] ?? dish.category}</span>
      <h3 class="font-display mt-3 text-xl font-bold">${dish.name}</h3><p class="mt-1 text-sm text-stone-500 text-muted">${dish.khmer}</p>
      <p class="mt-3 line-clamp-2 flex-1 text-sm leading-6 text-stone-600 text-muted">${dish.description}</p>
      <div class="mt-4 flex items-center justify-between"><span class="text-lg font-bold text-amber-700">From ${money(dish.prices.S)}</span><span class="text-xs font-semibold text-stone-500 text-muted">Sizes S · M · L</span></div>
      <button type="button" data-open class="mt-4 w-full rounded-full bg-[#254d3b] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#183728]">Choose size &amp; order</button>
    </div>
  </article>`;
const grid = document.querySelector<HTMLElement>('#dish-grid');
const isHome = active === 'index' || active === 'home';
if (grid) grid.innerHTML = (isHome ? dishes.slice(0, 6) : dishes).map(dishCard).join('');

const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter || 'all';
  filterButtons.forEach(b => { b.classList.toggle('bg-[#254d3b]', b===button); b.classList.toggle('text-white', b===button); b.setAttribute('aria-pressed', String(b===button)); });
  if (grid) grid.innerHTML = dishes.filter(d => filter==='all' || d.category===filter).map(dishCard).join('');
}));

const themeToggle = document.querySelector<HTMLButtonElement>('#theme-toggle');
const applyTheme = (dark: boolean) => { document.documentElement.classList.toggle('dark', dark); if(themeToggle) themeToggle.textContent = dark ? '☀' : '☾'; };
const savedTheme = localStorage.getItem('sovann-theme');
applyTheme(savedTheme === 'dark');
themeToggle?.addEventListener('click', () => {
  const dark = !document.documentElement.classList.contains('dark');
  applyTheme(dark); localStorage.setItem('sovann-theme', dark ? 'dark' : 'light');
});
const menuToggle = document.querySelector<HTMLButtonElement>('#menu-toggle');
menuToggle?.addEventListener('click', () => {
  const mobileNav = document.querySelector<HTMLElement>('#mobile-nav');
  const isOpen = mobileNav?.classList.toggle('hidden') === false;
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

const form = document.querySelector<HTMLFormElement>('#reservation-form');
const year = document.querySelector<HTMLElement>('#year');
if (year) year.textContent = String(new Date().getFullYear());


/* ===================== ORDERING: sizes, cart, saved orders ===================== */
type CartItem = { name: string; khmer: string; size: Size; price: number; qty: number };
type OrderStatus = 'New' | 'Preparing' | 'Done';
type Order = { id: string; createdAt: string; customer: string; phone: string; type: string; note: string; items: CartItem[]; total: number; status: OrderStatus };

const CART_KEY = 'sovann-cart', ORDERS_KEY = 'sovann-orders', SEQ_KEY = 'sovann-order-seq';
const store = {
  read<T>(key: string, fallback: T): T { try { const raw = localStorage.getItem(key); return raw ? (JSON.parse(raw) as T) : fallback; } catch { return fallback; } },
  write(key: string, value: unknown) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ } }
};
const esc = (text: string) => text.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
const getCart = () => store.read<CartItem[]>(CART_KEY, []);
const sameLine = (a: CartItem, name: string, size: Size) => a.name === name && a.size === size;

document.body.insertAdjacentHTML('beforeend', `
  <button id="cart-open" type="button" class="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#254d3b] px-5 py-3.5 font-bold text-white shadow-2xl transition hover:bg-[#183728]" aria-label="Open your order">🛒 <span>Your order</span><span id="cart-count" class="grid h-6 min-w-6 place-items-center rounded-full bg-[#f4d48c] px-1.5 text-xs text-[#183728]">0</span></button>
  <div id="cart-overlay" class="fixed inset-0 z-50 hidden bg-black/50"></div>
  <aside id="cart-panel" role="dialog" aria-modal="true" aria-label="Your order" class="surface fixed inset-y-0 right-0 z-50 hidden w-full max-w-md flex-col bg-[#fbf7ef] shadow-2xl">
    <div class="flex items-center justify-between border-b border-stone-200 px-5 py-4"><h2 class="font-display text-2xl font-bold">Your order</h2><button id="cart-close" type="button" class="rounded-full border border-stone-300 px-3 py-2" aria-label="Close your order">✕</button></div>
    <div id="cart-items" class="flex-1 overflow-y-auto px-5 py-4"></div>
    <form id="order-form" class="space-y-3 border-t border-stone-200 p-5">
      <div class="flex items-center justify-between text-lg font-bold"><span>Total</span><span id="cart-total" class="text-amber-700">$0.00</span></div>
      <input name="customer" required minlength="2" placeholder="Your name" autocomplete="name" class="field w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm">
      <input name="phone" type="tel" required minlength="6" placeholder="Phone number" autocomplete="tel" class="field w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm">
      <select name="type" class="field w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm"><option>Dine in</option><option>Pick up</option><option>Delivery</option></select>
      <textarea name="note" rows="2" placeholder="Note (e.g. less spicy, address for delivery)" class="field w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm"></textarea>
      <button type="submit" class="w-full rounded-full bg-[#254d3b] px-6 py-3.5 font-bold text-white hover:bg-[#183728]">Place order</button>
      <p id="order-message" role="status" class="text-sm font-semibold text-[#254d3b]"></p>
    </form>
  </aside>
  <div id="toast" role="status" class="pointer-events-none fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#183728] px-5 py-3 text-sm font-semibold text-white opacity-0 shadow-xl transition-opacity"></div>`);

const cartPanel = document.querySelector<HTMLElement>('#cart-panel')!;
const cartOverlay = document.querySelector<HTMLElement>('#cart-overlay')!;
const cartItemsEl = document.querySelector<HTMLElement>('#cart-items')!;
const cartCountEl = document.querySelector<HTMLElement>('#cart-count')!;
const cartTotalEl = document.querySelector<HTMLElement>('#cart-total')!;
const orderForm = document.querySelector<HTMLFormElement>('#order-form')!;
const orderMessage = document.querySelector<HTMLElement>('#order-message')!;
const toast = document.querySelector<HTMLElement>('#toast')!;

let toastTimer = 0;
const showToast = (text: string) => { toast.textContent = text; toast.classList.add('opacity-100'); window.clearTimeout(toastTimer); toastTimer = window.setTimeout(() => toast.classList.remove('opacity-100'), 2000); };
const openCart = () => { cartPanel.classList.remove('hidden'); cartPanel.classList.add('flex'); cartOverlay.classList.remove('hidden'); };
const closeCart = () => { cartPanel.classList.add('hidden'); cartPanel.classList.remove('flex'); cartOverlay.classList.add('hidden'); };

function renderCart() {
  const cart = getCart();
  cartCountEl.textContent = String(cart.reduce((n, i) => n + i.qty, 0));
  cartTotalEl.textContent = money(cart.reduce((n, i) => n + i.qty * i.price, 0));
  cartItemsEl.innerHTML = cart.length ? cart.map(i => `
    <div class="flex items-start justify-between gap-3 border-b border-stone-200 py-3">
      <div><p class="font-bold">${esc(i.name)} <span class="rounded-full bg-[#f4d48c] px-2 py-0.5 text-xs text-[#183728]">${i.size}</span></p><p class="text-xs text-stone-500 text-muted">${esc(i.khmer)} · ${money(i.price)} each</p></div>
      <div class="text-right"><p class="font-bold text-amber-700">${money(i.price * i.qty)}</p>
        <div class="mt-1 flex items-center justify-end gap-2" data-line="${esc(i.name)}|${i.size}"><button type="button" data-cart="dec" class="h-8 w-8 rounded-full border border-stone-300" aria-label="Less">−</button><span class="w-5 text-center text-sm font-bold">${i.qty}</span><button type="button" data-cart="inc" class="h-8 w-8 rounded-full border border-stone-300" aria-label="More">+</button><button type="button" data-cart="remove" class="ml-1 text-xs text-red-700 underline">Remove</button></div></div>
    </div>`).join('') : '<p class="text-muted py-12 text-center text-stone-500">Your order is empty.<br>Choose a size and press <strong>Order</strong> on any dish.</p>';
}

function addToCart(dish: Dish, size: Size) {
  const cart = getCart();
  const line = cart.find(i => sameLine(i, dish.name, size));
  if (line) line.qty = Math.min(line.qty + 1, 20); else cart.push({ name: dish.name, khmer: dish.khmer, size, price: dish.prices[size], qty: 1 });
  store.write(CART_KEY, cart); renderCart(); showToast(`Added ${dish.name} (${size}) · ${money(dish.prices[size])}`);
}

/* ---------- Popup: click/hover a dish photo to pick size S / M / L ---------- */
document.body.insertAdjacentHTML('beforeend', `<div id="dish-modal" class="fixed inset-0 z-[60] hidden items-center justify-center bg-black/55 p-4 backdrop-blur-sm"><div id="dish-modal-card" role="dialog" aria-modal="true" aria-label="Dish details" class="surface relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"></div></div>`);
const dishModal = document.querySelector<HTMLElement>('#dish-modal')!;
const dishModalCard = document.querySelector<HTMLElement>('#dish-modal-card')!;
let quickDish: Dish | null = null;
let quickSize: Size = 'M';

function renderQuick(keepFocus: boolean) {
  if (!quickDish) return;
  const d = quickDish;
  dishModalCard.innerHTML = `
    <button type="button" data-qclose class="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-lg text-stone-500 hover:bg-stone-100" aria-label="Close">✕</button>
    <div class="flex flex-col gap-6 sm:flex-row sm:items-center">
      <img src="${d.image}" alt="${d.name}" class="h-48 w-full rounded-2xl object-cover sm:h-60 sm:w-56 sm:shrink-0" onerror="this.onerror=null;this.src='${d.fb ?? d.image.replace('.jpg','.svg')}'">
      <div class="flex-1">
        <span class="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800">${categoryLabel[d.category] ?? d.category}</span>
        <h3 class="font-display mt-3 text-3xl font-bold">${d.name}</h3><p class="text-sm text-stone-500 text-muted">${d.khmer}</p>
        <p class="mt-3 text-sm leading-6 text-stone-600 text-muted">${d.description}</p>
        <hr class="my-4 border-stone-200">
        <p class="text-xl font-bold text-amber-700">Price: ${money(d.prices[quickSize])} <span class="text-sm font-semibold text-stone-500">· ${sizeLabel[quickSize]}</span></p>
        <p class="mt-4 text-xs font-bold uppercase tracking-wider text-stone-500">Select size</p>
        <div class="mt-2 flex gap-2" role="group" aria-label="Select size">${sizeKeys.map(sz => `<button type="button" data-qsize="${sz}" aria-pressed="${sz === quickSize}" title="${sizeLabel[sz]} · ${money(d.prices[sz])}" class="h-11 w-11 rounded-full border text-sm font-bold transition ${sz === quickSize ? activeSize.join(' ') : 'border-stone-300'}">${sz}</button>`).join('')}</div>
        <button type="button" data-qadd class="mt-5 w-full rounded-full bg-[#254d3b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#183728]">Add selected to cart</button>
      </div>
    </div>`;
  if (keepFocus) dishModalCard.querySelector<HTMLElement>(`[data-qsize="${quickSize}"]`)?.focus();
}
const openQuick = (dish: Dish) => {
  quickDish = dish; quickSize = 'M'; renderQuick(false);
  dishModal.classList.remove('hidden'); dishModal.classList.add('flex'); document.body.classList.add('overflow-hidden');
  dishModalCard.querySelector<HTMLElement>('[data-qclose]')?.focus();
};
const closeQuick = () => { dishModal.classList.add('hidden'); dishModal.classList.remove('flex'); document.body.classList.remove('overflow-hidden'); quickDish = null; };

document.addEventListener('click', event => {
  const target = event.target as HTMLElement;
  const openBtn = target.closest<HTMLElement>('[data-open]');
  if (openBtn) {
    const dish = dishes.find(d => d.name === openBtn.closest<HTMLElement>('[data-dish]')?.dataset.dish);
    if (dish) openQuick(dish);
    return;
  }
  if (target.closest('[data-qclose]') || target === dishModal) { closeQuick(); return; }
  const qsize = target.closest<HTMLElement>('[data-qsize]');
  if (qsize && quickDish) { quickSize = qsize.dataset.qsize as Size; renderQuick(true); return; }
  if (target.closest('[data-qadd]') && quickDish) { addToCart(quickDish, quickSize); closeQuick(); return; }
  if (target.closest('#cart-open')) { openCart(); return; }
  if (target.closest('#cart-close') || target === cartOverlay) { closeCart(); return; }
  const action = target.closest<HTMLButtonElement>('[data-cart]');
  if (action) {
    const [name, size] = (action.closest<HTMLElement>('[data-line]')?.dataset.line ?? '|').split('|');
    let cart = getCart();
    const line = cart.find(i => sameLine(i, name, size as Size));
    if (line) {
      if (action.dataset.cart === 'inc') line.qty = Math.min(line.qty + 1, 20);
      else if (action.dataset.cart === 'dec') line.qty -= 1;
      else line.qty = 0;
      cart = cart.filter(i => i.qty > 0);
      store.write(CART_KEY, cart); renderCart();
    }
  }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeCart(); closeQuick(); } });

orderForm.addEventListener('submit', event => {
  event.preventDefault();
  const cart = getCart();
  if (!cart.length) { orderMessage.textContent = 'Your order is empty. Please add a dish first.'; return; }
  if (!orderForm.reportValidity()) return;
  const data = new FormData(orderForm);
  const seq = store.read<number>(SEQ_KEY, 0) + 1;
  const order: Order = {
    id: `SK-${String(seq).padStart(4, '0')}`, createdAt: new Date().toISOString(),
    customer: String(data.get('customer') ?? '').trim(), phone: String(data.get('phone') ?? '').trim(),
    type: String(data.get('type') ?? 'Dine in'), note: String(data.get('note') ?? '').trim(),
    items: cart, total: cart.reduce((n, i) => n + i.qty * i.price, 0), status: 'New'
  };
  store.write(SEQ_KEY, seq);
  store.write(ORDERS_KEY, [...store.read<Order[]>(ORDERS_KEY, []), order]);
  store.write(CART_KEY, []);
  orderForm.reset(); renderCart();
  orderMessage.textContent = `Thank you! Order ${order.id} is saved. Total ${money(order.total)}.`;
});
renderCart();

/* ---------- Orders page (orders.html): view the saved data ---------- */
const ordersRoot = document.querySelector<HTMLElement>('#orders-root');
function renderOrders() {
  if (!ordersRoot) return;
  const orders = store.read<Order[]>(ORDERS_KEY, []).slice().reverse();
  if (!orders.length) { ordersRoot.innerHTML = '<p class="text-muted py-16 text-center text-stone-500">No orders yet. Go to the <a class="font-bold text-amber-700 underline" href="menu.html">menu</a> and place your first order.</p>'; return; }
  const revenue = orders.reduce((n, o) => n + o.total, 0);
  ordersRoot.innerHTML = `
    <div class="mb-6 flex flex-wrap items-center justify-between gap-3"><p class="font-bold">${orders.length} order${orders.length > 1 ? 's' : ''} · ${money(revenue)} total</p><button type="button" data-clear class="rounded-full border border-red-700 px-4 py-2 text-sm font-bold text-red-700">Clear all orders</button></div>
    <div class="grid gap-5 md:grid-cols-2">${orders.map(o => `
      <article class="surface rounded-3xl bg-white p-5 shadow-sm">
        <div class="flex items-start justify-between gap-3"><div><h3 class="font-display text-xl font-bold">${esc(o.id)}</h3><p class="text-xs text-stone-500 text-muted">${esc(new Date(o.createdAt).toLocaleString())}</p></div>
          <select data-status="${esc(o.id)}" aria-label="Order status" class="field rounded-full border border-stone-300 bg-white px-3 py-2 text-sm font-bold">${(['New', 'Preparing', 'Done'] as OrderStatus[]).map(st => `<option ${st === o.status ? 'selected' : ''}>${st}</option>`).join('')}</select></div>
        <p class="mt-3 text-sm"><strong>${esc(o.customer)}</strong> · ${esc(o.phone)} · ${esc(o.type)}</p>
        ${o.note ? `<p class="text-muted mt-1 text-sm text-stone-600">Note: ${esc(o.note)}</p>` : ''}
        <ul class="mt-3 space-y-1 text-sm">${o.items.map(i => `<li class="flex justify-between gap-3"><span>${i.qty} × ${esc(i.name)} (${i.size})</span><span>${money(i.qty * i.price)}</span></li>`).join('')}</ul>
        <div class="mt-3 flex items-center justify-between border-t border-stone-200 pt-3"><span class="font-bold text-amber-700">Total ${money(o.total)}</span><button type="button" data-delete="${esc(o.id)}" class="text-xs font-semibold text-red-700 underline">Delete</button></div>
      </article>`).join('')}</div>`;
}
ordersRoot?.addEventListener('change', e => {
  const sel = (e.target as HTMLElement).closest<HTMLSelectElement>('[data-status]');
  if (!sel) return;
  store.write(ORDERS_KEY, store.read<Order[]>(ORDERS_KEY, []).map(o => o.id === sel.dataset.status ? { ...o, status: sel.value as OrderStatus } : o));
});
ordersRoot?.addEventListener('click', e => {
  const t = e.target as HTMLElement;
  const del = t.closest<HTMLElement>('[data-delete]');
  if (del) { store.write(ORDERS_KEY, store.read<Order[]>(ORDERS_KEY, []).filter(o => o.id !== del.dataset.delete)); renderOrders(); }
  if (t.closest('[data-clear]') && window.confirm('Delete all saved orders?')) { store.write(ORDERS_KEY, []); renderOrders(); }
});
renderOrders();


/* ---------- Reservation form: clear success popup + saved reservations ---------- */
type ReservationStatus = 'New' | 'Confirmed' | 'Cancelled';
type Reservation = { id: string; createdAt: string; name: string; email: string; date: string; guests: string; message: string; status: ReservationStatus };
const RES_KEY = 'sovann-reservations', RES_SEQ_KEY = 'sovann-reservation-seq';
const prettyDate = (iso: string) => new Date(`${iso}T00:00`).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

if (form) {
  document.body.insertAdjacentHTML('beforeend', `<div id="notice-modal" class="fixed inset-0 z-[70] hidden items-center justify-center bg-black/55 p-4 backdrop-blur-sm"><div role="alertdialog" aria-modal="true" aria-labelledby="notice-title" class="surface w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl"><div class="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-3xl text-emerald-700">✓</div><h3 id="notice-title" class="font-display mt-5 text-2xl font-bold">Reservation received!</h3><p id="notice-text" class="text-muted mt-3 text-sm leading-6 text-stone-600"></p><button type="button" data-notice-ok class="mt-6 w-full rounded-full bg-[#254d3b] px-6 py-3 font-bold text-white hover:bg-[#183728]">OK</button></div></div>`);
  const noticeModal = document.querySelector<HTMLElement>('#notice-modal')!;
  const noticeText = document.querySelector<HTMLElement>('#notice-text')!;
  const closeNotice = () => { noticeModal.classList.add('hidden'); noticeModal.classList.remove('flex'); };
  noticeModal.addEventListener('click', e => { if (e.target === noticeModal || (e.target as HTMLElement).closest('[data-notice-ok]')) closeNotice(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNotice(); });

  const dateInput = form.querySelector<HTMLInputElement>('input[type="date"]');
  if (dateInput) dateInput.min = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const seq = store.read<number>(RES_SEQ_KEY, 0) + 1;
    const r: Reservation = {
      id: `RS-${String(seq).padStart(4, '0')}`, createdAt: new Date().toISOString(),
      name: String(data.get('name') ?? '').trim(), email: String(data.get('email') ?? '').trim(),
      date: String(data.get('date') ?? ''), guests: String(data.get('guests') ?? ''),
      message: String(data.get('message') ?? '').trim(), status: 'New'
    };
    store.write(RES_SEQ_KEY, seq);
    store.write(RES_KEY, [...store.read<Reservation[]>(RES_KEY, []), r]);
    form.reset();
    const output = document.querySelector<HTMLElement>('#form-message');
    if (output) output.textContent = `✓ Reservation ${r.id} sent. We will confirm by email.`;
    noticeText.innerHTML = `Thank you, <strong>${esc(r.name)}</strong>!<br>Your table request <strong>${esc(r.id)}</strong> for <strong>${esc(prettyDate(r.date))}</strong> (${esc(r.guests)}) was saved.<br>We will confirm by email at ${esc(r.email)}.`;
    noticeModal.classList.remove('hidden'); noticeModal.classList.add('flex');
  });
}

/* ---------- Orders page: show saved reservations ---------- */
const reservationsRoot = document.querySelector<HTMLElement>('#reservations-root');
function renderReservations() {
  if (!reservationsRoot) return;
  const list = store.read<Reservation[]>(RES_KEY, []).slice().reverse();
  if (!list.length) { reservationsRoot.innerHTML = '<p class="text-muted py-10 text-center text-stone-500">No reservations yet. Book a table on the <a class="font-bold text-amber-700 underline" href="contact.html#reservation">Contact page</a>.</p>'; return; }
  reservationsRoot.innerHTML = `<div class="grid gap-5 md:grid-cols-2">${list.map(r => `
    <article class="surface rounded-3xl bg-white p-5 shadow-sm">
      <div class="flex items-start justify-between gap-3"><div><h3 class="font-display text-xl font-bold">${esc(r.id)}</h3><p class="text-xs text-stone-500 text-muted">Sent ${esc(new Date(r.createdAt).toLocaleString())}</p></div>
        <select data-res-status="${esc(r.id)}" aria-label="Reservation status" class="field rounded-full border border-stone-300 bg-white px-3 py-2 text-sm font-bold">${(['New', 'Confirmed', 'Cancelled'] as ReservationStatus[]).map(st => `<option ${st === r.status ? 'selected' : ''}>${st}</option>`).join('')}</select></div>
      <p class="mt-3 text-sm"><strong>${esc(r.name)}</strong> · ${esc(r.email)}</p>
      <p class="mt-1 text-sm">📅 ${esc(prettyDate(r.date))} · ${esc(r.guests)}</p>
      ${r.message ? `<p class="text-muted mt-1 text-sm text-stone-600">Message: ${esc(r.message)}</p>` : ''}
      <div class="mt-3 text-right"><button type="button" data-res-delete="${esc(r.id)}" class="text-xs font-semibold text-red-700 underline">Delete</button></div>
    </article>`).join('')}</div>`;
}
reservationsRoot?.addEventListener('change', e => {
  const sel = (e.target as HTMLElement).closest<HTMLSelectElement>('[data-res-status]');
  if (!sel) return;
  store.write(RES_KEY, store.read<Reservation[]>(RES_KEY, []).map(r => r.id === sel.dataset.resStatus ? { ...r, status: sel.value as ReservationStatus } : r));
});
reservationsRoot?.addEventListener('click', e => {
  const del = (e.target as HTMLElement).closest<HTMLElement>('[data-res-delete]');
  if (del) { store.write(RES_KEY, store.read<Reservation[]>(RES_KEY, []).filter(r => r.id !== del.dataset.resDelete)); renderReservations(); }
});
renderReservations();