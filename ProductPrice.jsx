import "./css/ProductPrice.css";
let precio = "$"
let sku = "1";
let cantidad = " 10"

function ProductPrice(){
    return (
    <>

     <ul  className="lista">
       <li className="elementLi ">Precio {precio}</li>
       <li className="elementLi " > SKU {sku}</li>
       <li  className="elementLi "> Cantidad Disponible {cantidad} </li>
     </ul>

     

    </>
    
    
    )
}

export default  ProductPrice;