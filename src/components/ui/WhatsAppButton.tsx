'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Clock } from 'lucide-react'

interface WhatsAppConfig {
  phoneNumber: string
  defaultMessage?: string
  businessName?: string
  businessHours?: {
    start: number // 24hr format
    end: number
  }
}

const config: WhatsAppConfig = {
  phoneNumber: '919876543210', // India country code + number
  defaultMessage: 'Hi! I am interested in your jewelry collection. Can you help me?',
  businessName: 'Sevens Gold',
  businessHours: {
    start: 10, // 10 AM
    end: 20,   // 8 PM
  },
}

const quickMessages = [
  { id: 1, label: 'Product Inquiry', message: 'Hi! I would like to inquire about a product I saw on your website.' },
  { id: 2, label: 'Book Appointment', message: 'Hi! I would like to book an appointment to visit your showroom.' },
  { id: 3, label: 'Gold Rate', message: 'Hi! What is today\'s gold rate for 22K and 24K?' },
  { id: 4, label: 'Custom Design', message: 'Hi! I am interested in getting a custom jewelry piece designed.' },
  { id: 5, label: 'Order Status', message: 'Hi! I would like to check the status of my order.' },
]

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Check if within business hours
    const checkBusinessHours = () => {
      const now = new Date()
      const hour = now.getHours()
      const { start, end } = config.businessHours!
      setIsOnline(hour >= start && hour < end)
    }

    checkBusinessHours()
    const interval = setInterval(checkBusinessHours, 60000) // Check every minute

    // Show tooltip after 5 seconds on first visit
    const tooltipTimer = setTimeout(() => {
      const hasSeenTooltip = localStorage.getItem('whatsapp_tooltip_seen')
      if (!hasSeenTooltip) {
        setShowTooltip(true)
        localStorage.setItem('whatsapp_tooltip_seen', 'true')
        setTimeout(() => setShowTooltip(false), 5000)
      }
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const openWhatsApp = (message?: string) => {
    const text = encodeURIComponent(message || config.defaultMessage || '')
    const url = `https://wa.me/${config.phoneNumber}?text=${text}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="absolute bottom-full right-0 mb-3 bg-white rounded-xl shadow-2xl p-4 w-64"
            >
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="text-sm text-gray-700">
                👋 Need help? Chat with us on WhatsApp for instant assistance!
              </p>
              <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{config.businessName}</h3>
                    <div className="flex items-center gap-2 text-sm text-green-100">
                      <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-300' : 'bg-gray-300'}`} />
                      {isOnline ? 'Online now' : 'Currently offline'}
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/10 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Chat Body */}
              <div className="p-4">
                {/* Welcome message */}
                <div className="bg-gray-100 rounded-xl rounded-tl-none p-3 mb-4 max-w-[85%]">
                  <p className="text-sm text-gray-700">
                    Hello! 👋 Welcome to Sevens Gold. How can we assist you today?
                  </p>
                  <span className="text-xs text-gray-400 mt-1 block">Just now</span>
                </div>

                {/* Business hours notice */}
                {!isOnline && (
                  <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-lg mb-4 text-sm">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span className="text-amber-700">
                      We're offline now. We'll respond during business hours (10 AM - 8 PM).
                    </span>
                  </div>
                )}

                {/* Quick messages */}
                <p className="text-xs text-gray-500 mb-2 font-medium">Quick Messages:</p>
                <div className="space-y-2">
                  {quickMessages.map((msg) => (
                    <button
                      key={msg.id}
                      onClick={() => openWhatsApp(msg.message)}
                      className="w-full text-left px-3 py-2 text-sm bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors"
                    >
                      {msg.label}
                    </button>
                  ))}
                </div>

                {/* Custom message input */}
                <div className="mt-4 pt-4 border-t">
                  <button
                    onClick={() => openWhatsApp()}
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Start Chat
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
            isOpen ? 'bg-gray-700' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Online indicator */}
          {!isOpen && isOnline && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse" />
          )}
        </motion.button>
      </div>
    </>
  )
}
