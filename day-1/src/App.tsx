import './App.css'
import stylo from './assets/stylo.png'
import mug from './assets/mug.jpeg'
import tshirt from './assets/tee-shirt.jpg'
import sweetshirt from './assets/sweet-shirt.png'
import { ProductCard } from './components/ProductCard'
import { Navbar } from './components/Navbar'
import { Navbartest } from './components/Navbar-test'
import { Products } from './products'





function App() {
  return (
    <div>
      <Navbartest title="Supinfo'Merch" />
      <Navbar title="Supinfo'Merch" />
      <h2>Products</h2>
      <div className="product">
        <ProductCard img={stylo} name="Stylo" description='Ceci est un stylo' price={5} />
        <ProductCard img={sweetshirt} name="Sweet-shirt" description='Ceci est un sweet-shirt' price={50} />
        <ProductCard img={tshirt} name="Tee-shirt" description='Ceci est un tee-shirt' price={20} />
        <ProductCard img={mug} name="Mug" description='Ceci est un mug' price={10} estEnPromo />
        {Products.map((product) => {
          return <ProductCard img={product.img} name={product.name} description={product.description} price={product.price} />;
        })}
      </div>
    </div>
  );
}
export default App
