import './page.css';
import DataView from '../components/views/DataView';
export default function ViewProfile (){
  return (
    <div className='ViewProfile'>

      <div className='header'>

      </div>

      <div className='menu'>

      </div>

      <div className='header-container'>
        <h1>Mi perfil</h1>
        <p className='description'>Administra tu cuenta</p>
      </div>

      <div className='information-container'>
        <DataView 
          dataname='Nombre y apellido'
          datainformation='Pedro Pascal'/>
        <DataView 
          dataname='Correo electrónico'
          datainformation='ppascal@gmail.com'/>
        <DataView 
          dataname='Número de télefono'
          datainformation='5593740284'/>
        <DataView 
          dataname='Género'
          datainformation='Masculino'/>
        <DataView 
          dataname='Fecha de nacimiento'
          datainformation='05/08/1987'/>
      </div>      
        
    </div>
  );
}