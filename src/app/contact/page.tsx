'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Calendar,
  Navigation
} from 'lucide-react'
import Button from '@/components/ui/Button'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Our Showroom',
    details: ['MG Road, Ernakulam', 'Kochi, Kerala - 682011'],
    action: {
      label: 'Get Directions',
      href: 'https://maps.google.com/?q=MG+Road+Ernakulam+Kerala',
    },
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 98765 43210', '+91 484 234 5678'],
    action: {
      label: 'Call Now',
      href: 'tel:+919876543210',
    },
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@sevensgold.com', 'support@sevensgold.com'],
    action: {
      label: 'Send Email',
      href: 'mailto:info@sevensgold.com',
    },
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    details: ['+91 98765 43210', 'Quick responses'],
    action: {
      label: 'Chat Now',
      href: 'https://wa.me/919876543210',
    },
  },
]

const timings = [
  { day: 'Monday - Saturday', time: '10:00 AM - 8:00 PM' },
  { day: 'Sunday', time: '11:00 AM - 6:00 PM' },
  { day: 'Public Holidays', time: 'Please call to confirm' },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(data)
    setIsSubmitted(true)
    reset()
  }

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
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We'd love to hear from you. Visit our showroom or reach out through any of our channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-luxury p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                <div className="text-gray-600 text-sm mb-4">
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
                <a
                  href={info.action.href}
                  target={info.action.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gold-600 font-medium text-sm hover:underline"
                >
                  {info.action.label} →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-ivory-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question or need assistance? Fill out the form and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 rounded-2xl shadow-luxury text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. Our team will respond to your inquiry shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="secondary">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="input-luxury"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        {...register('phone', { required: 'Phone is required' })}
                        className="input-luxury"
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="input-luxury"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      {...register('subject', { required: 'Please select a subject' })}
                      className="input-luxury"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="custom">Custom Design Request</option>
                      <option value="appointment">Book Appointment</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', {
                        required: 'Please enter your message',
                        minLength: { value: 10, message: 'Message must be at least 10 characters' },
                      })}
                      rows={5}
                      className="input-luxury resize-none"
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Map */}
              <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Store location map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center">
                  <a
                    href="https://maps.google.com/?q=MG+Road+Ernakulam+Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gold-400 transition-colors"
                  >
                    <Navigation className="w-5 h-5" />
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Store Timings */}
              <div className="bg-white rounded-2xl shadow-luxury p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-gold-500" />
                  <h3 className="text-xl font-serif font-bold">Store Timings</h3>
                </div>
                <div className="space-y-3">
                  {timings.map((timing) => (
                    <div key={timing.day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600">{timing.day}</span>
                      <span className="font-medium">{timing.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Appointment CTA */}
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-xl font-serif font-bold">Book an Appointment</h3>
                </div>
                <p className="text-white/90 mb-4">
                  Schedule a personalized consultation with our jewelry experts for a premium shopping experience.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hi, I would like to book an appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-gold-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showroom Gallery */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Showroom</h2>
            <p className="text-gray-600">Experience luxury shopping at our beautifully designed showroom</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
              'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
              'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80',
              'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&q=80',
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`Showroom ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
