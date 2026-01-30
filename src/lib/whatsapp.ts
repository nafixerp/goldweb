/**
 * WhatsApp Integration Utilities for Sevens Gold
 *
 * This module provides functions for WhatsApp integration including:
 * - Direct messaging
 * - Product sharing
 * - Appointment booking
 * - Order inquiries
 */

export const WHATSAPP_CONFIG = {
  phoneNumber: '919876543210', // Change this to your actual WhatsApp Business number
  businessName: 'Sevens Gold',
  businessHours: {
    start: 10, // 10 AM
    end: 20,   // 8 PM
  },
  responseTime: '< 5 minutes during business hours',
}

/**
 * Generate WhatsApp URL with pre-filled message
 */
export function getWhatsAppUrl(message: string, phoneNumber?: string): string {
  const phone = phoneNumber || WHATSAPP_CONFIG.phoneNumber
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encodedMessage}`
}

/**
 * Open WhatsApp chat in new window
 */
export function openWhatsApp(message: string, phoneNumber?: string): void {
  const url = getWhatsAppUrl(message, phoneNumber)
  window.open(url, '_blank', 'noopener,noreferrer')
}

/**
 * Product inquiry message template
 */
export function getProductInquiryMessage(product: {
  name: string
  price?: number
  id?: string
  category?: string
}): string {
  const priceStr = product.price
    ? `Price: ₹${product.price.toLocaleString('en-IN')}`
    : ''

  return `Hi! I'm interested in this jewelry piece:

*${product.name}*
${product.category ? `Category: ${product.category}` : ''}
${priceStr}
${product.id ? `Product ID: ${product.id}` : ''}

Can you provide more details about this item?`
}

/**
 * Share product via WhatsApp
 */
export function shareProduct(product: {
  name: string
  price?: number
  id?: string
  category?: string
  url?: string
}): void {
  const productUrl = product.url || (typeof window !== 'undefined' ? window.location.href : '')

  const message = `Check out this beautiful jewelry from Sevens Gold! ✨

*${product.name}*
${product.price ? `Price: ₹${product.price.toLocaleString('en-IN')}` : ''}

View here: ${productUrl}

#SevensGold #Jewelry #Ernakulam`

  openWhatsApp(message)
}

/**
 * Appointment booking message template
 */
export function getAppointmentMessage(details?: {
  preferredDate?: string
  preferredTime?: string
  purpose?: string
}): string {
  if (details) {
    return `Hi! I would like to book an appointment at your showroom.

📅 Preferred Date: ${details.preferredDate || 'Flexible'}
⏰ Preferred Time: ${details.preferredTime || 'Flexible'}
📋 Purpose: ${details.purpose || 'General consultation'}

Please confirm the availability.`
  }

  return `Hi! I would like to book an appointment to visit your showroom. Please let me know the available time slots.`
}

/**
 * Gold rate inquiry message
 */
export function getGoldRateMessage(): string {
  return `Hi! I would like to know today's gold rate.

Please share the rates for:
- 24K Gold (per gram)
- 22K Gold (per gram)
- 18K Gold (per gram)

Thank you!`
}

/**
 * Custom design inquiry message
 */
export function getCustomDesignMessage(details?: {
  jewelryType?: string
  metalPreference?: string
  budget?: string
  description?: string
}): string {
  if (details && details.description) {
    return `Hi! I'm interested in getting a custom jewelry piece designed.

*Type:* ${details.jewelryType || 'Not specified'}
*Metal:* ${details.metalPreference || 'Not specified'}
*Budget:* ${details.budget || 'Not specified'}

*Description:*
${details.description}

Can we discuss this further?`
  }

  return `Hi! I'm interested in getting a custom jewelry piece designed. Can you guide me through the process?`
}

/**
 * Order status inquiry message
 */
export function getOrderStatusMessage(orderId?: string): string {
  if (orderId) {
    return `Hi! I would like to check the status of my order.

Order ID: ${orderId}

Please provide an update.`
  }

  return `Hi! I would like to check the status of my recent order. Can you help me with this?`
}

/**
 * Feedback message template
 */
export function getFeedbackMessage(type: 'positive' | 'negative' | 'suggestion'): string {
  const templates = {
    positive: `Hi! I recently visited Sevens Gold and wanted to share my positive experience. ⭐

[Share your experience here]

Thank you for the excellent service!`,
    negative: `Hi! I recently had an experience at Sevens Gold that I would like to discuss.

[Share your concern here]

I hope this can be addressed.`,
    suggestion: `Hi! I have a suggestion that might help improve your services.

[Share your suggestion here]

Thank you for considering my input!`,
  }

  return templates[type]
}

/**
 * Bridal consultation message
 */
export function getBridalConsultationMessage(): string {
  return `Hi! I'm planning for a wedding and would like to explore your bridal jewelry collection.

💍 Wedding Date: [Please specify]
👰 Bride's Name: [Please specify]

I would like to schedule a bridal consultation. Please let me know the available slots.`
}

/**
 * Exchange/Buyback inquiry message
 */
export function getExchangeInquiryMessage(): string {
  return `Hi! I have some old gold jewelry that I would like to exchange/sell.

Could you please provide information about:
- Current exchange rates
- Process involved
- Documents required

Thank you!`
}

/**
 * Check if currently within business hours
 */
export function isWithinBusinessHours(): boolean {
  const now = new Date()
  const hour = now.getHours()
  const day = now.getDay() // 0 = Sunday

  // Closed on Sundays before 11 AM and after 6 PM
  if (day === 0) {
    return hour >= 11 && hour < 18
  }

  // Regular hours: 10 AM - 8 PM
  return hour >= WHATSAPP_CONFIG.businessHours.start && hour < WHATSAPP_CONFIG.businessHours.end
}

/**
 * Get business status message
 */
export function getBusinessStatusMessage(): string {
  if (isWithinBusinessHours()) {
    return `We're online! Typical response time: ${WHATSAPP_CONFIG.responseTime}`
  }

  return 'We\'re currently offline. Leave a message and we\'ll respond during business hours (10 AM - 8 PM).'
}

/**
 * Track WhatsApp click event (for analytics)
 */
export function trackWhatsAppClick(action: string, details?: Record<string, string>): void {
  // Integration with analytics (Google Analytics, etc.)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_click', {
      action,
      ...details,
    })
  }

  // Console log for debugging (remove in production)
  console.log('WhatsApp Click:', { action, details })
}
