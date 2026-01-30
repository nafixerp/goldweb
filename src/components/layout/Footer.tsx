'use client'

import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle
} from 'lucide-react'

const quickLinks = [
  { name: 'Gold Jewelry', href: '/collections/gold' },
  { name: 'Diamond Jewelry', href: '/collections/diamond' },
  { name: 'Bridal Collections', href: '/bridal' },
  { name: 'Custom Design', href: '/custom-design' },
  { name: 'Offers', href: '/offers' },
]

const customerService = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Store Locator', href: '/contact#store' },
  { name: 'Jewelry Care', href: '/blog/jewelry-care' },
  { name: 'FAQs', href: '/faqs' },
]

const policies = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Return Policy', href: '/return-policy' },
  { name: 'Exchange Policy', href: '/exchange-policy' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust badges */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gold-400">BIS Hallmarked</h4>
              <p className="text-sm text-gray-400">100% Certified Gold</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gold-400">Certified Diamonds</h4>
              <p className="text-sm text-gray-400">IGI & GIA Certified</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gold-400">Best Exchange</h4>
              <p className="text-sm text-gray-400">100% Value on Old Gold</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gold-400">Expert Craftsmen</h4>
              <p className="text-sm text-gray-400">Traditional Artisans</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold-gradient mb-4">
              SEVENS GOLD
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Ernakulam's premier jewelry destination, crafting exquisite pieces that blend traditional artistry with contemporary elegance since generations.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919876543210"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Customer Service</h4>
            <ul className="space-y-3">
              {customerService.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Visit Our Showroom</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  MG Road, Ernakulam<br />
                  Kochi, Kerala - 682011
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-gold-400 text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a
                  href="https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20jewelry%20collection."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 text-sm"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@sevensgold.com" className="text-gray-400 hover:text-gold-400 text-sm">
                  info@sevensgold.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Mon - Sat: 10:00 AM - 8:00 PM<br />
                  Sunday: 11:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Sevens Gold. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {policies.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-gold-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
