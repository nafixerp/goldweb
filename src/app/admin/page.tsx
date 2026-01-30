'use client'

import { motion } from 'framer-motion'
import {
  MessageSquare,
  Users,
  Eye,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Clock
} from 'lucide-react'

const stats = [
  {
    name: 'Total Enquiries',
    value: '156',
    change: '+12.5%',
    trend: 'up',
    icon: MessageSquare,
    color: 'bg-blue-500',
  },
  {
    name: 'Custom Design Requests',
    value: '34',
    change: '+8.2%',
    trend: 'up',
    icon: Users,
    color: 'bg-purple-500',
  },
  {
    name: 'Page Views (Today)',
    value: '2,847',
    change: '-3.1%',
    trend: 'down',
    icon: Eye,
    color: 'bg-green-500',
  },
  {
    name: 'Conversion Rate',
    value: '4.2%',
    change: '+0.8%',
    trend: 'up',
    icon: TrendingUp,
    color: 'bg-gold-500',
  },
]

const recentEnquiries = [
  {
    id: 1,
    name: 'Priya Menon',
    email: 'priya@email.com',
    subject: 'Bridal Set Inquiry',
    time: '10 minutes ago',
    status: 'new',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    email: 'rajesh@email.com',
    subject: 'Custom Ring Design',
    time: '1 hour ago',
    status: 'new',
  },
  {
    id: 3,
    name: 'Lakshmi Nair',
    email: 'lakshmi@email.com',
    subject: 'Product Availability',
    time: '3 hours ago',
    status: 'replied',
  },
  {
    id: 4,
    name: 'Arun Pillai',
    email: 'arun@email.com',
    subject: 'Gold Exchange Query',
    time: '5 hours ago',
    status: 'replied',
  },
  {
    id: 5,
    name: 'Meera Krishnan',
    email: 'meera@email.com',
    subject: 'Appointment Request',
    time: '1 day ago',
    status: 'closed',
  },
]

const recentActivity = [
  { action: 'New enquiry received', user: 'Priya Menon', time: '10 min ago' },
  { action: 'Banner updated', user: 'Admin', time: '2 hours ago' },
  { action: 'SEO tags modified', user: 'Admin', time: '5 hours ago' },
  { action: 'New enquiry received', user: 'Rajesh Kumar', time: '1 day ago' },
  { action: 'CMS content updated', user: 'Admin', time: '2 days ago' },
]

export default function AdminDashboard() {
  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's what's happening with your website.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`flex items-center text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 ml-1" />
                )}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-sm text-gray-500">{stat.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Enquiries */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recent Enquiries</h2>
              <a href="/admin/enquiries" className="text-sm text-gold-600 hover:underline">
                View all
              </a>
            </div>
          </div>
          <div className="divide-y">
            {recentEnquiries.map((enquiry) => (
              <div key={enquiry.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 font-medium">
                      {enquiry.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{enquiry.name}</h4>
                      <p className="text-sm text-gray-600">{enquiry.subject}</p>
                      <p className="text-xs text-gray-400 mt-1">{enquiry.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      enquiry.status === 'new' ? 'bg-blue-100 text-blue-600' :
                      enquiry.status === 'replied' ? 'bg-green-100 text-green-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {enquiry.status}
                    </span>
                    <p className="text-xs text-gray-400 mt-1">{enquiry.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mt-2" />
                  <div>
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">
                      by {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Update Banners', href: '/admin/banners', icon: Calendar },
            { name: 'Manage Content', href: '/admin/cms', icon: Clock },
            { name: 'View Enquiries', href: '/admin/enquiries', icon: MessageSquare },
            { name: 'SEO Settings', href: '/admin/seo', icon: TrendingUp },
          ].map((action) => (
            <a
              key={action.name}
              href={action.href}
              className="flex items-center gap-3 p-4 border rounded-xl hover:border-gold-500 hover:bg-gold-50 transition-colors"
            >
              <action.icon className="w-5 h-5 text-gold-500" />
              <span className="text-sm font-medium text-gray-700">{action.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
