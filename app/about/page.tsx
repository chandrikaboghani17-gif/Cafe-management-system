import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { BUSINESS_NAME, BUSINESS_HOURS } from '@/lib/constants'
import { Heart, Coffee, Users } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `About Us | ${BUSINESS_NAME}`,
  description: 'Learn the story behind The Coffee Corner, our values, team, and commitment to quality coffee and hospitality.',
  keywords: 'about us, coffee shop story, specialty coffee, cafe values',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
            About Us
          </h1>
          <p className="text-lg text-foreground/70">
            The story behind {BUSINESS_NAME}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              {BUSINESS_NAME} was founded with a simple vision: to create a space where exceptional coffee meets warm hospitality. What started as a passion for specialty coffee has grown into a beloved community gathering spot.
            </p>
            <p>
              We believe that great coffee deserves great care. Every cup is prepared by skilled baristas who understand that coffee is more than a beverage—it&apos;s an experience. We source our beans from sustainable, ethical suppliers around the world, ensuring quality from farm to cup.
            </p>
            <p>
              Beyond coffee, we&apos;ve crafted an environment where people feel welcomed. Whether you&apos;re here to work, meet with friends, or simply enjoy a moment of peace, {BUSINESS_NAME} is your corner of the world.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                Quality
              </h3>
              <p className="text-foreground/70">
                We never compromise on quality. Every ingredient, every technique, every detail matters.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                Community
              </h3>
              <p className="text-foreground/70">
                We&apos;re more than a cafe—we&apos;re a gathering place for our community to connect and thrive.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                Hospitality
              </h3>
              <p className="text-foreground/70">
                Genuine warmth and care define how we treat every guest who walks through our doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
            Hours of Operation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BUSINESS_HOURS.map(day => (
              <div key={day.day} className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                <span className="font-semibold text-foreground">{day.day}</span>
                <span className="text-foreground/70">
                  {day.closed ? 'Closed' : `${day.open} - ${day.close}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
            Passionate individuals dedicated to creating exceptional experiences for every guest
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-lg overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    Team Member {i}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-3">
                    Specialty Role
                  </p>
                  <p className="text-foreground/70 text-sm">
                    Bringing passion and expertise to every interaction with our guests.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
