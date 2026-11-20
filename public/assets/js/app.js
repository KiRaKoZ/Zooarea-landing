/**
 * ZooArea landing page interactions.
 * Vanilla JavaScript; no runtime dependencies or build step required.
 */
(() => {
  'use strict';

  const data = window.ZOOAREA_DATA;
  const photosByBranch = window.ZOOAREA_BRANCH_PHOTOS || {};
  const PLACEHOLDER_IMAGE = 'assets/img/store-placeholder.svg';
  const GALLERY_PLACEHOLDER = 'assets/brand/brand-wallpaper.webp';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const state = {
    language: 'ka',
    mobileTab: 'home',
    currentBranch: null,
    currentPhotoIndex: 0,
    returnFocus: null,
    selectedCategory: null,
  };

  const translations = {
    ka: {
      headerCaption: 'ყველაფერი ბედნიერი თათებისთვის',
      announcement: 'ჩვენი ახალი ვებსაიტი მზადდება!',
      announcementDetail: 'სულ მალე აქ ონლაინ შოპინგიც დაგხვდებათ',
      eyebrow: 'მხოლოდ ხარისხიანი და სანდო პროდუქტები',
      heroTitle: 'პატარა თათებს <em>დიდი სიყვარული</em> სჭირდება.',
      heroDescription: 'ჩვენთან იპოვით საკვებს, სათამაშოებსა და ყველაფერს თქვენი ოთხფეხა მეგობრისთვის. შეუკვეთეთ ახლავე ან გვესტუმრეთ ფილიალში.',
      woltOrder: 'შეკვეთა Wolt-ზე',
      glovoOrder: 'შეკვეთა Glovo-ზე',
      heroNote: 'ძაღლებისთვის, კატებისთვის და ყველა პატარა მეგობრისთვის',
      sticker: 'ხარისხი',
      branchesTitle: 'ჩვენი ფილიალები',
      branchSearch: 'მოძებნეთ უბანი ან მისამართი',
      socialKicker: 'ყოველდღე თქვენთან',
      followUs: 'გამოგვყევით სოციალურ ქსელებში',
      categoriesKicker: 'აღმოაჩინეთ ზოოარეა',
      categoriesTitle: 'შენი საყვარელი კატეგორიები',
      copyright: '— სიყვარულით შექმნილი ცხოველებისთვის',
      phoneAction: 'დაგვირეკეთ: 591 90 50 50',
      contact: 'კონტაქტი ↗',
      tabHome: 'მთავარი',
      tabCategories: 'კატეგორიები',
      tabBranches: 'ფილიალები',
      tabContact: 'კონტაქტი',
      branchDetail: 'ZOOAREA • ფილიალი',
      openMap: 'Google Maps ↗',
      callBranch: 'დარეკვა ↗',
      contactTitle: 'დაგვიკავშირდით',
      contactDescription: 'შეგიძლიათ დაგვიკავშირდეთ, მოგვწეროთ ან შეუკვეთოთ სასურველი პროდუქტები.',
      branchesCount: 'ფილიალი',
      categoriesCount: 'კატეგორია',
      branchMore: 'დეტალურად',
      workingHours: 'ყოველდღე',
      addressPending: 'მისამართი ზუსტდება',
      photosPending: 'ამ ფილიალის ფოტოები მალე დაემატება.',
      needsVerification: 'ამ ჩანაწერის გამოქვეყნების სტატუსი დასაზუსტებელია.',
      emptyBranches: 'ფილიალი ვერ მოიძებნა. სცადეთ სხვა საძიებო სიტყვა.',
      orderWolt: 'შეკვეთა Wolt-ზე ↗',
      orderGlovo: 'შეკვეთა Glovo-ზე ↗',
      phone: 'დარეკვა: 591 90 50 50',
      social: 'სოციალური ქსელები',
      viewMap: 'ფილიალის მდებარეობა',
      mapShort: 'რუკა',
      mapPreview: 'რუკის ჩვენება',
      hideMap: 'რუკის დამალვა',
      mapHint: 'თუ რუკა არ გამოჩნდა, გახსენით Google Maps ცალკე ფანჯარაში.',
      categoryDescription: 'მოიძიეთ სასურველი პროდუქცია ჩვენს ფილიალებში ან გადადით Wolt-სა და Glovo-ზე.',
      loading: 'ბედნიერი თათები უკვე მოდიან...',
      contactHours: 'ფილიალები: ყოველდღე 10:00–21:00',
      contactLead: 'დაგვირეკეთ, მოგვწერეთ ან შეუკვეთეთ ონლაინ',
      viewCategory: 'კატეგორიის დათვალიერება',
    },
    en: {
      headerCaption: 'Everything for happy paws',
      announcement: 'Our new website is in the works!',
      announcementDetail: 'Online shopping will be available here soon',
      eyebrow: 'Only quality and trusted products',
      heroTitle: 'Little paws deserve <em>big love.</em>',
      heroDescription: 'Find pet food, toys and essentials at ZooArea. Order online today or visit one of our stores.',
      woltOrder: 'Order on Wolt',
      glovoOrder: 'Order on Glovo',
      heroNote: 'For dogs, cats and every small companion',
      sticker: 'QUALITY',
      branchesTitle: 'Our locations',
      branchSearch: 'Search neighborhood or address',
      socialKicker: 'STAY CONNECTED',
      followUs: 'Follow us on social media',
      categoriesKicker: 'EXPLORE ZOOAREA',
      categoriesTitle: 'Your favorite categories',
      copyright: '— made with love for pets',
      phoneAction: 'Call: 591 90 50 50',
      contact: 'Contact ↗',
      tabHome: 'Home',
      tabCategories: 'Categories',
      tabBranches: 'Stores',
      tabContact: 'Contact',
      branchDetail: 'ZOOAREA • STORE',
      openMap: 'Google Maps ↗',
      callBranch: 'Call ↗',
      contactTitle: 'Get in touch',
      contactDescription: 'Call or message us, or order your favorite products online.',
      branchesCount: 'stores',
      categoriesCount: 'categories',
      branchMore: 'Details',
      workingHours: 'Daily',
      addressPending: 'Address to be confirmed',
      photosPending: 'Photos of this store will be added soon.',
      needsVerification: 'The publication status of this store listing is unconfirmed.',
      emptyBranches: 'No stores found. Try another search.',
      orderWolt: 'Order on Wolt ↗',
      orderGlovo: 'Order on Glovo ↗',
      phone: 'Call: 591 90 50 50',
      social: 'Social media',
      viewMap: 'View store map',
      mapShort: 'Map',
      mapPreview: 'Show map',
      hideMap: 'Hide map',
      mapHint: 'If the map does not load, use the Google Maps link to open it.',
      categoryDescription: 'Find what your pet loves at our stores or order through Wolt and Glovo.',
      loading: 'Happy paws are on their way...',
      contactHours: 'Stores: daily 10:00–21:00',
      contactLead: 'Call us, follow us or order online',
      viewCategory: 'Explore category',
    },
    ru: {
      headerCaption: 'Всё для счастливых лапок',
      announcement: 'Наш новый сайт скоро откроется!',
      announcementDetail: 'Скоро здесь появятся онлайн-покупки',
      eyebrow: 'Только качество и проверенные продукты',
      heroTitle: 'Маленьким лапкам нужна <em>большая любовь.</em>',
      heroDescription: 'В ZooArea есть корм, игрушки и всё необходимое для питомцев. Заказывайте онлайн или приходите в магазин.',
      woltOrder: 'Заказать в Wolt',
      glovoOrder: 'Заказать в Glovo',
      heroNote: 'Для собак, кошек и всех маленьких друзей',
      sticker: 'КАЧЕСТВО',
      branchesTitle: 'Наши магазины',
      branchSearch: 'Поиск по району или адресу',
      socialKicker: 'МЫ НА СВЯЗИ',
      followUs: 'Мы в социальных сетях',
      categoriesKicker: 'ОТКРОЙТЕ ZOOAREA',
      categoriesTitle: 'Любимые категории',
      copyright: '— с любовью к питомцам',
      phoneAction: 'Позвонить: 591 90 50 50',
      contact: 'Контакты ↗',
      tabHome: 'Главная',
      tabCategories: 'Категории',
      tabBranches: 'Магазины',
      tabContact: 'Контакты',
      branchDetail: 'ZOOAREA • МАГАЗИН',
      openMap: 'Google Maps ↗',
      callBranch: 'Позвонить ↗',
      contactTitle: 'Свяжитесь с нами',
      contactDescription: 'Звоните, пишите или заказывайте любимые товары онлайн.',
      branchesCount: 'магазинов',
      categoriesCount: 'категорий',
      branchMore: 'Подробнее',
      workingHours: 'Ежедневно',
      addressPending: 'Адрес уточняется',
      photosPending: 'Фотографии магазина скоро будут добавлены.',
      needsVerification: 'Статус публикации этой точки пока не подтверждён.',
      emptyBranches: 'Магазины не найдены. Попробуйте другой запрос.',
      orderWolt: 'Заказать в Wolt ↗',
      orderGlovo: 'Заказать в Glovo ↗',
      phone: 'Позвонить: 591 90 50 50',
      social: 'Социальные сети',
      viewMap: 'Посмотреть карту магазина',
      mapShort: 'Карта',
      mapPreview: 'Показать карту',
      hideMap: 'Скрыть карту',
      mapHint: 'Если карта не загрузилась, откройте адрес через Google Maps.',
      categoryDescription: 'Найдите товары в наших магазинах или закажите через Wolt и Glovo.',
      loading: 'Счастливые лапки уже идут...',
      contactHours: 'Магазины: ежедневно 10:00–21:00',
      contactLead: 'Позвоните, подпишитесь или закажите онлайн',
      viewCategory: 'Открыть категорию',
    },
  };

  const t = (key) => translations[state.language][key] || key;

  function element(tag, className = '', text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function setFallback(image) {
    image.addEventListener('error', () => {
      if (!image.src.endsWith(PLACEHOLDER_IMAGE)) image.src = PLACEHOLDER_IMAGE;
    });
  }

  // Lazy photo loading: IntersectionObserver also respects nested scroll containers.
  const lazyObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const img = entry.target;
          img.src = img.dataset.src;
          delete img.dataset.src;
          observer.unobserve(img);
        });
      }, { rootMargin: '140px 0px', threshold: 0.01 })
    : null;

  function lazyImage(img, source, { priority = false } = {}) {
    img.decoding = 'async';
    img.loading = priority ? 'eager' : 'lazy';
    img.width = 480;
    img.height = 360;
    if (priority || !lazyObserver) img.src = source;
    else { img.dataset.src = source; lazyObserver.observe(img); }
  }

  function mapQuery(branch) {
    return `ZooArea ${branch.address}, ${branch.city}, საქართველო`;
  }

  function mapEmbedUrl(branch) {
    const query = encodeURIComponent(mapQuery(branch));
    if (data.googleMapsEmbedKey) {
      return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(data.googleMapsEmbedKey)}&q=${query}`;
    }
    // Keyless compatibility fallback. Not Google's supported Embed API; always offer Maps URL.
    return `https://maps.google.com/maps?q=${query}&z=15&output=embed`;
  }

  function mapLink(branch) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery(branch))}`;
  }

  function phoneLink(phone) {
    return `tel:+995${phone.replace(/\D/g, '')}`;
  }

  function branchAddress(branch) {
    return branch.address || t('addressPending');
  }

  function branchPhotos(branch) {
    return (photosByBranch[branch.id] || []).filter(Boolean);
  }

  function branchName(branch) {
    // Proper street names remain Georgian to match the source address list.
    return `ZooArea • ${branch.name}`;
  }

  function renderCategories(container, mobile = false) {
    container.replaceChildren();
    data.categories.forEach((category, index) => {
      const card = element('button', mobile ? 'mobile-category' : 'category-card');
      card.type = 'button';
      card.setAttribute('aria-label', `${t('viewCategory')}: ${category[state.language]}`);
      card.style.setProperty('--card-index', index);
      const image = element('img');
      lazyImage(image, `assets/categories/${category.image}`, { priority: mobile && index < 6 });
      image.alt = category[state.language];
      const meta = element('span', 'category-index', String(index + 1).padStart(2, '0'));
      const name = element('strong', 'category-name', category[state.language]);
      const arrow = element('span', 'category-arrow', '↗');
      arrow.setAttribute('aria-hidden', 'true');
      card.append(image, meta, name, arrow);
      card.addEventListener('click', () => openCategoryDialog(category));
      container.append(card);
    });
    $('#categoryCount').textContent = `${data.categories.length} ${t('categoriesCount')}`;
  }

  function openCategoryDialog(category) {
    state.returnFocus = document.activeElement;
    state.selectedCategory = category;
    $('#categoryDialogTitle').textContent = category[state.language];
    const img = $('#categoryDialogImage');
    img.src = `assets/categories/${category.image}`;
    img.alt = category[state.language];
    $('#categoryWoltLink').href = data.links.wolt;
    $('#categoryGlovoLink').href = data.links.glovo;
    $('#categoryDialog').showModal();
  }

  function createBranchCard(branch) {
    const card = element('button', 'branch-card');
    card.type = 'button';
    card.setAttribute('aria-label', `${branchName(branch)} — ${t('branchMore')}`);

    const picture = element('span', 'branch-picture');
    const img = element('img');
    const photos = branchPhotos(branch);
    lazyImage(img, photos[0] || PLACEHOLDER_IMAGE);
    img.alt = photos.length ? branchName(branch) : '';
    img.loading = 'lazy';
    setFallback(img);
    picture.append(img);

    const info = element('span', 'branch-card-info');
    info.append(
      element('strong', '', branchName(branch)),
      element('span', 'branch-address', branchAddress(branch)),
      element('small', '', `${t('workingHours')} • ${data.hours}`),
    );
    const arrow = element('span', 'branch-card-arrow', '↗');
    card.append(picture, info, arrow);
    card.addEventListener('click', () => openBranchDialog(branch));
    return card;
  }

  function renderBranches(container, search = '') {
    const query = search.toLocaleLowerCase().trim();
    const matches = data.branches.filter((branch) =>
      `${branch.name} ${branch.address} ${branch.city} ${branch.id.startsWith('dighomi') ? 'დიღომი დიღომის დიღმის' : ''}`
        .toLocaleLowerCase().includes(query),
    );
    container.replaceChildren();
    if (!matches.length) container.append(element('p', 'empty-state', t('emptyBranches')));
    matches.forEach((branch) => container.append(createBranchCard(branch)));
    $('#branchCount').textContent = `${matches.length}`;
    return matches.length;
  }

  function changePhoto(index) {
    const branch = state.currentBranch;
    if (!branch) return;
    const photos = branchPhotos(branch);
    const items = photos.length ? photos : [GALLERY_PLACEHOLDER];
    state.currentPhotoIndex = (index + items.length) % items.length;
    $('#dialogImage').src = items[state.currentPhotoIndex];
    $('#dialogImage').alt = `${branchName(branch)} — ${state.currentPhotoIndex + 1}`;
    $('#photoCount').textContent = `${state.currentPhotoIndex + 1} / ${items.length}`;
    $$('.gallery-thumb', $('#dialogThumbs')).forEach((thumb, thumbIndex) => {
      thumb.classList.toggle('selected', thumbIndex === state.currentPhotoIndex);
      thumb.setAttribute('aria-pressed', String(thumbIndex === state.currentPhotoIndex));
    });
    $('#photoPrev').hidden = items.length < 2;
    $('#photoNext').hidden = items.length < 2;
  }

  function openBranchDialog(branch) {
    state.returnFocus = document.activeElement;
    state.currentBranch = branch;
    const photos = branchPhotos(branch);
    const items = photos.length ? photos : [GALLERY_PLACEHOLDER];
    const thumbs = $('#dialogThumbs');
    thumbs.replaceChildren();

    items.forEach((source, index) => {
      const button = element('button', 'gallery-thumb');
      button.type = 'button';
      button.setAttribute('aria-label', `Photo ${index + 1}`);
      const image = element('img');
      lazyImage(image, source);
      image.alt = '';
      setFallback(image);
      button.append(image);
      button.addEventListener('click', () => changePhoto(index));
      thumbs.append(button);
    });

    $('#dialogTitle').textContent = branchName(branch);
    $('#dialogAddress').textContent = [branchAddress(branch), branch.city].filter(Boolean).join(', ');
    // A map link requires an actual address; do not invent locations for photo-only branches.
    $('#dialogMap').style.display = branch.address ? '' : 'none';
    if (branch.address) $('#dialogMap').href = mapLink(branch);
    $('#toggleInlineMap').hidden = !branch.address;
    resetInlineMap();
    $('#dialogPhone').hidden = !branch.phone;
    if (branch.phone) $('#dialogPhone').href = phoneLink(branch.phone);
    $('#dialogHours').textContent = `${t('workingHours')} • ${data.hours}`;

    const notice = $('#photoNotice');
    notice.hidden = photos.length > 0 && !branch.needsVerification && !branch.needsAddress;
    notice.textContent = [
      !photos.length ? t('photosPending') : '',
      branch.needsVerification ? t('needsVerification') : '',
      branch.needsAddress ? t('addressPending') : '',
    ].filter(Boolean).join(' ');

    changePhoto(0);
    $('#branchDialog').showModal();
  }

  function renderContactLinks(container) {
    container.replaceChildren();
    const items = [
      { title: data.phone, sub: t('phone'), url: phoneLink(data.phone), icon: 'phone', type: 'primary' },
      { title: 'Google Maps', sub: t('branchesTitle'), url: 'https://www.google.com/maps/search/?api=1&query=ZooArea%20Georgia', icon: 'map' },
      { title: 'Wolt', sub: t('orderWolt'), url: data.links.wolt, icon: '', type: 'wolt' },
      { title: 'Glovo', sub: t('orderGlovo'), url: data.links.glovo, icon: '', type: 'glovo' },
      { title: 'Facebook', sub: t('social'), url: data.links.facebook, icon: 'facebook' },
      { title: 'Instagram', sub: t('social'), url: data.links.instagram, icon: 'instagram' },
      { title: 'TikTok', sub: t('social'), url: data.links.tiktok, icon: 'tiktok' },
    ];
    items.forEach((item) => {
      const anchor = element('a', `contact-link ${item.type || ''}`);
      anchor.href = item.url;
      if (!item.url.startsWith('tel:')) {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
      }
      const icon = element('span', 'contact-icon');
      if (item.icon) {
        const picture = element('img');
        picture.src = `assets/icons/${item.icon}.svg`;
        picture.alt = '';
        icon.append(picture);
      } else {
        icon.textContent = item.title.slice(0, 1);
      }
      const description = element('span', 'contact-link-copy');
      description.append(element('strong', '', item.title), element('small', '', item.sub));
      const arrow = element('span', 'contact-chevron', '↗');
      arrow.setAttribute('aria-hidden', 'true');
      anchor.append(icon, description, arrow);
      container.append(anchor);
    });
  }

  function resetInlineMap() {
    $('#dialogMapPanel').hidden = true;
    const frame = $('#dialogMapFrame');
    frame.removeAttribute('src'); // Also releases embedded Google resources on close/switch.
    $('#toggleInlineMap').setAttribute('aria-expanded', 'false');
    $('#toggleInlineMap span').textContent = t('mapPreview');
  }

  function toggleInlineMap() {
    const panel = $('#dialogMapPanel');
    const nextVisible = panel.hidden;
    panel.hidden = !nextVisible;
    $('#toggleInlineMap').setAttribute('aria-expanded', String(nextVisible));
    $('#toggleInlineMap span').textContent = t(nextVisible ? 'hideMap' : 'mapPreview');
    const frame = $('#dialogMapFrame');
    if (nextVisible && state.currentBranch?.address) {
      frame.src = mapEmbedUrl(state.currentBranch);
    } else frame.removeAttribute('src');
  }

  function renderMobilePanel() {
    const panel = $('#mobilePanel');
    panel.hidden = state.mobileTab === 'home';
    if (panel.hidden) return;

    const body = $('#mobilePanelBody');
    body.replaceChildren();
    const titles = { categories: 'categoriesTitle', branches: 'branchesTitle', contact: 'contactTitle' };
    $('#mobilePanelTitle').textContent = t(titles[state.mobileTab]);

    if (state.mobileTab === 'categories') {
      const grid = element('div', 'mobile-category-grid');
      renderCategories(grid, true);
      body.append(grid);
    } else if (state.mobileTab === 'branches') {
      const search = element('input', 'mobile-search');
      search.type = 'search';
      search.placeholder = t('branchSearch');
      search.setAttribute('aria-label', t('branchSearch'));
      const list = element('div', 'mobile-branch-list');
      search.addEventListener('input', () => renderBranches(list, search.value));
      body.append(search, list);
      renderBranches(list);
    } else if (state.mobileTab === 'contact') {
      body.append(element('p', 'mobile-contact-intro', t('contactLead')));
      const links = element('div', 'mobile-contact-links');
      renderContactLinks(links);
      body.append(links);
    }
  }

  function selectMobileTab(tab) {
    state.mobileTab = tab;
    $$('[data-tab]').forEach((button) => {
      const active = button.dataset.tab === tab;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    renderMobilePanel();
  }

  function applyLanguage() {
    document.documentElement.lang = state.language;
    $$('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
    $$('[data-i18n-html]').forEach((node) => { node.innerHTML = t(node.dataset.i18nHtml); });
    $$('[data-i18n-placeholder]').forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
    $$('[data-i18n-title]').forEach((node) => { node.title = t(node.dataset.i18nTitle); });
    $$('[data-lang]').forEach((button) => {
      const active = button.dataset.lang === state.language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    renderCategories($('#categoryTrack'));
    renderBranches($('#branchList'), $('#branchSearch').value);
    renderMobilePanel();
    renderContactLinks($('#contactLinks'));
    if (state.selectedCategory && $('#categoryDialog').open) {
      $('#categoryDialogTitle').textContent = state.selectedCategory[state.language];
    }
  }

  // Init: no DOM rendering occurs before the deferred scripts have loaded.
  $('#year').textContent = new Date().getFullYear();
  $('#branchSearch').addEventListener('input', (event) => {
    renderBranches($('#branchList'), event.target.value);
  });
  $('#categoryPrev').addEventListener('click', () => {
    $('#categoryTrack').scrollBy({ left: -390, behavior: 'smooth' });
  });
  $('#categoryNext').addEventListener('click', () => {
    $('#categoryTrack').scrollBy({ left: 390, behavior: 'smooth' });
  });
  $$('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      state.language = button.dataset.lang;
      applyLanguage();
    });
  });
  $$('[data-tab]').forEach((button) => {
    button.addEventListener('click', () => selectMobileTab(button.dataset.tab));
  });
  $('#directoryMap').addEventListener('click', () => {
    const query = $('#branchSearch').value.trim().toLocaleLowerCase();
    const branch = data.branches.find((item) => item.address &&
      `${item.name} ${item.address}`.toLocaleLowerCase().includes(query));
    if (branch) {
      openBranchDialog(branch);
      toggleInlineMap();
    }
  });
  $('#toggleInlineMap').addEventListener('click', toggleInlineMap);
  $('#branchDialog').addEventListener('close', resetInlineMap);
  $('#closeCategoryDialog').addEventListener('click', () => $('#categoryDialog').close());
  $('#categoryDialog').addEventListener('close', () => state.returnFocus?.focus());
  $('#footerContact').addEventListener('click', () => $('#contactDialog').showModal());
  $('#closeContactDialog').addEventListener('click', () => $('#contactDialog').close());
  $('#closeBranchDialog').addEventListener('click', () => $('#branchDialog').close());
  $('#photoPrev').addEventListener('click', () => changePhoto(state.currentPhotoIndex - 1));
  $('#photoNext').addEventListener('click', () => changePhoto(state.currentPhotoIndex + 1));
  $('#branchDialog').addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') changePhoto(state.currentPhotoIndex - 1);
    if (event.key === 'ArrowRight') changePhoto(state.currentPhotoIndex + 1);
  });
  [$('#branchDialog'), $('#contactDialog'), $('#categoryDialog')].forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
  $('#branchDialog').addEventListener('close', () => state.returnFocus?.focus());

  // If a third-party logo cannot be loaded, keep a readable branded label.
  $$('.cta img').forEach((image) => {
    image.addEventListener('error', () => {
      const replacement = element('strong', 'logo-fallback', image.alt);
      image.replaceWith(replacement);
    });
  });
  applyLanguage();

  // Preloader ends when critical hero image is decoded, with a short timeout fallback.
  const heroImage = $('.hero-dog');
  const criticalImage = heroImage?.decode ? heroImage.decode().catch(() => {}) : Promise.resolve();
  const fallback = new Promise((resolve) => setTimeout(resolve, 1600));
  Promise.race([criticalImage, fallback]).then(() => {
    $('#preloader').classList.add('loaded');
    setTimeout(() => { $('#preloader').hidden = true; }, 500);
  });
})();
