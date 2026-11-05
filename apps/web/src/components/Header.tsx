import { Link } from '@tanstack/react-router'

import { Scissors, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { SALON_NAME } from '../lib/site'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-stone-800 tracking-tight">
                {SALON_NAME}
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors"
                activeProps={{ className: 'text-sm font-medium text-amber-600' }}
              >
                Home
              </Link>
              <button
                type="button"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors"
              >
                Contact
              </button>
              <Link
                to="/"
                className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-full transition-colors shadow-sm"
              >
                Book Now
              </Link>
            </nav>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-stone-600 hover:text-amber-600 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <aside
        className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-stone-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <Scissors className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-stone-800">{SALON_NAME}</span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 text-stone-600 hover:text-amber-600 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-stone-700 hover:text-amber-600 transition-colors py-2"
          >
            Home
          </Link>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false)
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-lg font-medium text-stone-700 hover:text-amber-600 transition-colors py-2 text-left"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false)
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-lg font-medium text-stone-700 hover:text-amber-600 transition-colors py-2 text-left"
          >
            Contact
          </button>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white text-center font-semibold rounded-full transition-colors"
          >
            Book Now
          </Link>
        </nav>
      </aside>
    </>
  )
}
