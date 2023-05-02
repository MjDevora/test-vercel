import './cat-card.css'
import React from 'react'
import ArrowLeft from '../icons/ArrowLeft'
import ArrowRight from '../icons/ArrowRight'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight, faTrash} from '@fortawesome/free-solid-svg-icons';

export interface CatCardProps {
  className?: string
  title: string
  price: number
  images: string[]
}

export const CatCard: React.FC<CatCardProps> = ({
  className = '',
  title,
  price,
}) => (
  <div className={className}>
    <div className="card">
      <div className="tarjeta">
        <button>
          <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
        <img
          src="https://cdn.shopify.com/s/files/1/0588/2812/8433/products/Hb50a9ded5b8d40b28c109685b878a425y.jpg?v=1638445133"
          className="imagenes"
        />
        <button>
          <FontAwesomeIcon icon={faChevronRight}/>
        </button>
        <div className="datosproducto">
          <p className="producto">{title}</p>
          <p className="precio">${price}</p>
        </div>
      </div>
    </div>
    <div>
      <button className="modif">Modificar</button>
      <button className="elim"><FontAwesomeIcon icon={faTrash}/></button>
    </div>
  </div>
)
