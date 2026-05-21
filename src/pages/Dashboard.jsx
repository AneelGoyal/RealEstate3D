import { motion } from 'framer-motion'
import { Building2, Home, TrendingUp, DollarSign } from 'lucide-react'
import { StatCard } from '../components/StatCard'
import { GlassCard } from '../components/GlassCard'

export function Dashboard() {
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
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's your property overview.</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <motion.div variants={itemVariants}>
          <StatCard
            icon={Building2}
            label="Total Properties"
            value="24"
            change="2 this month"
            changePositive={true}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            icon={Home}
            label="Available Properties"
            value="12"
            change="5 recently"
            changePositive={true}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            icon={TrendingUp}
            label="Sold This Month"
            value="8"
            change="3 more than last"
            changePositive={true}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            icon={DollarSign}
            label="Total Revenue"
            value="$2.4M"
            change="12% increase"
            changePositive={true}
          />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <GlassCard className="lg:col-span-2">
          <h2 className="text-lg font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { title: 'New property listed', subtitle: 'Modern Apartment', time: '2 hours ago' },
              { title: 'Property sold', subtitle: 'Victorian House', time: '5 hours ago' },
              { title: 'New agent joined', subtitle: 'John Doe', time: '1 day ago' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
              >
                <p className="text-white font-medium">{item.title}</p>
                <p className="text-sm text-gray-400">{item.subtitle}</p>
                <p className="text-xs text-gray-500 mt-2">{item.time}</p>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        {/* Quick Stats */}
        <GlassCard className="lg:col-span-1">
          <h2 className="text-lg font-bold text-white mb-6">Quick Stats</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <p className="text-sm text-gray-400">Occupancy Rate</p>
              <p className="text-2xl font-bold text-blue-400 mt-2">87%</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-sm text-gray-400">Avg. Days to Sell</p>
              <p className="text-2xl font-bold text-purple-400 mt-2">24</p>
            </div>
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <p className="text-sm text-gray-400">Client Satisfaction</p>
              <p className="text-2xl font-bold text-green-400 mt-2">4.8/5</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Phase Info */}
      <motion.div variants={itemVariants}>
        <GlassCard className="border-blue-500/30 bg-blue-500/5">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-blue-500/20">
              <Building2 className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Phase 1 Complete</h3>
              <p className="text-sm text-gray-400">
                Premium UI foundation is ready. Coming next: Property CRUD, Database Integration, Agent Management, and more features.
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}
