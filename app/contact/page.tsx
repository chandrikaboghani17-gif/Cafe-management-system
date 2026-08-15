import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { CONTACT_INFO, BUSINESS_HOURS, BUSINESS_NAME, SOCIAL_LINKS } from '@/lib/constants'
import { MapPin, Phone, Mail, Clock, ExternalLink, Share2 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Contact Us | ${BUSINESS_NAME}`,
  description: 'Get in touch with The Coffee Corner. Visit us, call, email, or send us a message. We love hearing from our guests!',
  keywords: 'contact us, coffee shop location, phone number, email, contact form',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
            Get In Touch
          </h1>
          <p className="text-lg text-foreground/70">
            We&apos;d love to hear from you. Contact us anytime.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                Contact Information
              </h2>

              {/* Address */}
              <div className="flex gap-4 mb-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Address</h3>
                  <p className="mt-1 text-foreground/70">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 mb-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="mt-1 text-primary hover:underline"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 mb-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email</h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="mt-1 text-primary hover:underline"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Hours</h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    {BUSINESS_HOURS.map(day => (
                      <div key={day.day} className="flex justify-between min-w-48">
                        <span className="font-medium">{day.day}</span>
                        <span>{day.closed ? 'Closed' : `${day.open} - ${day.close}`}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-accent hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Share2 className="w-6 h-6" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-accent hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-accent hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Share2 className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Find Us
          </h2>
          <div className="w-full h-96 bg-muted rounded-lg overflow-hidden">
            <iframe
              src={CONTACT_INFO.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Coffee Corner Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
