'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import { Suspense, useEffect, useRef, useState } from 'react'
import LocaleSwitcher from './LocaleSwitcher'
import { Link } from 'react-transition-progress/next'

const MobileNavEN = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const MenuItemsEN = [
    { name: 'home', link: `/en` },
    { name: 'about', link: `/en/about` },
    { name: 'Locations', link: `/en/locations` },
    { name: 'Products', link: `/en/products` },
    { name: 'Projects', link: `/en/projects` },
    { name: 'Contact', link: `/en/contact` },
  ]

  const handleClickOutside = (event: Event) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div ref={menuRef} className="relative z-50">
      <Menu
        size={32}
        strokeWidth={1}
        className="cursor-pointer text-blue-900"
        onClick={() => setIsOpen(true)}
      />

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              className="fixed top-0 right-0 h-full w-60 sm:w-72 bg-white shadow-lg flex flex-col p-4"
            >
              <div className="flex justify-end">
                <X
                  strokeWidth={1}
                  size={32}
                  className="cursor-pointer text-blue-900"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              {/* Menu Items */}
              <motion.div
                className="flex flex-col items-end gap-6 pt-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 },
                  },
                }}
              >
                {MenuItemsEN.map((menu) => (
                  <motion.div
                    key={menu.name}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link
                      href={menu.link}
                      className="capitalize text-blue-900 pr-2 hover:text-blue-600 transition-colors"
                    >
                      {menu.name}
                    </Link>
                  </motion.div>
                ))}

                <Suspense
                  fallback={<div className="w-24 h-10 bg-gray-200 animate-pulse rounded" />}
                >
                  <LocaleSwitcher />
                </Suspense>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNavEN
