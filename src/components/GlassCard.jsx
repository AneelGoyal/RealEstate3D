export function GlassCard({ children, className = '', hover = true }) {
  return (
    <div
      className={`glass p-6 rounded-2xl ${
        hover ? 'hover:shadow-lg transition-smooth cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
