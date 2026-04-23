// shared/types.ts

export type ServiceCategory =
  | 'home-care'
  | 'laundry'
  | 'deep-cleaning'
  | 'business'
  | 'specialty'

export type Service = {
  id: number
  slug: string
  title: string
  category: ServiceCategory
  description: string
  longDescription: string
  priceFrom: number
  rating: number
  duration: string
  image: string
  tags: string[]
  features: string[]
}

export type Specialist = {
  id: number
  slug: string
  name: string
  role: string
  city: string
  rating: number
  jobsCompleted: number
  image: string
  bio: string
  specialties: string[]
}

export type Insight = {
  id: number
  slug: string
  title: string
  category: string
  readTime: string
  description: string
  body: string[]
  image: string
}