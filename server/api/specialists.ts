import type { Specialist } from '~/components/shared/types'

export default defineEventHandler((): Specialist[] => {
  return [
    {
      id: 1,
      slug: 'rachel-tan',
      name: 'Rachel Tan',
      role: 'Lead Specialist',
      city: 'South Jakarta',
      rating: 4.9,
      jobsCompleted: 620,
      image: '/images/avatars/demo-user.jpg',
      bio: 'Rachel focuses on premium residential cleaning and structured service quality.',
      specialties: ['Deep Cleaning', 'Move-In Reset', 'Premium Home Care']
    },
    {
      id: 2,
      slug: 'noah-lee',
      name: 'Noah Lee',
      role: 'Service Coordinator',
      city: 'West Jakarta',
      rating: 4.8,
      jobsCompleted: 510,
      image: '/images/avatars/demo-user.jpg',
      bio: 'Noah coordinates fast booking execution and recurring service requests.',
      specialties: ['Office Upkeep', 'Post-Event Cleanup', 'Recurring Services']
    },
    {
      id: 3,
      slug: 'amelia-hart',
      name: 'Amelia Hart',
      role: 'Laundry Specialist',
      city: 'Central Jakarta',
      rating: 4.8,
      jobsCompleted: 430,
      image: '/images/avatars/demo-user.jpg',
      bio: 'Amelia specializes in garment handling, laundry logistics, and polished return flow.',
      specialties: ['Laundry Pickup', 'Iron & Fold', 'Garment Handling']
    }
  ]
})