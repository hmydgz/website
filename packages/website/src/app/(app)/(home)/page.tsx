'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center justify-center py-10" style={{ minHeight: "max(calc(100vh - calc(var(--header-height, 64px) * 2)), 500px)" }}>
        <div className='flex'>{ 'test'.split('').map((v, i) => (
          <motion.div
            key={ i }
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: (i + 1) * 0.1,
              type: 'spring',
              damping: 10,
              stiffness: 100,
            }}
          >{ v }</motion.div>
        )) }</div>
      </div>
    </div>
  );
}
