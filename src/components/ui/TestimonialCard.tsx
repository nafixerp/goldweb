'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  location: string
  avatar?: string
  rating: number
  comment: string
  productPurchased?: string
}

export default function TestimonialCard({
  name,
  location,
  avatar,
  rating,
  comment,
  productPurchased,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-luxury relative"
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
        <Quote className="w-6 h-6 text-gold-500" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'fill-gold-400 text-gold-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-600 leading-relaxed mb-6 italic">
        "{comment}"
      </p>

      {/* Product purchased */}
      {productPurchased && (
        <p className="text-sm text-gold-600 mb-4">
          Purchased: {productPurchased}
        </p>
      )}

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gold-100 overflow-hidden relative">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gold-600 font-semibold text-lg">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </motion.div>
  )
}
