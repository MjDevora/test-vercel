import './readyToSell.css'
import React from "react";

export interface ReadyToSellProps {
  className?: string
  image: string;
  title: string;
}

export const readyToSell: React.FC<ReadyToSellProps> = ({ className = '', image, title }) => (
  <div className={className}>
    <img
      src={image}
      className="fototienda"
    />
    <div className="contenedor">
      <h2 className="Bienvenida">¿Listo para emepezar a vender en {title}?</h2>
      <h3 className="Texto"> Queremos ayudarte a crecer. Para eso hemos creado este apartado de "Mi tienda". Llena el siguiente formulario y nosotros te ayudaremos a administrar tu tienda.</h3>
      <h3 className="Texto">  ¿Estas listo? Crea una vez el perfil de tu tienda y se ligará diractamente a a tu cuenta </h3>
      <button className="boton">Crea el perfil de tu tienda</button>
    </div>
  </div>
)