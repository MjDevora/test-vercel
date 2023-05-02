import './mi-tienda-2.css'
import React from 'react'

export interface MiTienda2Props {
  className?: string
  image: string;
  title: string;
}

export const MiTienda2: React.FC<MiTienda2Props> = ({ className = '', image, title }) => (
  <div className={className}>
    <img
      src={image}
      className="fototienda"
    />
    <div className="contenedor">
      <h2 className="Bienvenida">Bienvenido a {title}</h2>
      <button className="boton">Información</button>
      <button className="boton">Catálogo</button>
      <button className="boton">Inventario</button>
      <button className="boton">Pedidos</button>
    </div>
  </div>
)
