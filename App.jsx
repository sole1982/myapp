import { useState } from 'react'
import './css/App.css'
import Nav from "./Nav";
import ProductDetail from './ProductDetail';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1/> 
      <Nav/>
      <ProductDetail/>
      <ProductDescription/>
      <ProductPrice/>
    </>
  )
}

export default App
