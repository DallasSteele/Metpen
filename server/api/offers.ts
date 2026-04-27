export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Spring Home Refresh',
      subtitle: 'Save on selected premium services',
      badge: 'Limited',
      discount: 'Up to 25% off',
      image: '/images/hero/tidy-hero-1.jpg',
      tone: 'pink'
    },
    {
      id: 2,
      title: 'Laundry Week',
      subtitle: 'Pickup services with better bundle value',
      badge: 'Popular',
      discount: 'Bundle savings',
      image: '/images/hero/tidy-hero-2.jpg',
      tone: 'blue'
    },
    {
      id: 3,
      title: 'Move-In Reset',
      subtitle: 'A softer launch promo for bigger reset services',
      badge: 'New',
      discount: 'Extra perks',
      image: '/images/hero/tidy-hero-3.jpg',
      tone: 'mint'
    }
  ]
})