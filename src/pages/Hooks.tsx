import '../App.css'
import Cart from '../components/custom_hooks/Cart';
import ProductCard from '../components/custom_hooks/ProductCard';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';

const Hooks = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();
  return (
    <div className='app'>
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <main className='products'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
        <Cart
                    cart={cart}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                    total={total}
                  />
      </main>
    </div>
  )
}

export default Hooks