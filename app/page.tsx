import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { MenuCard } from '@/components/MenuCard'
import { TestimonialCard } from '@/components/TestimonialCard'
import { GalleryGrid } from '@/components/GalleryGrid'
import { NewsletterForm } from '@/components/NewsletterForm'
import { menuItems, reviews, galleryImages } from '@/lib/data'
import { BUSINESS_NAME, CONTACT_INFO } from '@/lib/constants'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${BUSINESS_NAME} | Premium Coffee & Cafe Experience`,
  description: 'Discover exceptional specialty coffee, artisan pastries, and a welcoming atmosphere at The Coffee Corner. Perfect for coffee lovers and social gatherings.',
  keywords: 'specialty coffee, cafe, pastries, breakfast, coffee shop, premium coffee',
  openGraph: {
    title: BUSINESS_NAME,
    description: 'Premium coffee, pastries, and a welcoming community',
    type: 'website',
  },
}

export default function Home() {
  const featuredMenu = menuItems.filter(item => item.popular).slice(0, 6)
  const galleryFeatured = galleryImages.slice(0, 6)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Featured Menu Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Popular Items
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover our most loved menu items, crafted with premium ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMenu.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/menu"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Our Space
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Experience the warmth and elegance of {BUSINESS_NAME}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryFeatured.map(image => (
              <div key={image.id} className="bg-muted rounded-lg overflow-hidden h-48">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-4xl">
                  📸
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Join thousands of satisfied coffee lovers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map(review => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Make a reservation or visit us today. We&apos;re open daily for your favorite coffee and pastries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Make a Reservation
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-foreground/70">
              Subscribe to our newsletter for special offers and new menu announcements
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
