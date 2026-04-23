export default defineEventHandler(() => {
  return [
    {
      id: 'BK-1001',
      service: 'Deep Cleaning',
      status: 'Confirmed',
      date: '24 Apr 2026',
      time: '09:00',
      price: 650000
    },
    {
      id: 'BK-1002',
      service: 'Laundry Pickup',
      status: 'In Progress',
      date: '22 Apr 2026',
      time: '14:00',
      price: 50000
    },
    {
      id: 'BK-1003',
      service: 'Home Cleaning',
      status: 'Completed',
      date: '20 Apr 2026',
      time: '10:30',
      price: 250000
    }
  ]
})