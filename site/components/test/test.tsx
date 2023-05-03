import './test.css'
import React from 'react'

export interface TestProps {
  className?: string
}

export const Test: React.FC<TestProps> = ({ className = '' }) => (
  <div className={className}>
    <div className="div1">
      <div className="circle" />
    </div>
    <div className="div2" />
  </div>
)
