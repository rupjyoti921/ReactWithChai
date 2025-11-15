import React from 'react'
import { useParams } from 'react-router-dom'

function UserId() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
          {/* Decorative Header */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2"></div>
          
          {/* Card Content */}
          <div className="p-8">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-4 rounded-full">
                <svg 
                  className="w-16 h-16 text-indigo-600" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Rupjyoti Barman
            </h2>
            
            {/* Description */}
            <p className="text-center text-gray-600 mb-6">
              Viewing user information
            </p>

            {/* User ID Display */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium mb-1">User ID</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {id}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <svg 
                    className="w-8 h-8 text-indigo-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm mb-1">Status</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-gray-800 font-semibold">Active</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm mb-1">Type</p>
                <p className="text-gray-800 font-semibold">Dynamic</p>
              </div>
            </div>

            {/* Footer Text */}
            <p className="text-center text-gray-500 text-sm mt-6">
              This is a dynamic route parameter
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserId