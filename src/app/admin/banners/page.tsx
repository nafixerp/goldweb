'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Plus,
  Pencil,
  Trash2,
  GripVertical,
  Eye,
  EyeOff,
  Upload,
  X
} from 'lucide-react'

const initialBanners = [
  {
    id: 1,
    title: 'Onam Special Collection',
    subtitle: 'Festive Offers',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    link: '/offers',
    order: 1,
    active: true,
  },
  {
    id: 2,
    title: 'Bridal Collection 2025',
    subtitle: 'Wedding Season',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80',
    link: '/bridal',
    order: 2,
    active: true,
  },
  {
    id: 3,
    title: 'Diamond Jewelry',
    subtitle: 'IGI Certified',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    link: '/collections/diamond',
    order: 3,
    active: true,
  },
  {
    id: 4,
    title: 'Gold Collection',
    subtitle: 'BIS Hallmarked',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80',
    link: '/collections/gold',
    order: 4,
    active: false,
  },
]

export default function BannersPage() {
  const [banners, setBanners] = useState(initialBanners)
  const [showModal, setShowModal] = useState(false)
  const [editBanner, setEditBanner] = useState<typeof banners[0] | null>(null)

  const toggleActive = (id: number) => {
    setBanners((prev) =>
      prev.map((b) => (b.id === id ? { ...b, active: !b.active } : b))
    )
  }

  const deleteBanner = (id: number) => {
    if (confirm('Are you sure you want to delete this banner?')) {
      setBanners((prev) => prev.filter((b) => b.id !== id))
    }
  }

  const openEditModal = (banner: typeof banners[0]) => {
    setEditBanner(banner)
    setShowModal(true)
  }

  return (
    <div>
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Banner Management</h1>
          <p className="text-gray-500 mt-1">Manage homepage slider banners</p>
        </div>
        <button
          onClick={() => {
            setEditBanner(null)
            setShowModal(true)
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add New Banner
        </button>
      </div>

      {/* Banners Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {banners
          .sort((a, b) => a.order - b.order)
          .map((banner) => (
            <motion.div
              key={banner.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-white rounded-xl shadow-sm overflow-hidden ${
                !banner.active ? 'opacity-60' : ''
              }`}
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-80">{banner.subtitle}</p>
                  <h3 className="text-xl font-bold">{banner.title}</h3>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    banner.active
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-500 text-white'
                  }`}>
                    {banner.active ? 'Active' : 'Inactive'}
                  </span>
                  <span className="px-2 py-1 bg-white/80 text-gray-800 text-xs font-medium rounded-full">
                    Order: {banner.order}
                  </span>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <GripVertical className="w-5 h-5 cursor-grab" />
                  <span className="text-sm">Drag to reorder</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleActive(banner.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      banner.active
                        ? 'text-green-500 hover:bg-green-50'
                        : 'text-gray-400 hover:bg-gray-100'
                    }`}
                    title={banner.active ? 'Deactivate' : 'Activate'}
                  >
                    {banner.active ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => openEditModal(banner)}
                    className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteBanner(banner.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  {editBanner ? 'Edit Banner' : 'Add New Banner'}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <form className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Banner Title *
                </label>
                <input
                  type="text"
                  defaultValue={editBanner?.title}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                  placeholder="Enter banner title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subtitle
                </label>
                <input
                  type="text"
                  defaultValue={editBanner?.subtitle}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                  placeholder="Enter subtitle"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Banner Image *
                </label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
                  {editBanner?.image ? (
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={editBanner.image}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Click or drag to upload</p>
                      <p className="text-xs text-gray-400 mt-1">Recommended: 1920x800px</p>
                    </>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link URL
                </label>
                <input
                  type="text"
                  defaultValue={editBanner?.link}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                  placeholder="/collections/gold"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Display Order
                  </label>
                  <input
                    type="number"
                    defaultValue={editBanner?.order || banners.length + 1}
                    min="1"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    defaultValue={editBanner?.active ? 'active' : 'inactive'}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="p-6 border-t bg-gray-50 flex gap-3">
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors"
              >
                {editBanner ? 'Save Changes' : 'Add Banner'}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
