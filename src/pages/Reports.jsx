import { motion } from 'framer-motion'
import { BarChart3 } from 'lucide-react'
import { GlassCard } from '../components/GlassCard'

export function Reports() {
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold text-white mb-2">Reports</h1>
        <p className="text-gray-400">View analytics and generate business reports.</p>
      </motion.div>

      {/* Content */}
      <motion.div variants={itemVariants}>
        <GlassCard>
          <div className="flex flex-col items-center justify-center py-16">
            <BarChart3 className="w-16 h-16 text-gray-500 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Analytics & Reports</h2>
            <p className="text-gray-400 text-center max-w-md">
              Advanced reporting and analytics will be implemented in Phase 6.
              <br />
              This section will feature data visualizations and comprehensive business insights.
            </p>
          </div>
        </GlassCard>
      </motion.div>

      {/* Feature Preview */}
      <motion.div variants={itemVariants}>
        <GlassCard>
          <h2 className="text-lg font-bold text-white mb-6">Coming Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Sales reports',
              'Revenue analytics',
              'Agent performance',
              'Market trends',
              'Property statistics',
              'Customer insights',
              'Export to PDF/CSV',
              'Custom date ranges',
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}
