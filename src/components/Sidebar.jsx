import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Home,
  Building2,
  Users,
  UserCheck,
  BarChart3,
  Settings,
  Menu,
  X,
  LogOut,
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Building2, label: 'Properties', path: '/properties' },
  { icon: Users, label: 'Agents', path: '/agents' },
  { icon: UserCheck, label: 'Customers', path: '/customers' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()
  const { logout } = useAuth()

  const isActive = (path) => location.pathname === path

  const sidebarVariants = {
    open: {
      width: 280,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    closed: {
      width: 80,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  }

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  }

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        className="fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 to-slate-950 border-r border-white/10 flex flex-col z-50 lg:relative lg:z-auto"
      >
        {/* Logo Section */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          {isOpen && (
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">RE</span>
              </div>
              <span className="font-bold text-white truncate">RealEstate</span>
            </motion.div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors lg:hidden"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <motion.nav
          variants={containerVariants}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          className="flex-1 px-3 py-6 space-y-2 overflow-y-auto"
        >
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  // Close sidebar on mobile after selection
                  if (window.innerWidth < 1024) {
                    setIsOpen(false)
                  }
                }}
              >
                <motion.div
                  variants={itemVariants}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    active
                      ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/50'
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 ${
                      active ? 'text-blue-400' : 'text-gray-400'
                    }`}
                  />
                  {isOpen && (
                    <span
                      className={`text-sm font-medium truncate ${
                        active ? 'text-blue-200' : 'text-gray-300'
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </motion.div>
              </Link>
            )
          })}
        </motion.nav>

        {/* Logout Button */}
        <div className="border-t border-white/10 p-3">
          <motion.button
            variants={itemVariants}
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 border border-transparent hover:border-red-500/30 transition-all text-gray-300 hover:text-red-400"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {isOpen && <span className="text-sm font-medium">Logout</span>}
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}
