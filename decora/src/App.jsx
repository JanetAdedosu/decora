import data from "./data.js"

function App() {

  return (
    
      <div>
        <header>
          <a href ="/"><em>DECORA</em></a>
        </header>
        
        <main>
          <h1>Products</h1>
          <div className="products">
          {data.products.map((product)=> (
            <div className="product" key={product.slug}>
              {/* <a href={`/product/${product.slug}`}>  */}
              <img src={product.image} alt={product.name}/>
              {/* </a> */}
              <div className="product info">
               <a href={`/product/${product.slug}`}> 
              <p>{product.name}</p>
              </a>
              {/* <a href={`/product/${product.slug}`}> */}
              <p><strong>${product.price}</strong></p>
              
              <button>Add To Cart</button>
              </div>

            </div>))}
            </div>
        </main>
        
        </div>
    
  )
}

export default App;
