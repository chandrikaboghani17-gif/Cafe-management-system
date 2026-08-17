export type MenuCategory = 'coffee' | 'espresso' | 'tea' | 'cold' | 'breakfast' | 'snacks' | 'desserts'
export type GalleryCategory = 'interior' | 'coffee' | 'food' | 'events'
export type ReservationStatus = 'pending' | 'confirmed' | 'cancelled'

export interface MenuItem {
  id: string
  name: string
  category: MenuCategory
  price: number
  description: string
  image: string
  available: boolean
  popular?: boolean
}

export interface Reservation {
  id: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  specialRequests?: string
  status: ReservationStatus
  createdAt: string
}

export interface Review {
  id: string
  name: string
  photo?: string
  rating: number
  text: string
  date: string
  verified: boolean
}

export interface GalleryImage {
  id: string
  src: string
  category: GalleryCategory
  alt: string
  title?: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  createdAt: string
  replied: boolean
}

export interface BusinessHours {
  day: string
  open: string
  close: string
  closed?: boolean
}

export interface NewsletterSubscriber {
  id: string
  email: string
  subscribedAt: string
}
