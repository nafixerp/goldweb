'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import TestimonialCard from '@/components/ui/TestimonialCard'

const testimonials = [
  {
    name: 'Priya Menon',
    location: 'Ernakulam',
    rating: 5,
    comment: 'The bridal set I purchased for my wedding was absolutely stunning. The craftsmanship and attention to detail exceeded all my expectations. The team was incredibly helpful throughout the entire process.',
    productPurchased: 'Bridal Temple Jewelry Set',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Kochi',
    rating: 5,
    comment: 'Best gold exchange rates in the city! I\'ve been a loyal customer for over 10 years. The transparency and trust they offer is unmatched. Highly recommend for anyone looking for quality jewelry.',
    productPurchased: 'Gold Chain & Bracelet',
  },
  {
    name: 'Lakshmi Nair',
    location: 'Thrissur',
    rating: 5,
    comment: 'Bought a beautiful diamond pendant for my daughter\'s engagement. The quality is exceptional and the price was very competitive. The certification gave us complete peace of mind.',
    productPurchased: 'Diamond Solitaire Pendant',
  },
]

export default function Testimonials() {
  return (
    <section className="section bg-gradient-to-b from-ivory-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Trusted by thousands of families across Kerala for their precious moments"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12"
        >
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
        </motion.div>
      </div>
    </section>
  )
}
