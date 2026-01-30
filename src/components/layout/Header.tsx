'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Search,
  Phone,
  ChevronDown,
  MapPin,
  Heart,
  User,
  MessageCircle
} from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Collections',
    href: '/collections',
    children: [
      { name: 'Gold Jewelry', href: '/collections/gold' },
      { name: 'Diamond Jewelry', href: '/collections/diamond' },
      { name: 'Daily Wear', href: '/collections/daily-wear' },
      { name: 'Men\'s Jewelry', href: '/collections/mens' },
      { name: 'Kids Collection', href: '/collections/kids' },
    ]
  },
  { name: 'Bridal', href: '/bridal' },
  { name: 'Custom Design', href: '/custom-design' },
  { name: 'Offers', href: '/offers' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-luxury shadow-lg' : 'bg-white'
    }`}>
      {/* Top bar */}
      <div className="hidden lg:block bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20jewelry%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ernakulam, Kerala</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gold-400">BIS Hallmarked | Certified Diamonds</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-serif font-bold text-gold-gradient">
                SEVENS GOLD
              </span>
              <span className="text-[10px] md:text-xs text-gray-500 tracking-[0.2em] uppercase">
                Since Generations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="nav-link flex items-center gap-1 py-2"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-luxury py-2 mt-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button
              className="hidden md:flex p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
            <button
              className="hidden md:flex p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5 text-gray-700" />
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 text-gray-700 hover:text-gold-600 font-medium border-b border-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-2 text-gray-600 hover:text-gold-600 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile contact info */}
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-gold-600 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 98765 43210</span>
                </a>
                <a
                  href="https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20jewelry%20collection."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
