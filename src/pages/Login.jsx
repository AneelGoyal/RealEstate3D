import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, ArrowRight } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate auth delay
    setTimeout(() => {
      if (login(email, password)) {
        navigate('/dashboard')
      } else {
        setError('Invalid email or password')
      }
      setLoading(false)
    }, 500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-l from-purple-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">RE</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">RealEstate3D</h1>
          <p className="text-gray-400">Premium Property Management</p>
        </motion.div>

        {/* Login Card */}
        <motion.div
          variants={itemVariants}
          className="glass p-8 rounded-3xl space-y-6"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full glass-sm px-4 py-3 pl-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl transition-all"
                  disabled={loading}
                />
              </div>
            </motion.div>

            {/* Password Input */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full glass-sm px-4 py-3 pl-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl transition-all"
                  disabled={loading}
                />
              </div>
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div
                variants={itemVariants}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {loading ? 'Logging in...' : 'Login'}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </motion.button>
          </form>

          {/* Demo Info */}
          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-white/10 text-center"
          >
            <p className="text-xs text-gray-400 mb-3">Demo Mode - Use any credentials</p>
            <button
              onClick={() => {
                setEmail('demo@example.com')
                setPassword('password')
              }}
              className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              Auto-fill demo credentials
            </button>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={itemVariants}
          className="text-center text-sm text-gray-500 mt-8"
        >
          Phase 1 - Premium UI Foundation
        </motion.p>
      </motion.div>
    </div>
  )
}
