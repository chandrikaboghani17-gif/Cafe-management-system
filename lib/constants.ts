import type { BusinessHours } from './types'

export const BUSINESS_NAME = 'The Coffee Corner'
export const BUSINESS_DESCRIPTION = 'Premium cafe experience with specialty coffee and delicious pastries'

export const BUSINESS_HOURS: BusinessHours[] = [
  { day: 'Monday', open: '07:00', close: '20:00' },
  { day: 'Tuesday', open: '07:00', close: '20:00' },
  { day: 'Wednesday', open: '07:00', close: '20:00' },
  { day: 'Thursday', open: '07:00', close: '20:00' },
  { day: 'Friday', open: '07:00', close: '21:00' },
  { day: 'Saturday', open: '08:00', close: '21:00' },
  { day: 'Sunday', open: '08:00', close: '19:00' },
]

export const CONTACT_INFO = {
  email: 'hello@thecoffeecorner.com',
  phone: '+1 (555) 123-4567',
  address: '123 Coffee Street, Brew City, BC 12345',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00601!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDC41XCsSc0Ni4wMCJOIDc0wrAwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890'
}

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/thecoffeecorner',
  facebook: 'https://facebook.com/thecoffeecorner',
  twitter: 'https://twitter.com/thecoffeecorner',
  tiktok: 'https://tiktok.com/@thecoffeecorner'
}

export const MENU_CATEGORIES = [
  { value: 'coffee', label: 'Coffee' },
  { value: 'espresso', label: 'Espresso' },
  { value: 'tea', label: 'Tea' },
  { value: 'cold', label: 'Cold Drinks' },
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'snacks', label: 'Snacks' },
  { value: 'desserts', label: 'Desserts' },
]

export const GALLERY_CATEGORIES = [
  { value: 'interior', label: 'Interior' },
  { value: 'coffee', label: 'Coffee' },
  { value: 'food', label: 'Food' },
  { value: 'events', label: 'Events' },
]

export const RESERVATION_TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'
]

export const GUEST_COUNTS = [
  { value: '1', label: '1 Guest' },
  { value: '2', label: '2 Guests' },
  { value: '3', label: '3 Guests' },
  { value: '4', label: '4 Guests' },
  { value: '5', label: '5 Guests' },
  { value: '6', label: '6 Guests' },
  { value: '7', label: '7 Guests' },
  { value: '8', label: '8+ Guests' },
]
