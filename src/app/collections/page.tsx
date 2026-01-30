'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Filter,
  X,
  ChevronDown,
  SlidersHorizontal,
  Grid,
  LayoutGrid
} from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'

const categories = [
  { id: 'all', name: 'All Collections' },
  { id: 'gold', name: 'Gold Jewelry' },
  { id: 'diamond', name: 'Diamond Jewelry' },
  { id: 'bridal', name: 'Bridal' },
  { id: 'daily-wear', name: 'Daily Wear' },
  { id: 'mens', name: "Men's Jewelry" },
]

const metalTypes = [
  { id: '22k-gold', name: '22K Gold' },
  { id: '24k-gold', name: '24K Gold' },
  { id: '18k-gold', name: '18K Gold' },
  { id: 'diamond', name: 'Diamond' },
  { id: 'platinum', name: 'Platinum' },
]

const priceRanges = [
  { id: 'under-50k', name: 'Under ₹50,000', min: 0, max: 50000 },
  { id: '50k-1l', name: '₹50,000 - ₹1 Lakh', min: 50000, max: 100000 },
  { id: '1l-2l', name: '₹1 Lakh - ₹2 Lakh', min: 100000, max: 200000 },
  { id: '2l-5l', name: '₹2 Lakh - ₹5 Lakh', min: 200000, max: 500000 },
  { id: 'above-5l', name: 'Above ₹5 Lakh', min: 500000, max: Infinity },
]

const sortOptions = [
  { id: 'popularity', name: 'Popularity' },
  { id: 'newest', name: 'Newest First' },
  { id: 'price-asc', name: 'Price: Low to High' },
  { id: 'price-desc', name: 'Price: High to Low' },
]

const allProducts = [
  {
    id: '1',
    name: 'Traditional Kerala Necklace Set',
    slug: 'traditional-kerala-necklace',
    price: 185000,
    originalPrice: 195000,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    category: 'gold',
    metal: '22k-gold',
    isNew: true,
    weight: '45.5 grams',
  },
  {
    id: '2',
    name: 'Diamond Solitaire Ring',
    slug: 'diamond-solitaire-ring',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    category: 'diamond',
    metal: 'diamond',
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
    category: 'bridal',
    metal: '22k-gold',
    discount: 9,
    weight: '85 grams',
  },
  {
    id: '4',
    name: 'Daily Wear Gold Chain',
    slug: 'daily-wear-gold-chain',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&q=80',
    category: 'daily-wear',
    metal: '22k-gold',
    weight: '12.5 grams',
  },
  {
    id: '5',
    name: 'Diamond Pendant Set',
    slug: 'diamond-pendant-set',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1599459183200-59c3f8f1e8c5?w=600&q=80',
    category: 'diamond',
    metal: 'diamond',
    isNew: true,
    weight: '8.5 grams',
  },
  {
    id: '6',
    name: 'Antique Gold Bangles',
    slug: 'antique-gold-bangles',
    price: 98000,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    category: 'gold',
    metal: '22k-gold',
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
    category: 'bridal',
    metal: 'diamond',
    discount: 8,
    weight: '15 grams',
  },
  {
    id: '8',
    name: "Men's Gold Bracelet",
    slug: 'mens-gold-bracelet',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
    category: 'mens',
    metal: '22k-gold',
    isNew: true,
    weight: '18 grams',
  },
  {
    id: '9',
    name: 'Platinum Love Band',
    slug: 'platinum-love-band',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1615655114865-4cc9d1f1b124?w=600&q=80',
    category: 'daily-wear',
    metal: 'platinum',
    weight: '5 grams',
  },
  {
    id: '10',
    name: '24K Gold Coin - Lakshmi',
    slug: '24k-gold-coin-lakshmi',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&q=80',
    category: 'gold',
    metal: '24k-gold',
    weight: '8 grams',
  },
  {
    id: '11',
    name: 'Diamond Tennis Bracelet',
    slug: 'diamond-tennis-bracelet',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
    category: 'diamond',
    metal: 'diamond',
    isBestseller: true,
    weight: '12 grams',
  },
  {
    id: '12',
    name: "Men's Platinum Ring",
    slug: 'mens-platinum-ring',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=600&q=80',
    category: 'mens',
    metal: 'platinum',
    isNew: true,
    weight: '8 grams',
  },
]

export default function CollectionsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedMetal, setSelectedMetal] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState('popularity')
  const [gridCols, setGridCols] = useState(4)

  const toggleMetal = (metalId: string) => {
    setSelectedMetal((prev) =>
      prev.includes(metalId)
        ? prev.filter((m) => m !== metalId)
        : [...prev, metalId]
    )
  }

  const filteredProducts = useMemo(() => {
    let products = [...allProducts]

    // Filter by category
    if (selectedCategory !== 'all') {
      products = products.filter((p) => p.category === selectedCategory)
    }

    // Filter by metal type
    if (selectedMetal.length > 0) {
      products = products.filter((p) => selectedMetal.includes(p.metal))
    }

    // Filter by price range
    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.id === selectedPriceRange)
      if (range) {
        products = products.filter(
          (p) => p.price >= range.min && p.price <= range.max
        )
      }
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        products = products.filter((p) => p.isNew).concat(products.filter((p) => !p.isNew))
        break
      case 'price-asc':
        products.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        products.sort((a, b) => b.price - a.price)
        break
      default:
        products = products.filter((p) => p.isBestseller).concat(products.filter((p) => !p.isBestseller))
    }

    return products
  }, [selectedCategory, selectedMetal, selectedPriceRange, sortBy])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMetal([])
    setSelectedPriceRange(null)
    setSortBy('popularity')
  }

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedMetal.length > 0,
    selectedPriceRange !== null,
  ].filter(Boolean).length

  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
            Our Collections
          </h1>
          <p className="text-gray-400">
            Discover our exquisite range of handcrafted jewelry
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gold-500 text-white shadow-gold'
                  : 'bg-white text-gray-600 hover:bg-gold-50 hover:text-gold-600 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-gold-500 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-gold-500 text-white text-xs rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-gold-600"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {filteredProducts.length} products
            </span>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-4 py-2 pr-10 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gold-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Grid toggle */}
            <div className="hidden md:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setGridCols(3)}
                className={`p-2 rounded ${gridCols === 3 ? 'bg-white shadow-sm' : ''}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-2 rounded ${gridCols === 4 ? 'bg-white shadow-sm' : ''}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className={`grid grid-cols-2 gap-4 md:gap-6 ${
            gridCols === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-3 lg:grid-cols-4'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  slug={product.slug}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  category={categories.find((c) => c.id === product.category)?.name || ''}
                  isNew={product.isNew}
                  isBestseller={product.isBestseller}
                  discount={product.discount}
                  weight={product.weight}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products match your filters</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-gold-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Filter Sidebar */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsFilterOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-serif font-bold flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filters
                  </h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Metal Type */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Metal Type</h3>
                  <div className="space-y-3">
                    {metalTypes.map((metal) => (
                      <label
                        key={metal.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedMetal.includes(metal.id)}
                          onChange={() => toggleMetal(metal.id)}
                          className="w-4 h-4 rounded border-gray-300 text-gold-500 focus:ring-gold-500"
                        />
                        <span className="text-gray-700">{metal.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Price Range</h3>
                  <div className="space-y-3">
                    {priceRanges.map((range) => (
                      <label
                        key={range.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="priceRange"
                          checked={selectedPriceRange === range.id}
                          onChange={() => setSelectedPriceRange(range.id)}
                          className="w-4 h-4 border-gray-300 text-gold-500 focus:ring-gold-500"
                        />
                        <span className="text-gray-700">{range.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={clearFilters}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="flex-1 px-4 py-3 bg-gold-500 text-white rounded-lg hover:bg-gold-600"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
