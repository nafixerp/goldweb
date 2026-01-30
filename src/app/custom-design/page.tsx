'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {
  Pencil,
  Gem,
  Clock,
  Award,
  Send,
  CheckCircle,
  Upload,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

interface CustomDesignForm {
  name: string
  email: string
  phone: string
  jewelryType: string
  metalPreference: string
  budget: string
  description: string
  preferredContact: string
}

const steps = [
  {
    icon: Pencil,
    title: 'Share Your Vision',
    description: 'Tell us about your dream jewelry piece through our form or consultation',
  },
  {
    icon: Gem,
    title: 'Design Creation',
    description: 'Our designers create detailed sketches and 3D renders for your approval',
  },
  {
    icon: Clock,
    title: 'Crafting Process',
    description: 'Expert artisans bring your design to life with traditional techniques',
  },
  {
    icon: Award,
    title: 'Final Delivery',
    description: 'Receive your certified, one-of-a-kind piece ready to cherish',
  },
]

const pastCreations = [
  {
    title: 'Heritage Bridal Set',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    description: 'Custom temple jewelry for a traditional Kerala wedding',
  },
  {
    title: 'Anniversary Ring',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    description: 'Diamond eternity band with personalized engraving',
  },
  {
    title: 'Heirloom Necklace',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    description: 'Antique gold design reimagined for modern elegance',
  },
  {
    title: 'Engagement Ring',
    image: 'https://images.unsplash.com/photo-1615655114865-4cc9d1f1b124?w=600&q=80',
    description: 'Platinum solitaire with hidden diamond details',
  },
]

const jewelryTypes = [
  'Ring',
  'Necklace/Chain',
  'Earrings',
  'Bracelet/Bangle',
  'Pendant',
  'Complete Set',
  'Other',
]

const metalOptions = [
  '22K Gold',
  '24K Gold',
  '18K Gold',
  'Rose Gold',
  'Platinum',
  'Silver',
  'Mixed Metals',
]

const budgetRanges = [
  'Under ₹50,000',
  '₹50,000 - ₹1 Lakh',
  '₹1 Lakh - ₹2 Lakh',
  '₹2 Lakh - ₹5 Lakh',
  'Above ₹5 Lakh',
]

export default function CustomDesignPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CustomDesignForm>()

  const onSubmit = async (data: CustomDesignForm) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(data)
    setIsSubmitted(true)
  }

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80"
            alt="Custom jewelry design"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/20 rounded-full text-gold-400 text-sm font-medium mb-6">
              <Pencil className="w-4 h-4" />
              Bespoke Jewelry
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Design Your Dream Jewelry
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your vision into a timeless masterpiece. Our expert artisans
              bring your unique ideas to life with exceptional craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gold-200" />
                )}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-gold">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-ivory-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-2">
                Start Your Custom Design
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our design team will get in touch within 24 hours.
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
                  <h3 className="text-2xl font-serif font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your custom design request has been submitted. Our team will contact you within 24 hours to discuss your vision.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="secondary">
                    Submit Another Request
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jewelry Type *
                      </label>
                      <select
                        {...register('jewelryType', { required: 'Please select jewelry type' })}
                        className="input-luxury"
                      >
                        <option value="">Select type</option>
                        {jewelryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Metal Preference *
                      </label>
                      <select
                        {...register('metalPreference', { required: 'Please select metal' })}
                        className="input-luxury"
                      >
                        <option value="">Select metal</option>
                        {metalOptions.map((metal) => (
                          <option key={metal} value={metal}>{metal}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range *
                    </label>
                    <select
                      {...register('budget', { required: 'Please select budget range' })}
                      className="input-luxury"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Describe Your Design Vision *
                    </label>
                    <textarea
                      {...register('description', {
                        required: 'Please describe your design',
                        minLength: { value: 20, message: 'Please provide more details' },
                      })}
                      rows={4}
                      className="input-luxury resize-none"
                      placeholder="Tell us about your dream jewelry - style, stones, any reference images..."
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { id: 'phone', icon: Phone, label: 'Phone' },
                        { id: 'email', icon: Mail, label: 'Email' },
                        { id: 'whatsapp', icon: MessageCircle, label: 'WhatsApp' },
                      ].map((method) => (
                        <label key={method.id} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            {...register('preferredContact')}
                            value={method.id}
                            className="w-4 h-4 text-gold-500 focus:ring-gold-500"
                          />
                          <method.icon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{method.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Submit Design Request
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900 text-white p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-serif font-bold mb-4">Why Choose Custom?</h3>
                <ul className="space-y-4">
                  {[
                    'Unique piece tailored to your style',
                    'Direct collaboration with master craftsmen',
                    'Premium quality materials guaranteed',
                    'Transparent pricing with no hidden costs',
                    'Full certification and documentation',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gold-50 p-6 rounded-2xl border border-gold-100">
                <h4 className="font-semibold mb-2">Need Immediate Assistance?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Call us or visit our showroom for a personal consultation.
                </p>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-gold-600 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  +91 98765 43210
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Past Creations */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Past Custom Creations"
            subtitle="A glimpse of unique pieces we've brought to life"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {pastCreations.map((creation, index) => (
              <motion.div
                key={creation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={creation.image}
                    alt={creation.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold mb-1">{creation.title}</h3>
                <p className="text-gray-600 text-sm">{creation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
