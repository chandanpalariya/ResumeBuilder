import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const Input = ({ value, onChange, label, placeholder, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="mb-6 group">
      {label && (
        <label className="block text-sm font-bold text-gray-800 mb-3 group-focus-within:text-violet-600 transition-colors">
          {label}
        </label>
      )}

      <div
        className={`relative flex items-center bg-gray-50 border-2 px-4 py-3 rounded-xl transition-all duration-300 ${
          isFocused
            ? 'border-violet-500 ring-4 ring-violet-500/20 shadow-lg shadow-violet-500/10'
            : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <input
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 font-medium"
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-500 hover:text-violet-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  )
}

export default Input
