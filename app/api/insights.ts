import type { Insight } from '~/components/shared/types'

export default defineEventHandler((): Insight[] => {
  return [
    {
      id: 1,
      slug: 'choose-the-right-service',
      title: 'How to choose the right service for your space',
      category: 'Guide',
      readTime: '5 min read',
      description: 'A cleaner onboarding article for first-time users who need clarity before booking.',
      image: '/images/hero/tidy-hero-1.jpg',
      body: [
        'Not every service should feel identical. Routine care, deep resets, and specialty work all carry different expectations.',
        'A better product explains where each service fits instead of forcing the user to guess.',
        'This is why category clarity matters in the interface.'
      ]
    },
    {
      id: 2,
      slug: 'what-makes-booking-trustworthy',
      title: 'What makes a premium booking experience feel trustworthy',
      category: 'Insight',
      readTime: '4 min read',
      description: 'A more editorial content card that makes the product feel thoughtful and mature.',
      image: '/images/hero/tidy-hero-2.jpg',
      body: [
        'Trust is often built through clarity, not volume.',
        'Users feel more secure when pricing, duration, and process cues are visible early.',
        'A premium interface should reduce doubt, not simply add visual gloss.'
      ]
    },
    {
      id: 3,
      slug: 'why-detail-pages-matter',
      title: 'Why service detail pages matter more than feature lists',
      category: 'Design',
      readTime: '6 min read',
      description: 'Content that helps the app feel more like a brand and less like a mockup.',
      image: '/images/hero/tidy-hero-3.jpg',
      body: [
        'Flat service listings are rarely enough to support confident decisions.',
        'Detail pages give room for storytelling, process explanation, and trust signals.',
        'That depth is what makes a product surface feel believable.'
      ]
    },
    {
      id: 4,
      slug: 'designing-for-repeat-bookings',
      title: 'Designing for repeat bookings without making the UI heavy',
      category: 'Product',
      readTime: '5 min read',
      description: 'A practical look at how recurring service experiences should feel faster over time.',
      image: '/images/hero/tidy-hero-1.jpg',
      body: [
        'Returning users should not feel like they are starting from zero each time.',
        'Saved addresses, repeated notes, and faster confirmations all reduce friction.',
        'The best recurring flows feel invisible.'
      ]
    }
  ]
})