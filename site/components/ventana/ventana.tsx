import './ventana.css'
import React from 'react'

export interface VentanaProps {
  className?: string
}

export const Ventana: React.FC<VentanaProps> = ({ className = '' }) => (
  <div className={`${className} div1`}></div>
)
