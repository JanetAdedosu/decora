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
              <img src={product.image} alt={product.name}/>
              <div className="product info">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button>Add To Cart</button>
              </div>

            </div>))}
            </div>
        </main>
        
        </div>
    
  )
}

export default App;
