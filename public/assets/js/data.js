/**
 * ZooArea content, kept separate from layout and UI behavior.
 * Branch addresses / phones are transcribed from the supplied November 2026 list.
 * Branch photos are loaded from branch-photos.js after photo preparation.
 */
window.ZOOAREA_DATA = {
  links: {
    wolt: 'https://wolt.com/ka/geo/tbilisi/brand/zooarea',
    glovo: 'https://glovoapp.com/ka/ge/tbilisi/stores/zooarea-tbi',
    facebook: 'https://www.facebook.com/zooarea.ge',
    instagram: 'https://www.instagram.com/zooarea.ge/',
    tiktok: 'https://www.tiktok.com/@zooarea',
  },
  googleMapsEmbedKey: '', // Optional official Google Maps Embed API key; leave empty for keyless fallback.
  phone: '591 90 50 50',
  hours: '10:00–21:00',

  categories: [
    { id: 'medicine', ka: 'მედიკამენტები', en: 'Health & wellness', ru: 'Здоровье', image: 'medicine.webp' },
    { id: 'dog-premium', ka: 'ძაღლის პრემიუმ კვება', en: 'Premium dog food', ru: 'Премиум-корм для собак', image: 'dog-premium.webp' },
    { id: 'cat-premium', ka: 'კატის პრემიუმ კვება', en: 'Premium cat food', ru: 'Премиум-корм для кошек', image: 'cat-premium.webp' },
    { id: 'toy', ka: 'სათამაშოები', en: 'Toys', ru: 'Игрушки', image: 'toy.webp' },
    { id: 'accessories', ka: 'აქსესუარები', en: 'Accessories', ru: 'Аксессуары', image: 'accessories.webp' },
    { id: 'hygiene', ka: 'ჰიგიენა', en: 'Hygiene', ru: 'Гигиена', image: 'hygiene.webp' },
    { id: 'cat-economy', ka: 'კატის ეკონომ კვება', en: 'Value cat food', ru: 'Эконом-корм для кошек', image: 'cat-economy.webp' },
    { id: 'wet-food', ka: 'სველი კვება', en: 'Wet food', ru: 'Влажный корм', image: 'wet-food.webp' },
    { id: 'treats', ka: 'სნექები', en: 'Treats', ru: 'Лакомства', image: 'treats.webp' },
    { id: 'cat-superpremium', ka: 'კატის სუპერ პრემიუმ კვება', en: 'Super-premium cat food', ru: 'Супер-премиум для кошек', image: 'cat-superpremium.webp' },
    { id: 'dog-superpremium', ka: 'ძაღლის სუპერ პრემიუმ კვება', en: 'Super-premium dog food', ru: 'Супер-премиум для собак', image: 'dog-superpremium.webp' },
  ],

  branches: [
    { id: 'avchala', name: 'ავჭალა', address: 'ავჭალის ქუჩა 28', city: 'თბილისი', phone: '595 91 15 72' },
    { id: 'chovelidze', name: 'ჩოველიძე', address: 'თამარ ჩოველიძის ქუჩა 13', city: 'თბილისი', phone: '591 90 50 50' },
    { id: 'chargali', name: 'ჩარგალი', address: 'ჩარგლის ქუჩა 41', city: 'თბილისი', phone: '595 91 15 34' },
    { id: 'rustavi', name: 'რუსთავი', address: 'მეგობრობის გამზირი 1ა', city: 'რუსთავი', phone: '591 90 50 50' },
    { id: 'dighomi-2', name: 'დიღმის მასივი II', address: 'დიღმის მასივი, II კვარტალი, კორპუსი 6ა', city: 'თბილისი', phone: '595 91 15 31' },
    { id: 'dadiani-313', name: 'ცოტნე დადიანი 313', address: 'ცოტნე დადიანის ქუჩა 313', city: 'თბილისი', phone: '595 91 15 37' },
    { id: 'tavadze', name: 'თავაძე', address: 'ფერდინანდ თავაძის ქუჩა 2ა', city: 'თბილისი', phone: '595 91 15 54' },
    { id: 'aslanidi', name: 'ასლანიძე', address: 'პავლე ასლანიდის ქუჩა 5', city: 'თბილისი', phone: '595 91 15 78' },
    { id: 'agladze', name: 'აგლაძე', address: 'რაფაელ აგლაძის ქუჩა 38', city: 'თბილისი', phone: '595 91 15 81' },
    { id: 'leonidze', name: 'ლეონიძე', address: 'გიორგი ლეონიძის ქუჩა 12', city: 'თბილისი', phone: '591 90 50 50' },
    { id: 'vekua', name: 'ვეკუა', address: 'ილია ვეკუას ქუჩა 137', city: 'თბილისი', phone: '591 90 50 50' },
    { id: 'dighomi-4', name: 'დიღმის მასივი IV', address: 'დიღმის მასივი, IV კვარტალი, კორპუსი 1', city: 'თბილისი', phone: '595 91 15 60' },
    { id: 'guramishvili', name: 'გურამიშვილი', address: 'დავით გურამიშვილის გამზირი 7', city: 'თბილისი', phone: '595 91 15 36' },
    { id: 'vazha', name: 'ვაჟა-ფშაველა', address: 'ვაჟა-ფშაველას გამზირი 78', city: 'თბილისი', phone: '595 91 15 73' },
    { id: 'dadiani-133', name: 'ცოტნე დადიანი 133ა', address: 'ცოტნე დადიანის ქუჩა 133ა', city: 'თბილისი', phone: '595 91 15 54' },
    { id: 'chitaia', name: 'ჩიტაია', address: 'გიორგი ჩიტაიას ქუჩა 39ა', city: 'თბილისი', phone: '', needsVerification: true },
    { id: 'zahesi', name: 'ზაჰესი', address: '', city: '', phone: '', needsAddress: true },
  ],
};
