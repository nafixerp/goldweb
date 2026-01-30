'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Filter,
  Download,
  Eye,
  Trash2,
  Mail,
  Check,
  ChevronDown
} from 'lucide-react'

const enquiries = [
  {
    id: 1,
    name: 'Priya Menon',
    email: 'priya@email.com',
    phone: '+91 98765 43210',
    subject: 'Bridal Set Inquiry',
    message: 'I am looking for a complete bridal set for my wedding in March. Would like to schedule a consultation.',
    source: 'Contact Form',
    date: '2025-01-28',
    status: 'new',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    email: 'rajesh@email.com',
    phone: '+91 98765 43211',
    subject: 'Custom Ring Design',
    message: 'Looking to design a custom engagement ring with a solitaire diamond. Budget around 2 lakhs.',
    source: 'Custom Design',
    date: '2025-01-28',
    status: 'new',
  },
  {
    id: 3,
    name: 'Lakshmi Nair',
    email: 'lakshmi@email.com',
    phone: '+91 98765 43212',
    subject: 'Product Availability',
    message: 'Is the Kerala traditional necklace set shown on the website available? What is the current gold rate?',
    source: 'Contact Form',
    date: '2025-01-27',
    status: 'replied',
  },
  {
    id: 4,
    name: 'Arun Pillai',
    email: 'arun@email.com',
    phone: '+91 98765 43213',
    subject: 'Gold Exchange Query',
    message: 'I have old gold jewelry to exchange. What is your current exchange rate and process?',
    source: 'Contact Form',
    date: '2025-01-27',
    status: 'replied',
  },
  {
    id: 5,
    name: 'Meera Krishnan',
    email: 'meera@email.com',
    phone: '+91 98765 43214',
    subject: 'Appointment Request',
    message: 'Would like to book an appointment for this Saturday to view bridal collections.',
    source: 'Contact Form',
    date: '2025-01-26',
    status: 'closed',
  },
]

export default function EnquiriesPage() {
  const [selectedEnquiries, setSelectedEnquiries] = useState<number[]>([])
  const [statusFilter, setStatusFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewEnquiry, setViewEnquiry] = useState<typeof enquiries[0] | null>(null)

  const filteredEnquiries = enquiries.filter((enquiry) => {
    const matchesStatus = statusFilter === 'all' || enquiry.status === statusFilter
    const matchesSearch = enquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          enquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          enquiry.subject.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const toggleSelectAll = () => {
    if (selectedEnquiries.length === filteredEnquiries.length) {
      setSelectedEnquiries([])
    } else {
      setSelectedEnquiries(filteredEnquiries.map((e) => e.id))
    }
  }

  const toggleSelect = (id: number) => {
    setSelectedEnquiries((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <div>
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Enquiries</h1>
          <p className="text-gray-500 mt-1">Manage all form submissions and enquiries</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors">
          <Download className="w-4 h-4" />
          Export Data
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search enquiries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
            />
          </div>

          {/* Status filter */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none px-4 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none bg-white"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="replied">Replied</option>
              <option value="closed">Closed</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedEnquiries.length === filteredEnquiries.length && filteredEnquiries.length > 0}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-gray-300 text-gold-500 focus:ring-gold-500"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredEnquiries.map((enquiry) => (
                <tr key={enquiry.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedEnquiries.includes(enquiry.id)}
                      onChange={() => toggleSelect(enquiry.id)}
                      className="w-4 h-4 rounded border-gray-300 text-gold-500 focus:ring-gold-500"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{enquiry.name}</p>
                      <p className="text-sm text-gray-500">{enquiry.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-gray-900">{enquiry.subject}</p>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-600">{enquiry.source}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-600">
                      {new Date(enquiry.date).toLocaleDateString('en-IN')}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      enquiry.status === 'new' ? 'bg-blue-100 text-blue-600' :
                      enquiry.status === 'replied' ? 'bg-green-100 text-green-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {enquiry.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setViewEnquiry(enquiry)}
                        className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors"
                        title="Mark as replied"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredEnquiries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No enquiries found</p>
          </div>
        )}
      </div>

      {/* View Modal */}
      {viewEnquiry && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Enquiry Details</h2>
                <button
                  onClick={() => setViewEnquiry(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm text-gray-500">Name</label>
                <p className="font-medium text-gray-900">{viewEnquiry.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p className="font-medium text-gray-900">{viewEnquiry.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Phone</label>
                <p className="font-medium text-gray-900">{viewEnquiry.phone}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Subject</label>
                <p className="font-medium text-gray-900">{viewEnquiry.subject}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Message</label>
                <p className="font-medium text-gray-900">{viewEnquiry.message}</p>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <label className="text-sm text-gray-500">Source</label>
                  <p className="font-medium text-gray-900">{viewEnquiry.source}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Date</label>
                  <p className="font-medium text-gray-900">
                    {new Date(viewEnquiry.date).toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t bg-gray-50 flex gap-3">
              <a
                href={`mailto:${viewEnquiry.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Reply via Email
              </a>
              <button
                onClick={() => setViewEnquiry(null)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
