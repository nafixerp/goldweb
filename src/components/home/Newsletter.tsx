'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Gift, Bell, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-20 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -left-1/4 w-80 h-80 bg-white/10 rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Join Our VIP Club
          </span>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Stay Updated with Exclusive Offers
          </h2>

          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest gold rates, new arrivals, festive offers, and insider tips delivered to your inbox.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Gift className="w-5 h-5" />
              <span>Exclusive Discounts</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Bell className="w-5 h-5" />
              <span>New Arrival Alerts</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Sparkles className="w-5 h-5" />
              <span>Daily Gold Rates</span>
            </div>
          </div>

          {/* Form */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Welcome to the Family!</h3>
              <p className="text-white/80">Check your inbox for a special welcome gift.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all"
              />
              <Button
                type="submit"
                isLoading={isSubmitting}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full"
                rightIcon={<Send className="w-4 h-4" />}
              >
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-white/70 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
