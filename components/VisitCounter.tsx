'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchVisits = async () => {
      // Check if already counted in this session
      const hasVisited = sessionStorage.getItem('ct_visit_counted')
      
      try {
        // First, get current count
        const response = await fetch('/api/visitas', { 
          method: 'GET',
          cache: 'no-store',
        })
        
        if (!response.ok) throw new Error('GET failed')
        
        const data = await response.json()
        setCount(data.total)
        
        // If not yet counted in this session, increment
        if (!hasVisited) {
          const postResponse = await fetch('/api/visitas', { 
            method: 'POST',
            cache: 'no-store',
          })
          
          if (postResponse.ok) {
            const postData = await postResponse.json()
            if (!postData.skipped && postData.total) {
              setCount(postData.total)
              sessionStorage.setItem('ct_visit_counted', 'true')
            }
          }
        }
      } catch (err) {
        // Silently fail - hide counter
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchVisits()
  }, [])

  if (loading || error || count === null || count === 0) {
    return null
  }

  return (
    <div className="hidden sm:block text-sm text-gray-400" aria-live="polite">
      <span className="flex items-center space-x-1">
        <span>Eres el visitante nº </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={count}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-brand-red font-display font-bold tabular-nums"
          >
            {count.toLocaleString()}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  )
}