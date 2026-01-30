'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-2xl ${alignClasses[align]} ${className}`}
    >
      <h2 className="section-title relative inline-block">
        {title}
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
        />
      </h2>
      {subtitle && (
        <p className="section-subtitle mt-4">{subtitle}</p>
      )}
    </motion.div>
  )
}
