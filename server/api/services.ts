export default defineEventHandler(() => {
  return [
    {
      id: 1,
      slug: 'home-cleaning',
      title: 'Home Cleaning',
      description: 'Reliable, premium cleaning for modern homes.',
      priceFrom: 250000,
      rating: 4.9
    },
    {
      id: 2,
      slug: 'laundry-pickup',
      title: 'Laundry Pickup',
      description: 'Fast pickup and neatly finished garments.',
      priceFrom: 50000,
      rating: 4.8
    },
    {
      id: 3,
      slug: 'deep-cleaning',
      title: 'Deep Cleaning',
      description: 'A complete reset for move-ins, seasonal cleaning, and intensive care.',
      priceFrom: 650000,
      rating: 4.9
    }
  ]
})