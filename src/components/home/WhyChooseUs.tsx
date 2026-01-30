'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Award,
  RefreshCw,
  Users,
  Gem,
  HeartHandshake
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const features = [
  {
    icon: Shield,
    title: 'BIS Hallmarked',
    description: '100% pure and certified gold jewelry with official BIS hallmark guarantee',
  },
  {
    icon: Gem,
    title: 'Certified Diamonds',
    description: 'All diamonds are IGI & GIA certified ensuring authenticity and quality',
  },
  {
    icon: Award,
    title: 'Traditional Craftsmanship',
    description: 'Expert artisans with generations of experience in Kerala jewelry tradition',
  },
  {
    icon: RefreshCw,
    title: 'Best Exchange Value',
    description: '100% value on old gold exchange with transparent pricing',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'Dedicated consultants to help you find the perfect piece',
  },
  {
    icon: HeartHandshake,
    title: 'Lifetime Trust',
    description: 'Serving families across generations with integrity and excellence',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function WhyChooseUs() {
  return (
    <section className="section bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <SectionHeading
          title="Why Choose Sevens Gold"
          subtitle="Experience the difference of shopping with Ernakulam's most trusted jewelry destination"
          className="text-white [&_h2]:text-white [&_p]:text-gray-300"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-gold-400">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
