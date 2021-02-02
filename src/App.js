import React,{useState} from 'react';
import Carrito from './components/Carrito';
import Footter from './components/Footer';
import Header from './components/Header';
import Producto from './components/Producto';



function App() {


// Crear listado de productos
const[productos,guardarProductos]=useState([
  { id:1, nombre:'Camisa ReactJS', precio:50 },
  { id:2, nombre:'Camisa Node.js', precio:40 },
  { id:3, nombre:'Camisa VueJS', precio:30 },
  { id:4, nombre:'Camisa Angular', precio:20 },
]);

//Satate para un carrito de compras
const [carrito,agregarProducto] = useState([]);

//Obtener la fecha
const fecha = new Date().getFullYear();

  return (
    <>
      <Header
        titulo='Tienda Virtual'
      />
      
      <h1>Lista de Productos</h1>
      {productos.map(producto=>(
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footter
      fecha={fecha}
      />
    </>
  );
}

export default App;
