'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  BookOpen
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const categories = [
  { id: 'all', name: 'All Articles' },
  { id: 'styling', name: 'Styling Tips' },
  { id: 'care', name: 'Jewelry Care' },
  { id: 'trends', name: 'Trends' },
  { id: 'wedding', name: 'Wedding Guide' },
  { id: 'investment', name: 'Gold Investment' },
]

const blogPosts = [
  {
    id: '1',
    title: 'How to Choose the Perfect Bridal Jewelry Set',
    slug: 'how-to-choose-bridal-jewelry',
    excerpt: 'A comprehensive guide to selecting jewelry that complements your wedding attire and personal style.',
    content: '',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    category: 'wedding',
    author: 'Lakshmi Nair',
    readTime: 8,
    publishedAt: '2025-01-15',
    tags: ['bridal', 'wedding', 'gold jewelry'],
    featured: true,
  },
  {
    id: '2',
    title: '5 Essential Tips for Gold Jewelry Care',
    slug: 'gold-jewelry-care-tips',
    excerpt: 'Keep your precious gold jewelry sparkling with these expert maintenance tips and techniques.',
    content: '',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80',
    category: 'care',
    author: 'Suresh Menon',
    readTime: 5,
    publishedAt: '2025-01-10',
    tags: ['care tips', 'maintenance', 'gold'],
    featured: true,
  },
  {
    id: '3',
    title: 'Gold vs Diamond: Which is a Better Investment?',
    slug: 'gold-vs-diamond-investment',
    excerpt: 'Analyzing the pros and cons of investing in gold and diamonds for long-term wealth building.',
    content: '',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    category: 'investment',
    author: 'Rajendra Pillai',
    readTime: 10,
    publishedAt: '2025-01-05',
    tags: ['investment', 'gold', 'diamonds'],
    featured: false,
  },
  {
    id: '4',
    title: 'Jewelry Trends to Watch in 2025',
    slug: 'jewelry-trends-2025',
    excerpt: 'From minimalist designs to bold statement pieces, discover what\'s trending in jewelry this year.',
    content: '',
    image: 'https://images.unsplash.com/photo-1599459183200-59c3f8f1e8c5?w=800&q=80',
    category: 'trends',
    author: 'Priya Menon',
    readTime: 6,
    publishedAt: '2024-12-28',
    tags: ['trends', '2025', 'fashion'],
    featured: false,
  },
  {
    id: '5',
    title: 'The Art of Styling Temple Jewelry',
    slug: 'styling-temple-jewelry',
    excerpt: 'Learn how to style traditional temple jewelry for both traditional and contemporary occasions.',
    content: '',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    category: 'styling',
    author: 'Lakshmi Nair',
    readTime: 7,
    publishedAt: '2024-12-20',
    tags: ['styling', 'temple jewelry', 'traditional'],
    featured: false,
  },
  {
    id: '6',
    title: 'Understanding Diamond Certifications',
    slug: 'understanding-diamond-certifications',
    excerpt: 'Everything you need to know about GIA, IGI, and other diamond certification standards.',
    content: '',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    category: 'investment',
    author: 'Suresh Menon',
    readTime: 9,
    publishedAt: '2024-12-15',
    tags: ['diamonds', 'certification', 'GIA'],
    featured: false,
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured || selectedCategory !== 'all')

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/20 rounded-full text-gold-400 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Jewelry Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Blog & Style Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert tips on jewelry care, styling inspiration, and insights into the world of fine jewelry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 bg-white border-b sticky top-28 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gold-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gold-50 hover:text-gold-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && searchQuery === '' && (
        <section className="section bg-ivory-50">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading
              title="Featured Articles"
              subtitle="Our most popular guides and insights"
            />

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-2xl transition-shadow"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gold-500 text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {categories.find((c) => c.id === post.category)?.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} min read
                        </span>
                      </div>
                      <h2 className="text-xl font-serif font-bold mb-2 group-hover:text-gold-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-500">{post.author}</span>
                        </div>
                        <span className="text-gold-600 font-medium text-sm group-hover:underline flex items-center gap-1">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4">
          {selectedCategory === 'all' && searchQuery === '' && (
            <SectionHeading
              title="Latest Articles"
              subtitle="Stay updated with our newest content"
            />
          )}

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {(selectedCategory === 'all' && searchQuery === '' ? regularPosts : filteredPosts).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="px-2 py-1 bg-gold-50 text-gold-600 rounded-full font-medium">
                          {categories.find((c) => c.id === post.category)?.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime} min
                        </span>
                      </div>
                      <h3 className="font-serif font-bold mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{post.author}</span>
                        <span className="text-gray-400">
                          {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="mt-4 text-gold-600 font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-400 mb-6">
              Get the latest jewelry tips, trends, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold-500 text-white rounded-full font-medium hover:bg-gold-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
