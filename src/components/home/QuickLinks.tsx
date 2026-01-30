'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Gold Jewelry',
    href: '/collections/gold',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
    description: '22K & 24K Pure Gold',
  },
  {
    name: 'Diamond Jewelry',
    href: '/collections/diamond',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
    description: 'IGI & GIA Certified',
  },
  {
    name: 'Bridal Collections',
    href: '/bridal',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80',
    description: 'Wedding Essentials',
  },
  {
    name: 'Custom Designs',
    href: '/custom-design',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    description: 'Bespoke Creations',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function QuickLinks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={item}>
              <Link href={category.href}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
                  {/* Background image */}
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                    <h3 className="text-white font-serif font-bold text-lg md:text-xl mb-1">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {category.description}
                    </p>

                    {/* Hover indicator */}
                    <motion.div
                      className="mt-3 flex items-center gap-2 text-gold-400 text-sm font-medium"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span>Explore</span>
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
