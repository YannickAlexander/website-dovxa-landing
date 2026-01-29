import React from 'react'

const IngineFest = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#812DCF]">
      
      <img
        src="/images/logo-dovxa-white.png"
        alt="Dovxa Logo"
        className="w-72 animate-pulse"
      />

      <div className="flex items-center mt-16 gap-2 border border-white text-gray-50 rounded-full px-6 py-2">
        <div className="size-2.5 bg-white rounded-full"></div>
        <span className="uppercase tracking-widest text-sm">
          Ingine Fest 🚀
        </span>
      </div>

    </div>
  )
}

export default IngineFest
