'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Star, Sparkles, Calendar } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ProductCard from '@/components/ui/ProductCard'
import TestimonialCard from '@/components/ui/TestimonialCard'

const bridalSets = [
  {
    id: '1',
    name: 'Royal Temple Bridal Set',
    slug: 'royal-temple-bridal-set',
    price: 850000,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    category: 'Complete Set',
    weight: '180 grams',
  },
  {
    id: '2',
    name: 'Diamond Kundan Choker Set',
    slug: 'diamond-kundan-choker',
    price: 650000,
    originalPrice: 720000,
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80',
    category: 'Necklace Set',
    discount: 10,
    weight: '120 grams',
  },
  {
    id: '3',
    name: 'Traditional Maang Tikka Set',
    slug: 'traditional-maang-tikka',
    price: 185000,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
    category: 'Hair Jewelry',
    isNew: true,
    weight: '45 grams',
  },
  {
    id: '4',
    name: 'Bridal Haaram Collection',
    slug: 'bridal-haaram-collection',
    price: 425000,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    category: 'Long Necklace',
    isBestseller: true,
    weight: '95 grams',
  },
]

const lookbooks = [
  {
    title: 'South Indian Bride',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
    products: ['Temple Jewelry', 'Gold Haaram', 'Jhumkas'],
  },
  {
    title: 'Contemporary Elegance',
    image: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=600&q=80',
    products: ['Diamond Set', 'Pearl Studs', 'Choker'],
  },
  {
    title: 'Fusion Bride',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80',
    products: ['Kundan Set', 'Polki Bangles', 'Nose Ring'],
  },
]

const testimonials = [
  {
    name: 'Anjali Krishnan',
    location: 'Ernakulam',
    rating: 5,
    comment: 'My bridal set from Sevens Gold was the highlight of my wedding. The craftsmanship was exquisite and the team helped me customize every detail. Received so many compliments!',
    productPurchased: 'Royal Temple Bridal Set',
  },
  {
    name: 'Meera Nair',
    location: 'Thrissur',
    rating: 5,
    comment: 'The personal consultation service made my bridal shopping experience stress-free. They understood exactly what I wanted and delivered beyond expectations.',
    productPurchased: 'Diamond Kundan Collection',
  },
]

export default function BridalPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Bridal Jewelry"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl text-white"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/20 backdrop-blur-sm rounded-full text-gold-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Bridal Collection 2025
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
                Your Perfect Bridal Jewelry Awaits
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                Curated collections for the modern bride, blending traditional elegance with contemporary design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#collections" className="btn-primary">
                  Explore Collections
                </Link>
                <Link href="/contact" className="btn-secondary text-white border-white hover:bg-white hover:text-gray-900">
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bridal Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: 'Personal Consultation',
                description: 'One-on-one sessions with our bridal jewelry experts',
              },
              {
                icon: Heart,
                title: 'Custom Designs',
                description: 'Create your dream jewelry with our master craftsmen',
              },
              {
                icon: Star,
                title: 'Bridal Packages',
                description: 'Complete sets curated for different wedding occasions',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-ivory-50 rounded-2xl"
              >
                <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Collections */}
      <section id="collections" className="section bg-ivory-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Curated Bridal Sets"
            subtitle="Handpicked collections designed for your special day"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {bridalSets.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/collections?category=bridal" className="btn-secondary">
              View All Bridal Jewelry
            </Link>
          </div>
        </div>
      </section>

      {/* Wedding Lookbook */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Wedding Lookbook"
            subtitle="Get inspired by our curated bridal looks"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {lookbooks.map((look, index) => (
              <motion.div
                key={look.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={look.image}
                    alt={look.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-serif font-bold text-white mb-2">
                      {look.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {look.products.map((product) => (
                        <span
                          key={product}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gradient-to-b from-ivory-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Happy Brides"
            subtitle="Stories from our beautiful brides"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-maroon-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-gold-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Begin Your Bridal Journey
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a private consultation with our bridal jewelry experts.
              Let us help you find or create the perfect pieces for your special day.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-maroon-500 px-8 py-4 rounded-full font-medium hover:bg-gold-400 hover:text-white transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
