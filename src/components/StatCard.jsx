import { GlassCard } from './GlassCard'

export function StatCard({ icon: Icon, label, value, change = null, changePositive = true }) {
  return (
    <GlassCard hover={false} className="lg:col-span-1">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-400 mb-2">{label}</p>
          <p className="text-3xl font-bold text-white mb-2">{value}</p>
          {change && (
            <p className={`text-xs font-semibold ${
              changePositive ? 'text-green-400' : 'text-red-400'
            }`}>
              {changePositive ? '↑' : '↓'} {change}
            </p>
          )}
        </div>
        {Icon && (
          <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex-shrink-0">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
        )}
      </div>
    </GlassCard>
  )
}
