
export const MainPageHeader = {
  title: 'All Products',
  hasDropdown: true,
  hasSubmenus: true,
  collapsable: false,
  dropdownItems: [
    { title: 'Top 100 Offers', classes: ['highlight'], hasDropdown: false, url: '' },
    { title: 'Value of teh Day', classes: ['highlight'], hasDropdown: false, url: '' },
    { title: 'New Arrivals', classes: ['highlight'], hasDropdown: false, url: '' },
    { title: 'Computers & Accessories', classes: [''], hasDropdown: true, url: '',
      imgUrl: '../../../assets/images/megamenu-2.png',
      submenu: { submenuGroups: [
        { title: 'Computers & Accessories', classes: ['highlight', 'no-top-border'], isLink: false },
        { title: 'All Computers & Accessories', isLink: true },
        { title: 'Laptops, Desktops & Monitors', isLink: true },
        { title: 'Printers & Ink', isLink: true },
        { title: 'Networks & Internet Devices', isLink: true },
        { title: 'Computer Accessories', isLink: true },
        { title: 'Software', isLink: true },
        { title: 'All Electronics', classes: ['highlight'], isLink: false },
        { title: 'All Electronics', isLink: true },
        { title: 'Office & Stationary', classes: ['highlight'], isLink: false },
        { title: 'All Office & Stationary', isLink: true },
      ] }
    },
    { title: 'Cameras, Audio & Video', classes: [''], hasDropdown: true, url: '',
      imgUrl: '../../../assets/images/megamenu-3.png',
      submenu: { submenuGroups: [
        { title: 'Cameras & Photography', classes: ['highlight', 'no-top-border'], isLink: false },
        { title: 'Lenses', isLink: true },
        { title: 'Camera Accessories', isLink: true },
        { title: 'Security & Survaillance', isLink: true },
        { title: 'Binoculars & Telescopes', isLink: true },
        { title: 'Camcorders', isLink: true },
        { title: 'All Electronics', classes: ['highlight'], isLink: false },
        { title: 'All Electronics', isLink: true },
        { title: 'Used Elecronics', isLink: true },
        { title: 'Audio & Video', classes: ['highlight'], isLink: false },
        { title: 'All Audio & Video', isLink: true },
        { title: 'Headphones & Speakers', isLink: true }
      ] }
    },
    { title: 'Mobiles & Tablets', classes: [''], hasDropdown: true, url: '',
      imgUrl: '../../../assets/images/megamenu-.png',
      submenu: { submenuGroups: [
        { title: 'All Mobile Phones', classes: ['highlight', 'no-top-border'], isLink: false },
        { title: 'Smartphones', isLink: true },
        { title: 'Refurbished Mobiles', isLink: true },
        { title: 'All Mobile Accessories', isLink: true },
        { title: 'Cases & Covers', isLink: true },
        { title: 'Refurbished Smartphones', isLink: true },
        { title: 'Best Deals', isLink: true },
        { title: 'Our Picks', isLink: true },
        { title: 'Tablets', classes: ['highlight', 'no-top-border'], isLink: false },
        { title: 'All Tablets', isLink: true },
        { title: 'Tablet Cases', isLink: true },
        { title: 'Tablet Accessories', isLink: true },
      ] }
    },
    { title: 'Movies, Music & Video Games', classes: [''], hasDropdown: true, url: '',
      imgUrl: '../../../assets/images/megamenu-8.png',
      submenu: { submenuGroups: [
        { title: 'Movies & TV Shows', classes: ['highlight', 'no-top-border'], isLink: false },
        { title: 'All Movies & TV Shows', isLink: true },
        { title: 'All English', isLink: true },
        { title: 'All Hindi', isLink: true },
        { title: 'Video Games', classes: ['highlight'], isLink: false },
        { title: 'PC Games', isLink: true },
        { title: 'Game Codes', isLink: true },
        { title: 'Consoles', isLink: true },
        { title: 'Accessories', isLink: true },
        { title: 'Music', classes: ['highlight'], isLink: false },
        { title: 'All Music', isLink: true },
        { title: 'Indian Clasics', isLink: true },
        { title: 'Musical Instruments', isLink: true },
      ] }
    },
    { title: 'Tv & Audio', classes: [''], hasDropdown: true, url: '',
      imgUrl: '../../../assets/images/megamenu-4.png',
      submenu: { submenuGroups: [
        { title: 'Audio & Video', classes: ['highlight', 'no-top-border'], isLink: false },
        { title: 'All Audio & Video', isLink: true },
        { title: 'Televisions', isLink: true },
        { title: 'Headphones', isLink: true },
        { title: 'Speakers', isLink: true },
        { title: 'Audio & Video Accessories', isLink: true },
        { title: 'Music', classes: ['highlight'], isLink: false },
        { title: 'Sound Systems', isLink: true },
        { title: 'Oldschool Cassetts', isLink: true },
        { title: 'Surround Systems', isLink: true },
        { title: 'Vinyl Discs', isLink: true },
      ] }
    },
    { title: 'Watches & Eyewear', classes: [''], hasDropdown: true, url: '',
      imgUrl: '../../../assets/images/megamenu-7.png',
      submenu: { submenuGroups: [
        { title: 'Watches', classes: ['highlight', 'no-top-border'], isLink: false },
        { title: 'All Watches', isLink: true },
        { title: 'Men\'s Watches', isLink: true },
        { title: 'Women\'s Watches', isLink: true },
        { title: 'Premium Watches', isLink: true },
        { title: 'Deals on Watches', isLink: true },
        { title: 'Eyewear', classes: ['highlight', 'no-top-border'], isLink: false },
        { title: 'Men\'s Sunglasses', isLink: true },
        { title: 'Women\'s Sunglasses', isLink: true },
      ] }
    },
    { title: 'Car, Motorbike & Industrial', classes: [''], hasDropdown: true, url: '',
      imgUrl: '../../../assets/images/megamenu-3.png',
      submenu: { submenuGroups: [
        { title: 'Car & Motorbike', classes: ['highlight', 'no-top-border'], isLink: false },
        { title: 'All Cars & Bikes', isLink: true },
        { title: 'Car & Bike Care', isLink: true },
        { title: 'Lubricants', isLink: true },
        { title: 'Shop for Bike', classes: ['highlight'], isLink: false },
        { title: 'Helmet & Gloves', isLink: true },
        { title: 'Bike Parts', isLink: true },
        { title: 'Industrial Supplies', classes: ['highlight'], isLink: false },
        { title: 'All Industrial Supplies', isLink: true },
        { title: 'Lab & Scientific', isLink: true }
      ] }
    },
    { title: 'Accessories', classes: [''], hasDropdown: true, url: '',
      submenu: { submenuGroups: [
        { title: 'Cases', isLink: true },
        { title: 'Chargers', isLink: true },
        { title: 'Headphone Accessories', isLink: true },
        { title: 'Headphone Cases', isLink: true },
        { title: 'Headphones', isLink: true },
        { title: 'Computer Accessories', isLink: true },
        { title: 'Laptop Accessories', isLink: true }
      ] }
    },
  ]
};


export const SecondaryPageHeader = [
  { title: 'Value of the Day', classes: ['highlight'], hasDropdown: false, url: '' },
  { title: 'Top 100 Offers', classes: ['highlight'], hasDropdown: false, url: '' },
  { title: 'New Arrivals', classes: ['highlight'], hasDropdown: false, url: '' },
  { title: 'Laptop & Computers', classes: [''], hasDropdown: true, url: '',
    imgUrl: '../../../assets/images/megamenu-2.png',
    submenu: { submenuGroups: [
      { title: 'Computers & Accessories', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'All Computers & Accessories', isLink: true },
      { title: 'Laptops, Desktops & Monitors', isLink: true },
      { title: 'Printers & Ink', isLink: true },
      { title: 'Networks & Internet Devices', isLink: true },
      { title: 'Computer Accessories', isLink: true },
      { title: 'Software', isLink: true },
      { title: 'All Electronics', classes: ['highlight'], isLink: false },
      { title: 'All Electronics', isLink: true },
      { title: 'Office & Stationary', classes: ['highlight'], isLink: false },
      { title: 'All Office & Stationary', isLink: true },
    ] }
  },
  { title: 'Cameras & Photography', classes: [''], hasDropdown: true, url: '',
    imgUrl: '../../../assets/images/megamenu-3.png',
    submenu: { submenuGroups: [
      { title: 'Cameras & Photography', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'Lenses', isLink: true },
      { title: 'Camera Accessories', isLink: true },
      { title: 'Security & Survaillance', isLink: true },
      { title: 'Binoculars & Telescopes', isLink: true },
      { title: 'Camcorders', isLink: true },
      { title: 'All Electronics', classes: ['highlight'], isLink: false },
      { title: 'All Electronics', isLink: true },
      { title: 'Used Elecronics', isLink: true },
      { title: 'Audio & Video', classes: ['highlight'], isLink: false },
      { title: 'All Audio & Video', isLink: true },
      { title: 'Headphones & Speakers', isLink: true }
    ] }
  },
  { title: 'Smart Phones & Tablets', classes: [''], hasDropdown: true, url: '',
    imgUrl: '../../../assets/images/megamenu-.png',
    submenu: { submenuGroups: [
      { title: 'All Mobile Phones', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'Smartphones', isLink: true },
      { title: 'Refurbished Mobiles', isLink: true },
      { title: 'All Mobile Accessories', isLink: true },
      { title: 'Cases & Covers', isLink: true },
      { title: 'Refurbished Smartphones', isLink: true },
      { title: 'Best Deals', isLink: true },
      { title: 'Our Picks', isLink: true },
      { title: 'Tablets', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'All Tablets', isLink: true },
      { title: 'Tablet Cases', isLink: true },
      { title: 'Tablet Accessories', isLink: true },
    ] }
  },
  { title: 'Video Games & Consoles', classes: [''], hasDropdown: true, url: '',
    imgUrl: '../../../assets/images/megamenu-8.png',
    submenu: { submenuGroups: [
      { title: 'Movies & TV Shows', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'All Movies & TV Shows', isLink: true },
      { title: 'All English', isLink: true },
      { title: 'All Hindi', isLink: true },
      { title: 'Video Games', classes: ['highlight'], isLink: false },
      { title: 'PC Games', isLink: true },
      { title: 'Game Codes', isLink: true },
      { title: 'Consoles', isLink: true },
      { title: 'Accessories', isLink: true },
      { title: 'Music', classes: ['highlight'], isLink: false },
      { title: 'All Music', isLink: true },
      { title: 'Indian Clasics', isLink: true },
      { title: 'Musical Instruments', isLink: true },
    ] }
  },
  { title: 'Tv & Audio', classes: [''], hasDropdown: true, url: '',
    imgUrl: '../../../assets/images/megamenu-4.png',
    submenu: { submenuGroups: [
      { title: 'Audio & Video', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'All Audio & Video', isLink: true },
      { title: 'Televisions', isLink: true },
      { title: 'Headphones', isLink: true },
      { title: 'Speakers', isLink: true },
      { title: 'Audio & Video Accessories', isLink: true },
      { title: 'Music', classes: ['highlight'], isLink: false },
      { title: 'Sound Systems', isLink: true },
      { title: 'Oldschool Cassetts', isLink: true },
      { title: 'Surround Systems', isLink: true },
      { title: 'Vinyl Discs', isLink: true },
    ] }
  },
  { title: 'Gadgets', classes: [''], hasDropdown: true, url: '',
    imgUrl: '../../../assets/images/megamenu-7.png',
    submenu: { submenuGroups: [
      { title: 'Watches', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'All Watches', isLink: true },
      { title: 'Men\'s Watches', isLink: true },
      { title: 'Women\'s Watches', isLink: true },
      { title: 'Premium Watches', isLink: true },
      { title: 'Deals on Watches', isLink: true },
      { title: 'Eyewear', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'Men\'s Sunglasses', isLink: true },
      { title: 'Women\'s Sunglasses', isLink: true },
    ] }
  },
  { title: 'Car Electronic & GPS', classes: [''], hasDropdown: true, url: '',
    imgUrl: '../../../assets/images/megamenu-3.png',
    submenu: { submenuGroups: [
      { title: 'Car & Motorbike', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'All Cars & Bikes', isLink: true },
      { title: 'Car & Bike Care', isLink: true },
      { title: 'Lubricants', isLink: true },
      { title: 'Shop for Bike', classes: ['highlight'], isLink: false },
      { title: 'Helmet & Gloves', isLink: true },
      { title: 'Bike Parts', isLink: true },
      { title: 'Industrial Supplies', classes: ['highlight'], isLink: false },
      { title: 'All Industrial Supplies', isLink: true },
      { title: 'Lab & Scientific', isLink: true }
    ] }
  },
  { title: 'Printers & Ink', classes: [''], hasDropdown: true, url: '',
    submenu: { submenuGroups: [
      { title: 'Cases', isLink: true },
      { title: 'Chargers', isLink: true },
      { title: 'Headphone Accessories', isLink: true },
      { title: 'Headphone Cases', isLink: true },
      { title: 'Headphones', isLink: true },
      { title: 'Computer Accessories', isLink: true },
      { title: 'Laptop Accessories', isLink: true }
    ] }
  },
  { title: 'Software', classes: [''], hasDropdown: true, url: '',
    submenu: { submenuGroups: [
      { title: 'Cases', isLink: true },
      { title: 'Chargers', isLink: true },
      { title: 'Headphone Accessories', isLink: true },
      { title: 'Headphone Cases', isLink: true },
      { title: 'Headphones', isLink: true },
      { title: 'Computer Accessories', isLink: true },
      { title: 'Laptop Accessories', isLink: true }
    ] }
  },
  { title: 'Office Supplies', classes: [''], hasDropdown: true, url: '',
    submenu: { submenuGroups: [
      { title: 'Cases', isLink: true },
      { title: 'Chargers', isLink: true },
      { title: 'Headphone Accessories', isLink: true },
      { title: 'Headphone Cases', isLink: true },
      { title: 'Headphones', isLink: true },
      { title: 'Computer Accessories', isLink: true },
      { title: 'Laptop Accessories', isLink: true }
    ] }
  },
  { title: 'Computer Components', classes: [''], hasDropdown: true, url: '',
    submenu: { submenuGroups: [
      { title: 'Cases', isLink: true },
      { title: 'Chargers', isLink: true },
      { title: 'Headphone Accessories', isLink: true },
      { title: 'Headphone Cases', isLink: true },
      { title: 'Headphones', isLink: true },
      { title: 'Computer Accessories', isLink: true },
      { title: 'Laptop Accessories', isLink: true }
    ] }
  },
  { title: 'PC Gaming Headsets', classes: [''], hasDropdown: true, url: '',
    submenu: { submenuGroups: [
      { title: 'Cases', isLink: true },
      { title: 'Chargers', isLink: true },
      { title: 'Headphone Accessories', isLink: true },
      { title: 'Headphone Cases', isLink: true },
      { title: 'Headphones', isLink: true },
      { title: 'Computer Accessories', isLink: true },
      { title: 'Laptop Accessories', isLink: true }
    ] }
  },
  // { title: 'Smart TVs', classes: [''], hasDropdown: true, url: '',
  //   submenu: { submenuGroups: [
  //     { title: 'Cases', isLink: true },
  //     { title: 'Chargers', isLink: true },
  //     { title: 'Headphone Accessories', isLink: true },
  //     { title: 'Headphone Cases', isLink: true },
  //     { title: 'Headphones', isLink: true },
  //     { title: 'Computer Accessories', isLink: true },
  //     { title: 'Laptop Accessories', isLink: true }
  //   ] }
  // },
  // { title: 'Smartwatches', classes: [''], hasDropdown: true, url: '',
  //   submenu: { submenuGroups: [
  //     { title: 'Cases', isLink: true },
  //     { title: 'Chargers', isLink: true },
  //     { title: 'Headphone Accessories', isLink: true },
  //     { title: 'Headphone Cases', isLink: true },
  //     { title: 'Headphones', isLink: true },
  //     { title: 'Computer Accessories', isLink: true },
  //     { title: 'Laptop Accessories', isLink: true }
  //   ] }
  // },
  // { title: 'Accessories', classes: [''], hasDropdown: true, url: '',
  //   submenu: { submenuGroups: [
  //     { title: 'Cases', isLink: true },
  //     { title: 'Chargers', isLink: true },
  //     { title: 'Headphone Accessories', isLink: true },
  //     { title: 'Headphone Cases', isLink: true },
  //     { title: 'Headphones', isLink: true },
  //     { title: 'Computer Accessories', isLink: true },
  //     { title: 'Laptop Accessories', isLink: true }
  //   ] }
  // },
];

