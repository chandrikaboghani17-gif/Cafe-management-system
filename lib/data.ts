import type { MenuItem, Review, GalleryImage } from './types'

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: '1',
    name: 'Espresso',
    category: 'espresso',
    price: 3.50,
    description: 'Rich and intense single or double shot of freshly pulled espresso',
    image: '/images/espresso.png',
    available: true,
    popular: true
  },
  {
    id: '2',
    name: 'Cappuccino',
    category: 'coffee',
    price: 4.50,
    description: 'Smooth blend of espresso, steamed milk, and velvety milk foam',
    image: '/images/cappuccino.png',
    available: true,
    popular: true
  },
  {
    id: '3',
    name: 'Latte',
    category: 'coffee',
    price: 4.75,
    description: 'Creamy and comforting espresso with steamed milk',
    image: '/images/latte.png',
    available: true
  },
  {
    id: '4',
    name: 'Americano',
    category: 'espresso',
    price: 3.75,
    description: 'Bold espresso shots topped with hot water for a full-bodied flavor',
    image: '/images/americano.jpg',
    available: true
  },
  {
    id: '5',
    name: 'Macchiato',
    category: 'espresso',
    price: 4.25,
    description: 'Espresso marked with a dollop of milk foam',
    image: '/images/macchiato.jpg',
    available: true
  },
  {
    id: '6',
    name: 'Mocha',
    category: 'coffee',
    price: 5.00,
    description: 'Perfect blend of espresso, steamed milk, and rich chocolate',
    image: '/images/mocha.jpg',
    available: true,
    popular: true
  },

  // Cold Drinks
  {
    id: '7',
    name: 'Iced Coffee',
    category: 'cold',
    price: 4.25,
    description: 'Chilled freshly brewed coffee served over ice',
    image: '/images/iced-coffee.jpg',
    available: true
  },
  {
    id: '8',
    name: 'Cold Brew',
    category: 'cold',
    price: 4.75,
    description: 'Smooth and naturally sweet cold brew concentrate',
    image: '/images/cold-brew.jpg',
    available: true,
    popular: true
  },
  {
    id: '9',
    name: 'Iced Latte',
    category: 'cold',
    price: 4.75,
    description: 'Creamy iced espresso with cold milk',
    image: '/images/iced-latte.jpg',
    available: true
  },

  // Tea
  {
    id: '10',
    name: 'Chamomile Tea',
    category: 'tea',
    price: 3.50,
    description: 'Soothing herbal tea perfect for relaxation',
    image: '/images/chamomile.jpg',
    available: true
  },
  {
    id: '11',
    name: 'Earl Grey',
    category: 'tea',
    price: 3.75,
    description: 'Classic black tea with bergamot essence',
    image: '/images/earl-grey.jpg',
    available: true
  },
  {
    id: '12',
    name: 'Green Tea',
    category: 'tea',
    price: 3.75,
    description: 'Fresh and light green tea with natural antioxidants',
    image: '/images/green-tea.jpg',
    available: true
  },

  // Breakfast
  {
    id: '13',
    name: 'Croissant',
    category: 'breakfast',
    price: 3.99,
    description: 'Buttery and flaky French pastry',
    image: '/images/croissant.png',
    available: true,
    popular: true
  },
  {
    id: '14',
    name: 'Avocado Toast',
    category: 'breakfast',
    price: 8.99,
    description: 'Fresh avocado on artisan toast with lemon and herbs',
    image: '/images/avocado-toast.jpg',
    available: true,
    popular: true
  },
  {
    id: '15',
    name: 'Yogurt Parfait',
    category: 'breakfast',
    price: 7.99,
    description: 'Creamy yogurt layered with granola and fresh berries',
    image: '/images/yogurt-parfait.jpg',
    available: true
  },
  {
    id: '16',
    name: 'Eggs Benedict',
    category: 'breakfast',
    price: 10.99,
    description: 'Poached eggs on English muffin with hollandaise sauce',
    image: '/images/eggs-benedict.jpg',
    available: true
  },

  // Snacks
  {
    id: '17',
    name: 'Muffin',
    category: 'snacks',
    price: 4.25,
    description: 'Fresh-baked muffin in various flavors',
    image: '/images/muffin.jpg',
    available: true
  },
  {
    id: '18',
    name: 'Sandwich',
    category: 'snacks',
    price: 8.50,
    description: 'Hearty sandwich with premium ingredients',
    image: '/images/sandwich.jpg',
    available: true
  },
  {
    id: '19',
    name: 'Cookie',
    category: 'snacks',
    price: 2.75,
    description: 'Homemade cookie - chocolate chip or oatmeal',
    image: '/images/cookie.jpg',
    available: true
  },

  // Desserts
  {
    id: '20',
    name: 'Chocolate Cake',
    category: 'desserts',
    price: 5.99,
    description: 'Rich and decadent chocolate cake',
    image: '/images/chocolate-cake.jpg',
    available: true,
    popular: true
  },
  {
    id: '21',
    name: 'Cheesecake',
    category: 'desserts',
    price: 6.99,
    description: 'Creamy New York style cheesecake',
    image: '/images/cheesecake.jpg',
    available: true
  },
  {
    id: '22',
    name: 'Tiramisu',
    category: 'desserts',
    price: 5.99,
    description: 'Classic Italian dessert with mascarpone and espresso',
    image: '/images/tiramisu.jpg',
    available: true
  },
]

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    photo: '/images/avatar-1.jpg',
    rating: 5,
    text: 'The Coffee Corner has become my daily go-to place! The baristas are incredibly skilled and always remember my order. Their specialty drinks are absolutely delicious.',
    date: '2024-05-15',
    verified: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    photo: '/images/avatar-2.jpg',
    rating: 5,
    text: 'Outstanding atmosphere and excellent coffee quality. The pastries are fresh and the prices are fair. Highly recommended for anyone looking for a premium cafe experience.',
    date: '2024-05-10',
    verified: true
  },
  {
    id: '3',
    name: 'Emma Williams',
    photo: '/images/avatar-3.jpg',
    rating: 5,
    text: 'Love the cozy vibes and the attention to detail in every cup of coffee. The staff is friendly and efficient. This is definitely the best cafe in town!',
    date: '2024-05-05',
    verified: true
  },
  {
    id: '4',
    name: 'David Brown',
    rating: 4,
    text: 'Great coffee and wonderful space for working or meeting friends. A bit pricey but worth it for the quality.',
    date: '2024-04-28',
    verified: true
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    photo: '/images/avatar-4.jpg',
    rating: 5,
    text: 'The breakfast menu is fantastic! Everything is fresh and made with care. The cold brew is my new favorite. Will definitely be coming back!',
    date: '2024-04-20',
    verified: true
  },
]

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery-interior-1.png',
    category: 'interior',
    alt: 'Modern cafe interior with wooden furniture',
    title: 'Cozy Seating Area'
  },
  {
    id: '2',
    src: '/images/gallery-coffee-1.jpg',
    category: 'coffee',
    alt: 'Latte art on cappuccino',
    title: 'Artisan Coffee'
  },
  {
    id: '3',
    src: '/images/gallery-food-1.jpg',
    category: 'food',
    alt: 'Fresh pastries and breakfast items',
    title: 'Breakfast Selection'
  },
  {
    id: '4',
    src: '/images/gallery-interior-2.jpg',
    category: 'interior',
    alt: 'Bright cafe space with large windows',
    title: 'Natural Light'
  },
  {
    id: '5',
    src: '/images/gallery-events-1.jpg',
    category: 'events',
    alt: 'Live music event at the cafe',
    title: 'Live Music Nights'
  },
  {
    id: '6',
    src: '/images/gallery-coffee-2.jpg',
    category: 'coffee',
    alt: 'Espresso machine and barista preparing coffee',
    title: 'Coffee Preparation'
  },
  {
    id: '7',
    src: '/images/gallery-food-2.jpg',
    category: 'food',
    alt: 'Avocado toast and cold brew',
    title: 'Lunch Special'
  },
  {
    id: '8',
    src: '/images/gallery-interior-3.jpg',
    category: 'interior',
    alt: 'Counter area with pastry display',
    title: 'Service Counter'
  },
]
