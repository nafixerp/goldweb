'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react'

interface GoldRate {
  type: string
  rate: number
  change: number
}

// Simulated gold rates - In production, this would fetch from an API
const mockGoldRates: GoldRate[] = [
  { type: '24K', rate: 6850, change: 25 },
  { type: '22K', rate: 6280, change: 20 },
  { type: '18K', rate: 5138, change: 15 },
]

export default function GoldRateWidget() {
  const [rates, setRates] = useState<GoldRate[]>(mockGoldRates)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  const refreshRates = () => {
    setIsRefreshing(true)
    // Simulate API call
    setTimeout(() => {
      setRates(rates.map(rate => ({
        ...rate,
        rate: rate.rate + Math.floor(Math.random() * 20) - 10,
        change: Math.floor(Math.random() * 50) - 25,
      })))
      setLastUpdated(new Date())
      setIsRefreshing(false)
    }, 1000)
  }

  useEffect(() => {
    // Auto-refresh every 5 minutes
    const interval = setInterval(refreshRates, 300000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-8 text-xs md:text-sm overflow-x-auto">
          {/* Gold rates ticker */}
          <div className="flex items-center gap-4 md:gap-8 whitespace-nowrap">
            <span className="font-semibold hidden sm:inline">Live Gold Rate (per gram):</span>
            <span className="font-semibold sm:hidden">Gold Rate:</span>

            {rates.map((rate) => (
              <div key={rate.type} className="flex items-center gap-2">
                <span className="font-medium">{rate.type}:</span>
                <span className="font-bold">₹{rate.rate.toLocaleString()}</span>
                <span className={`flex items-center text-xs ${rate.change >= 0 ? 'text-green-200' : 'text-red-200'}`}>
                  {rate.change >= 0 ? (
                    <TrendingUp className="w-3 h-3 mr-0.5" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-0.5" />
                  )}
                  {rate.change >= 0 ? '+' : ''}{rate.change}
                </span>
              </div>
            ))}
          </div>

          {/* Refresh button */}
          <button
            onClick={refreshRates}
            disabled={isRefreshing}
            className="flex items-center gap-1 hover:bg-white/10 px-2 py-1 rounded transition-colors ml-4"
            aria-label="Refresh rates"
          >
            <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className="hidden md:inline">
              {lastUpdated.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
