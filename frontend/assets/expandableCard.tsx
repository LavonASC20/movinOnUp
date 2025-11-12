"use client"

import React, { useState } from "react"

interface ExpandableCardProps {
  title: string
  img: React.ReactNode
  collapsedContent: React.ReactNode
  expandedContent: React.ReactNode
}

function ExpandableCard({ title, img, collapsedContent, expandedContent }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className="bg-white border-2 border-[#D2E7FF] rounded-xl p-6 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:border-[#f2b63c] hover:scale-[1.02] max-w-md mx-auto"
      onClick={toggleExpand}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}{img}</h3>
        <div
          className={`w-6 h-6 rounded-full bg-[#f2b63c] flex items-center justify-center transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="overflow-hidden">
        {isExpanded ? (
          <div className="bg-[#D2E7FF] rounded-lg p-4 transition-all duration-300 ease-in-out">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">{expandedContent}</div>
          </div>
        ) : (
          <div className="text-gray-600 leading-relaxed">{collapsedContent}</div>
        )}
      </div>

      {/* Expand indicator */}
      <div className="mt-4 text-center">
        <span className="text-sm text-[#f2b63c] font-medium">
          {isExpanded ? "Click to collapse" : "Click to expand"}
        </span>
      </div>
    </div>
  )
}

export default ExpandableCard
