'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Award,
  Users,
  History,
  Target,
  Heart,
  Shield
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const values = [
  {
    icon: Shield,
    title: 'Trust & Integrity',
    description: 'We believe in transparent pricing and honest dealings, building relationships that last generations.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'Every piece is crafted with precision, using only the finest materials and traditional techniques.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We go above and beyond to make every experience memorable.',
  },
]

const milestones = [
  { year: '1975', title: 'Foundation', description: 'Started as a small family workshop in Ernakulam' },
  { year: '1990', title: 'First Showroom', description: 'Opened our flagship showroom on MG Road' },
  { year: '2005', title: 'Diamond Collection', description: 'Launched certified diamond jewelry line' },
  { year: '2015', title: 'BIS Certification', description: 'Became one of the first BIS certified jewelers' },
  { year: '2020', title: 'Digital Expansion', description: 'Launched online presence and virtual consultations' },
  { year: '2024', title: 'New Horizons', description: 'Celebrating 49 years of trusted craftsmanship' },
]

const team = [
  {
    name: 'Rajendra Pillai',
    role: 'Founder & Master Craftsman',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    description: 'With over 50 years of experience, he carries forward the legacy of traditional Kerala jewelry.',
  },
  {
    name: 'Suresh Menon',
    role: 'Head Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    description: 'Award-winning designer blending contemporary aesthetics with classic elegance.',
  },
  {
    name: 'Lakshmi Nair',
    role: 'Customer Relations',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    description: 'Dedicated to ensuring every customer finds their perfect piece.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
            alt="Jewelry background"
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
            <span className="inline-block px-4 py-2 bg-gold-500/20 rounded-full text-gold-400 text-sm font-medium mb-6">
              Since 1975
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              For nearly five decades, Sevens Gold has been Ernakulam's trusted destination for exquisite jewelry,
              blending traditional Kerala craftsmanship with contemporary elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-gold-600 font-medium mb-4">
                <History className="w-5 h-5" />
                Our Heritage
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Rooted in Kerala's Rich Jewelry Tradition
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1975 by master craftsman Rajendra Pillai, Sevens Gold began as a humble workshop
                  dedicated to preserving the art of traditional Kerala jewelry making. What started as a
                  passion for creating timeless pieces has grown into Ernakulam's most trusted jewelry destination.
                </p>
                <p>
                  Our artisans are the heart of our legacy. Many have been with us for generations,
                  passing down techniques that have been perfected over centuries. Each piece that
                  leaves our workshop carries the spirit of this rich tradition, combined with
                  contemporary design sensibilities.
                </p>
                <p>
                  Today, we continue to honor our heritage while embracing innovation. From traditional
                  temple jewelry to modern diamond designs, every creation reflects our commitment to
                  excellence and our deep respect for the craft.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                  alt="Artisan crafting jewelry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-white p-6 rounded-2xl shadow-gold">
                <div className="text-4xl font-bold">49+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-ivory-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-luxury"
            >
              <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create exquisite jewelry that celebrates life's precious moments, while upholding
                the highest standards of quality, craftsmanship, and ethical practices. We strive to
                be more than a jewelry store – we aim to be a trusted partner in your family's journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-luxury"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Kerala's most loved jewelry brand, known for our authenticity, innovation, and
                unwavering commitment to customer satisfaction. We envision a future where tradition
                meets technology, making fine jewelry accessible to all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Our Journey"
            subtitle="Milestones that shaped who we are today"
            className="[&_h2]:text-white [&_p]:text-gray-400"
          />

          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold-500/30 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-4 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                      <span className="text-gold-400 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-serif font-semibold mt-2">{milestone.title}</h3>
                      <p className="text-gray-400 mt-2">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="w-4 h-4 bg-gold-500 rounded-full border-4 border-gray-900 z-10" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The passionate people behind every exquisite piece"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-luxury group"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold">{member.name}</h3>
                  <p className="text-gold-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Visit Our Showroom
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Experience our collection in person. Our expert consultants are ready to help you
              find the perfect piece for your special moments.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Book an Appointment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
