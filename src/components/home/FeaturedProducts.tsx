'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import ProductCard from '@/components/ui/ProductCard'

const tabs = ['All', 'Gold', 'Diamond', 'Bridal', 'New Arrivals']

const products = [
  {
    id: '1',
    name: 'Traditional Kerala Necklace Set',
    slug: 'traditional-kerala-necklace',
    price: 185000,
    originalPrice: 195000,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    category: 'Gold',
    isNew: true,
    weight: '45.5 grams',
  },
  {
    id: '2',
    name: 'Diamond Solitaire Ring',
    slug: 'diamond-solitaire-ring',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    category: 'Diamond',
    isBestseller: true,
    weight: '3.2 grams',
  },
  {
    id: '3',
    name: 'Bridal Temple Choker',
    slug: 'bridal-temple-choker',
    price: 320000,
    originalPrice: 350000,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    category: 'Bridal',
    discount: 9,
    weight: '85 grams',
  },
  {
    id: '4',
    name: 'Daily Wear Gold Chain',
    slug: 'daily-wear-gold-chain',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&q=80',
    category: 'Gold',
    weight: '12.5 grams',
  },
  {
    id: '5',
    name: 'Diamond Pendant Set',
    slug: 'diamond-pendant-set',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1599459183200-59c3f8f1e8c5?w=600&q=80',
    category: 'Diamond',
    isNew: true,
    weight: '8.5 grams',
  },
  {
    id: '6',
    name: 'Antique Gold Bangles',
    slug: 'antique-gold-bangles',
    price: 98000,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    category: 'Gold',
    isBestseller: true,
    weight: '28 grams',
  },
  {
    id: '7',
    name: 'Bridal Diamond Earrings',
    slug: 'bridal-diamond-earrings',
    price: 185000,
    originalPrice: 200000,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    category: 'Bridal',
    discount: 8,
    weight: '15 grams',
  },
  {
    id: '8',
    name: 'Men\'s Gold Bracelet',
    slug: 'mens-gold-bracelet',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
    category: 'Gold',
    isNew: true,
    weight: '18 grams',
  },
]

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('All')

  const filteredProducts = products.filter((product) => {
    if (activeTab === 'All') return true
    if (activeTab === 'New Arrivals') return product.isNew
    return product.category === activeTab
  })

  return (
    <section className="section bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Featured Collections"
          subtitle="Explore our handpicked selection of exquisite jewelry pieces crafted with precision and love"
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-10 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gold-500 text-white shadow-gold'
                  : 'bg-white text-gray-600 hover:bg-gold-50 hover:text-gold-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>

        {/* View all button */}
        <div className="text-center mt-12">
          <a
            href="/collections"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Collections
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      </div>
    </section>
  )
}
