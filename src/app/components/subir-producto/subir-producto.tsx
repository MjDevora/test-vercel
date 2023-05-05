import './subir-producto.css'
import React from 'react'

export interface SubirProductoProps {
  className?: string
}

export const SubirProducto: React.FC<SubirProductoProps> = ({
  className = '',
}) => (
  <div className={className}>
    <div className="encabezado" >
      <p style={{ color: 'white', padding: '5px' }}>Subir Producto</p>
    </div>
    <form>
      <label>Nombre:</label>
      <input type="text" />
      <br />
      <label>Precio:</label>
      <input type="text" />
      <br />
      <label>Disponibilidad:</label>
      <input type="text" />
      <br />
      <label>Categoría:</label>
      <input type="text" />
      <br />
      <label>Subcategoría:</label>
      <input type="text" />
      <br />
      <label>Condición:</label>
      <input type="text" />
      <br />
      <label>Nombre:</label>
      <input type="text" /><br/>
      <button>Cancelar</button>
      <button>Agregar</button>
    </form>
  </div>
)
