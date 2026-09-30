/* ====== Data menu - ubah harga di sini ====== */
const WA = '6281385852544';
const IG = 'https://www.instagram.com/kaybuncimahi/';

const MENU = [
	['Siomay Ayam', 'kukus', 'Siomay isi daging ayam, dikukus hangat.', 23800, 'siomay-ayam'],
	['Siomay Udang', 'kukus', 'Siomay isi udang dengan hiasan kacang polong.', 26200, 'siomay-udang'],
	['Siomay Cumi', 'kukus', 'Siomay isi cumi dengan topping jamur hitam.', 26200, 'siomay-cumi'],
	['Siomay Kepiting', 'kukus', 'Siomay dengan topping stik kepiting.', 26200, 'siomay-kepiting'],
	['Kulit Tahu Ayam Kukus', 'kukus', 'Isian daging ayam dibalut kulit tahu, dikukus.', 26200, 'kulit-tahu-ayam-kukus'],
	['Kulit Tahu Udang Kukus', 'kukus', 'Isian udang dibalut kulit tahu, dikukus.', 26200, 'kulit-tahu-udang-kukus'],
	['Nori Kukus', 'kukus', 'Isi daging ayam dibalut kulit rumput laut.', 26200, 'nori-kukus'],
	['Hisitkau', 'kukus', 'Dimsum kulit kuning yang lembut dan gurih.', 26200, 'hisitkau'],
	['Hakau', 'kukus', 'Dimsum kulit bening dengan isian yang juicy.', 27400, 'hakau'],
	['Kulit Tahu Ayam Goreng', 'goreng', 'Isian daging ayam dibalut kulit tahu, digoreng renyah.', 27400, 'kulit-tahu-ayam-goreng'],
	['Kulit Tahu Udang Goreng', 'goreng', 'Isian daging ayam dan udang dibalut kulit tahu.', 28600, 'kulit-tahu-udang-goreng'],
	['Kumis Naga', 'goreng', 'Isi daging ayam dan cumi dibalut kulit lumpia kering.', 27400, 'kumis-naga'],
	['Wonton', 'goreng', 'Isi daging ayam, udang dan sayur.', 28600, 'wonton'],
	['Nori Goreng', 'goreng', 'Isian daging ayam dibalut kulit rumput laut.', 27400, 'nori-goreng'],
	['Ekado', 'goreng', 'Isian daging ayam dan telur puyuh dibungkus kulit tahu.', 28600, 'ekado'],
	['Mentai Original', 'mentai', 'Dimsum dengan saus mentai yang dibakar.', 32000, 'mentai-original'],
	['Mentai Nori', 'mentai', 'Saus mentai dengan taburan nori.', 33000, 'mentai-nori'],
	['Mentai Keju', 'mentai', 'Saus mentai dengan keju leleh.', 34000, 'mentai-keju']
].map(([name, category, description, price, image]) => ({
	n: name,
	k: category,
	d: description,
	p: price,
	img: `images/menu/${image}.jpg`
}));

const rp = value => 'Rp' + value.toLocaleString('id-ID');
const wa = text => `https://web.whatsapp.com/send?phone=${WA}&text=${encodeURIComponent(text)}`;

const ICON = {
	ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
	wa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 21l1.6-4.6A9 9 0 1 1 8 19.6z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-1-1.4-2.4-2.4l.8-1-1-2z" fill="currentColor"/></svg>'
};
/* ====== Header dan footer dipakai semua halaman ====== */
const page = document.body.dataset.page;
const PAGES = [
	['index', 'Beranda'],
	['tentang', 'Tentang'],
	['menu', 'Menu'],
	['alamat', 'Alamat'],
	['kontak', 'Kontak']
];

document.body.insertAdjacentHTML(
	'afterbegin',
	`<header class="hd">
		<div class="wrap">
			<a class="brand" href="index.html">
				<img src="images/logo.png" alt="Logo Kaybun Dimsum">Kaybun
			</a>
			<div class="hd-end">
				<nav class="nav" id="site-nav">${PAGES.map(([file, label]) => `<a href="${file}.html" class="${file == page ? 'on' : ''}">${label}</a>`).join('')}</nav>
				${page == 'menu' ? '<button class="cart-toggle" type="button" aria-label="Keranjang, 0 item">Keranjang <span id="cart-count">0</span></button>' : ''}
				<button class="burger" type="button" aria-label="Buka menu navigasi" aria-expanded="false" aria-controls="site-nav">☰</button>
			</div>
		</div>
	</header>`
);

document.body.insertAdjacentHTML(
	'beforeend',
	`<footer class="ft">
		<div class="wrap">
			<p>© ${new Date().getFullYear()} Kaybun Dimsum Cimahi · Halal Certified · Jl. Encep Kartawiria No.61, Cimahi</p>
		</div>
	</footer>
	<a class="fab" target="_blank" rel="noopener" href="${wa('Halo Kaybun Dimsum, saya mau tanya menu.')}">Chat WhatsApp</a>`
);

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.onclick = () => {
	const isOpen = nav.classList.toggle('open');
	burger.setAttribute('aria-expanded', isOpen);
	burger.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
};

nav.querySelectorAll('a').forEach(link => {
	link.onclick = () => {
		nav.classList.remove('open');
		burger.setAttribute('aria-expanded', 'false');
		burger.setAttribute('aria-label', 'Buka menu navigasi');
	};
});

const io = new IntersectionObserver(
	entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('in')),
	{ threshold: 0.15 }
);

document.querySelectorAll('.rv').forEach(element => io.observe(element));
/* ====== Beranda: piring interaktif ====== */
const stage = document.getElementById('stage');

if (stage) {
	const pick = ['mentai-original', 'mentai-keju', 'mentai-nori', 'wonton', 'ekado', 'hakau']
		.map(image => MENU.find(menu => menu.img.includes(image)));
	let current = 0;
	const image = stage.querySelector('.shot');
	const caption = stage.querySelector('.cap');

	const show = () => {
		image.style.opacity = 0;
		setTimeout(() => {
			image.src = pick[current].img;
			caption.textContent = pick[current].n;
			image.style.opacity = 1;
		}, 250);
	};

	stage.onclick = () => {
		current = (current + 1) % pick.length;
		show();
	};

	setInterval(() => stage.click(), 5000);
	document.getElementById('fav').innerHTML = ['mentai-original', 'kumis-naga', 'hakau']
		.map(imageName => MENU.find(menu => menu.img.includes(imageName)))
		.map(menu => `<a class="card" href="menu.html"><img src="${menu.img}" alt="${menu.n}" loading="lazy"><div><b>${menu.n}</b><span class="price">${rp(menu.p)}</span></div></a>`)
		.join('');
}
/* ====== Halaman menu: filter, cari, modal, pesan WA ====== */
const grid = document.getElementById('grid');

if (grid) {
	let category = 'semua';
	let query = '';
	let currentMenu = null;
	let quantity = 1;
	const modal = document.getElementById('modal');

	const draw = () => {
		const visibleMenu = MENU.filter(menu => query
			? menu.n.toLowerCase().includes(query)
			: category == 'semua' || menu.k == category
		);

		grid.innerHTML = visibleMenu.length
			? visibleMenu.map(menu => `<button class="card" data-i="${MENU.indexOf(menu)}">
					<img src="${menu.img}" alt="${menu.n}" loading="lazy">
					<div>${menu.k == 'mentai' ? '<span class="tag">Mentai</span>' : ''}<b>${menu.n}</b><span class="price">${rp(menu.p)}</span></div>
				</button>`).join('')
			: '<p class="empty">Menu tidak ditemukan. Coba kata kunci lain.</p>';
	};

	const cart = new Map();
	const cartModal = document.getElementById('cart-modal');
	const cartItems = document.getElementById('cart-items');
	const checkout = document.getElementById('cart-checkout');
	checkout.addEventListener('click', event => {
		event.preventDefault();
		window.location.assign(checkout.href);
	});

	const renderCart = () => {
		const entries = [...cart.entries()];
		const itemCount = entries.reduce((total, [, quantity]) => total + quantity, 0);
		const total = entries.reduce((sum, [menu, quantity]) => sum + menu.p * quantity, 0);
		document.getElementById('cart-count').textContent = itemCount;
		document.querySelector('.cart-toggle').setAttribute('aria-label', `Keranjang, ${itemCount} item`);
		document.getElementById('cart-total').textContent = rp(total);
		cartItems.innerHTML = entries.length
			? entries.map(([menu, quantity]) => `<div class="cart-item">
					<div><b>${menu.n}</b><span>${rp(menu.p)} / porsi</span></div>
					<div class="cart-controls">
						<button type="button" data-cart-action="decrease" data-i="${MENU.indexOf(menu)}" aria-label="Kurangi ${menu.n}">−</button>
						<span>${quantity}</span>
						<button type="button" data-cart-action="increase" data-i="${MENU.indexOf(menu)}" aria-label="Tambah ${menu.n}">+</button>
						<button class="cart-remove" type="button" data-cart-action="remove" data-i="${MENU.indexOf(menu)}">Hapus</button>
					</div>
				</div>`).join('')
			: '<p class="cart-empty">Keranjang masih kosong.</p>';

		const message = entries.length
			? `Halo Kaybun Dimsum, saya ingin memesan:\n${entries.map(([menu, quantity]) => `- ${menu.n} x${quantity}: ${rp(menu.p * quantity)}`).join('\n')}\nTotal: ${rp(total)}`
			: 'Halo Kaybun Dimsum, saya ingin memesan.';
		checkout.href = wa(message);
		checkout.removeAttribute('aria-disabled');
	};

	const updateOrder = () => {
		modal.querySelector('.q').textContent = quantity;
		modal.querySelector('.tot').textContent = rp(currentMenu.p * quantity);
	};

	document.querySelectorAll('.chip').forEach(chip => {
		chip.onclick = () => {
			category = chip.dataset.c;
			document.querySelectorAll('.chip').forEach(item => {
				item.classList.toggle('on', item == chip);
			});
			draw();
		};
	});

	document.getElementById('q').oninput = event => {
		query = event.target.value.trim().toLowerCase();
		draw();
	};

	grid.onclick = event => {
		const card = event.target.closest('.card');
		if (!card) return;

		currentMenu = MENU[card.dataset.i];
		quantity = 1;
		modal.querySelector('img').src = currentMenu.img;
		modal.querySelector('h3').textContent = currentMenu.n;
		modal.querySelector('.d').textContent = currentMenu.d;
		modal.querySelector('.p').textContent = rp(currentMenu.p) + ' / porsi';
		updateOrder();
		modal.classList.add('open');
	};

	modal.querySelector('.plus').onclick = () => {
		quantity++;
		updateOrder();
	};

	modal.querySelector('.min').onclick = () => {
		quantity = Math.max(1, quantity - 1);
		updateOrder();
	};

	modal.querySelector('.add-to-cart').onclick = () => {
		cart.set(currentMenu, (cart.get(currentMenu) || 0) + quantity);
		renderCart();
		modal.classList.remove('open');
	};

	document.querySelector('.cart-toggle').onclick = () => cartModal.classList.add('open');
	cartModal.querySelector('.cart-close').onclick = () => cartModal.classList.remove('open');
	cartModal.onclick = event => event.target == cartModal && cartModal.classList.remove('open');
	cartItems.onclick = event => {
		const button = event.target.closest('[data-cart-action]');
		if (!button) return;

		const menu = MENU[button.dataset.i];
		const currentQuantity = cart.get(menu);
		if (button.dataset.cartAction == 'remove' || (button.dataset.cartAction == 'decrease' && currentQuantity == 1)) {
			cart.delete(menu);
		} else {
			cart.set(menu, currentQuantity + (button.dataset.cartAction == 'increase' ? 1 : -1));
		}
		renderCart();
	};

	const close = () => modal.classList.remove('open');
	modal.querySelector('.x').onclick = close;
	modal.onclick = event => event.target == modal && close();
	document.onkeydown = event => {
		if (event.key == 'Escape') {
			close();
			cartModal.classList.remove('open');
		}
	};
	renderCart();
	draw();
}

/* ====== Kontak ====== */
const social = document.getElementById('soc');

if (social) {
	social.innerHTML = `<a class="s ig" target="_blank" rel="noopener" href="${IG}">
		${ICON.ig}<h3>Instagram</h3><small>@kaybuncimahi</small>
	</a>
	<a class="s wa" target="_blank" rel="noopener" href="${wa('Halo Kaybun Dimsum!')}">
		${ICON.wa}<h3>WhatsApp</h3><small>0813-8585-2544 (chat saja)</small>
	</a>`;
}

const feedbackLink = document.getElementById('feedback-link');

if (feedbackLink) {
	feedbackLink.href = wa('Halo Kaybun Dimsum, saya ingin menyampaikan saran atau keluhan: ');
}
