import { motion } from 'framer-motion'
import { Sidebar } from '../components/Sidebar'
import { Navbar } from '../components/Navbar'

export function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1 overflow-auto"
        >
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </motion.main>
      </div>
    </div>
  )
}
