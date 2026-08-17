import Link from 'next/link'
import { BUSINESS_NAME, CONTACT_INFO, BUSINESS_HOURS, SOCIAL_LINKS } from '@/lib/constants'
import { Mail, Share2, ExternalLink } from 'lucide-react'

export function Footer() {
  const today = new Date().getDay()
  const todayHours = BUSINESS_HOURS[today === 0 ? 6 : today - 1]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-2">{BUSINESS_NAME}</h3>
            <p className="text-sm text-primary-foreground/80">
              Premium coffee and cafe experience in the heart of the city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:underline">Menu</Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:underline">Reservations</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Hours Today</h4>
            <p className="text-sm">
              {todayHours.day}
            </p>
            <p className="text-sm">
              {todayHours.closed ? 'Closed' : `${todayHours.open} - ${todayHours.close}`}
            </p>
            <Link href="/contact" className="text-sm hover:underline mt-2 block">
              View full hours →
            </Link>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-sm mb-4">
              <p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:underline">
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-80" aria-label="Instagram">
                <Share2 className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-80" aria-label="Facebook">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:opacity-80" aria-label="Twitter">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
