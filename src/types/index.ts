// Product types
export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  originalPrice?: number
  category: ProductCategory
  subcategory?: string
  images: string[]
  thumbnail: string
  metalType: MetalType
  weight: number
  weightUnit: 'grams' | 'carats'
  purity?: string
  certification?: string[]
  isNew?: boolean
  isBestseller?: boolean
  isOnSale?: boolean
  discount?: number
  stock: number
  tags: string[]
  createdAt: string
  updatedAt: string
}

export type ProductCategory =
  | 'gold'
  | 'diamond'
  | 'bridal'
  | 'daily-wear'
  | 'mens'
  | 'kids'
  | 'platinum'

export type MetalType =
  | '22k-gold'
  | '24k-gold'
  | '18k-gold'
  | 'platinum'
  | 'silver'
  | 'rose-gold'

// Gold rate types
export interface GoldRate {
  type: '22K' | '24K' | '18K'
  rate: number
  change: number
  changePercent: number
  lastUpdated: string
}

// Blog types
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: Author
  category: BlogCategory
  thumbnail: string
  tags: string[]
  readTime: number
  publishedAt: string
  updatedAt: string
}

export interface Author {
  id: string
  name: string
  avatar: string
  bio: string
}

export type BlogCategory =
  | 'styling-tips'
  | 'jewelry-care'
  | 'trends'
  | 'wedding-guide'
  | 'gold-investment'

// Contact and inquiry types
export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface CustomDesignRequest {
  name: string
  email: string
  phone: string
  jewelryType: string
  metalPreference: string
  budget: string
  description: string
  referenceImages?: string[]
  preferredContactMethod: 'phone' | 'email' | 'whatsapp'
}

// Testimonial type
export interface Testimonial {
  id: string
  name: string
  location: string
  avatar?: string
  rating: number
  comment: string
  productPurchased?: string
  date: string
}

// Offer/Promotion types
export interface Offer {
  id: string
  title: string
  description: string
  discount: number
  discountType: 'percentage' | 'fixed'
  validFrom: string
  validUntil: string
  terms: string[]
  banner: string
  isActive: boolean
}

// Store location type
export interface StoreLocation {
  id: string
  name: string
  address: string
  city: string
  state: string
  pincode: string
  phone: string[]
  email: string
  whatsapp: string
  coordinates: {
    lat: number
    lng: number
  }
  timings: {
    weekdays: string
    weekends: string
    holidays?: string
  }
  isMainShowroom: boolean
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

// Filter types for collections
export interface ProductFilters {
  category?: ProductCategory[]
  metalType?: MetalType[]
  priceRange?: {
    min: number
    max: number
  }
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'popularity'
  occasion?: string[]
  search?: string
}
