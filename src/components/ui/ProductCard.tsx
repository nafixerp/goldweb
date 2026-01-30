'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Eye, ShoppingBag, MessageCircle } from 'lucide-react'
import { getProductInquiryMessage, openWhatsApp, trackWhatsAppClick } from '@/lib/whatsapp'

interface ProductCardProps {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  isBestseller?: boolean
  discount?: number
  weight?: string
}

export default function ProductCard({
  id,
  name,
  slug,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isBestseller,
  discount,
  weight,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleWhatsAppInquiry = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const message = getProductInquiryMessage({ name, price, id, category })
    trackWhatsAppClick('product_inquiry', { product_id: id, product_name: name })
    openWhatsApp(message)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {isNew && (
          <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">
            New
          </span>
        )}
        {isBestseller && (
          <span className="px-3 py-1 bg-gold-500 text-white text-xs font-medium rounded-full">
            Bestseller
          </span>
        )}
        {discount && (
          <span className="px-3 py-1 bg-maroon-500 text-white text-xs font-medium rounded-full">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Wishlist button */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
        aria-label="Add to wishlist"
      >
        <Heart
          className={`w-5 h-5 transition-colors ${
            isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'
          }`}
        />
      </button>

      {/* Image container */}
      <Link href={`/product/${slug}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={image}
            alt={name}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />

          {/* Quick actions overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
              aria-label="Quick view"
            >
              <Eye className="w-5 h-5 text-gray-700" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleWhatsAppInquiry}
              className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              aria-label="Inquire on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center shadow-lg"
              aria-label="Add to bag"
            >
              <ShoppingBag className="w-5 h-5 text-white" />
            </motion.button>
          </motion.div>
        </div>
      </Link>

      {/* Product info */}
      <div className="p-4">
        <span className="text-xs text-gold-600 uppercase tracking-wider font-medium">
          {category}
        </span>
        <Link href={`/product/${slug}`}>
          <h3 className="mt-1 text-gray-900 font-medium line-clamp-2 hover:text-gold-600 transition-colors">
            {name}
          </h3>
        </Link>

        {weight && (
          <p className="text-sm text-gray-500 mt-1">{weight}</p>
        )}

        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* WhatsApp Inquiry Button */}
        <button
          onClick={handleWhatsAppInquiry}
          className="mt-3 w-full flex items-center justify-center gap-2 py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg text-sm font-medium transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Inquire on WhatsApp
        </button>
      </div>
    </motion.div>
  )
}
