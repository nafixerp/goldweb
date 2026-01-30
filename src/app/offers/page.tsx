'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Gift,
  Percent,
  Calendar,
  Star,
  Crown,
  Users,
  Clock
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const mainOffers = [
  {
    id: '1',
    title: 'Onam Special Collection',
    description: 'Celebrate the harvest festival with exclusive traditional designs',
    discount: 15,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    validUntil: '2025-09-15',
    terms: ['Applicable on gold jewelry above ₹50,000', 'Making charges waived'],
    featured: true,
  },
  {
    id: '2',
    title: 'Wedding Season Special',
    description: 'Complete bridal sets with complimentary accessories',
    discount: 20,
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80',
    validUntil: '2025-03-31',
    terms: ['On bridal sets above ₹3 Lakhs', 'Free necklace box worth ₹5,000'],
    featured: true,
  },
  {
    id: '3',
    title: 'Diamond Dazzle',
    description: '0% making charges on all diamond jewelry',
    discount: 0,
    discountText: 'Zero Making',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    validUntil: '2025-02-28',
    terms: ['Applicable on certified diamonds only', 'Minimum purchase ₹1 Lakh'],
    featured: false,
  },
]

const seasonalDeals = [
  {
    title: 'Early Bird Discount',
    description: 'Shop before 11 AM for extra 2% off',
    icon: Clock,
    validDays: 'Monday - Friday',
  },
  {
    title: 'First Purchase Bonus',
    description: 'Get ₹5,000 off on your first order',
    icon: Gift,
    validDays: 'New customers',
  },
  {
    title: 'Exchange Upgrade',
    description: '105% value on old gold exchange',
    icon: Percent,
    validDays: 'This month only',
  },
]

const loyaltyTiers = [
  {
    name: 'Gold Member',
    icon: Star,
    benefits: ['5% off on making charges', 'Priority service', 'Birthday special offers'],
    requirement: 'Purchase above ₹1 Lakh',
  },
  {
    name: 'Platinum Member',
    icon: Crown,
    benefits: ['10% off on making charges', 'Free cleaning service', 'Exclusive previews', 'Anniversary gifts'],
    requirement: 'Purchase above ₹5 Lakh',
  },
  {
    name: 'Diamond Elite',
    icon: Users,
    benefits: ['15% off on making charges', 'Personal stylist', 'VIP events access', 'Free insurance (1 year)'],
    requirement: 'Purchase above ₹15 Lakh',
  },
]

export default function OffersPage() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-maroon-500 via-maroon-600 to-maroon-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Gift className="w-4 h-4" />
              Limited Time Offers
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Exclusive Offers & Promotions
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover amazing deals on our finest jewelry collections. Don't miss out on these special savings!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {mainOffers.filter(o => o.featured).map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl overflow-hidden group"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Discount badge */}
                  <div className="absolute top-4 right-4 bg-gold-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                    {offer.discount > 0 ? `${offer.discount}% OFF` : offer.discountText}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">{offer.title}</h3>
                    <p className="text-gray-200 mb-4">{offer.description}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gold-300">
                        <Calendar className="w-4 h-4" />
                        Valid until {new Date(offer.validUntil).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link href="/collections">
                        <Button size="sm">Shop Now</Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="bg-gray-100 p-4">
                  <p className="text-xs text-gray-500 font-medium mb-2">Terms & Conditions:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {offer.terms.map((term, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gold-500">•</span>
                        {term}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Offers */}
      <section className="section bg-ivory-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="More Deals"
            subtitle="Take advantage of these special promotions"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {seasonalDeals.map((deal, index) => (
              <motion.div
                key={deal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-luxury hover:shadow-2xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-4">
                  <deal.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{deal.title}</h3>
                <p className="text-gray-600 mb-4">{deal.description}</p>
                <span className="inline-block px-3 py-1 bg-gold-50 text-gold-600 rounded-full text-sm font-medium">
                  {deal.validDays}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="section bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Sevens Gold Loyalty Program"
            subtitle="Earn rewards on every purchase and unlock exclusive benefits"
            className="[&_h2]:text-white [&_p]:text-gray-400"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {loyaltyTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-gold-500/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                    <tier.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gold-400">{tier.name}</h3>
                    <p className="text-sm text-gray-400">{tier.requirement}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
                Join Our Loyalty Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Refer & Earn Rewards
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Share the love! Refer your friends and family to Sevens Gold and both of you get exciting rewards.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mb-8">
              <div className="text-4xl font-bold text-white mb-2">₹2,500</div>
              <p className="text-white/80">voucher for you and your friend on successful referral</p>
            </div>
            <Link href="/contact">
              <Button className="bg-white text-gold-600 hover:bg-gray-100">
                Start Referring
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
