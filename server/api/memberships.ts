export default defineEventHandler(() => {
  return [
    {
      id: 1,
      name: 'Soft Start',
      subtitle: 'For occasional users',
      price: 'Rp 49.000 / month',
      highlight: false,
      features: ['Priority booking slot access', 'Member-only offers', 'Faster checkout flow']
    },
    {
      id: 2,
      name: 'Pastel Plus',
      subtitle: 'For repeat users',
      price: 'Rp 99.000 / month',
      highlight: true,
      features: ['Everything in Soft Start', 'Extra member discounts', 'Preferred specialist requests']
    },
    {
      id: 3,
      name: 'Studio Circle',
      subtitle: 'For premium households',
      price: 'Rp 179.000 / month',
      highlight: false,
      features: ['Everything in Pastel Plus', 'Priority assistance', 'Better recurring booking benefits']
    }
  ]
})