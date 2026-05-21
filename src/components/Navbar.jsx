import { motion } from 'framer-motion'
import { Bell, User } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export function Navbar() {
  const { user } = useAuth()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass sticky top-0 z-40 border-b border-white/10"
    >
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left side - Title */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} delay={0.2}>
          <h1 className="text-xl font-bold gradient-text">RealEstate3D</h1>
        </motion.div>

        {/* Right side - User & Notifications */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors relative"
          >
            <Bell className="w-5 h-5 text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </motion.button>

          {/* User Profile */}
          {user && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 pl-4 border-l border-white/10"
            >
              <div className="text-right">
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-gray-400">Owner</p>
              </div>
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full border border-blue-500/30 object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}
