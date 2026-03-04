import CartItem from "./CartItem";

export type ProductType = {
  id: number;
  name: string;
  price: number;
};

export type CartItemType = ProductType & {
  quantity: number;
};

interface CartProps {
  cart: CartItemType[];
  total: number;
  onRemove: (itemId: number) => void;
  onUpdateQuantity: (itemId: number, quantity: number) => void;
}

const Cart = (props: CartProps) => {
  if (props.cart.length === 0) {
    return <div className="cart empty">Your cart is empty.</div>;
  }
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {props.cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={props.onRemove}
          onUpdateQuantity={props.onUpdateQuantity}
        />
      ))}
      <h3 className="cart-total">Total: ${props.total.toFixed(2)}</h3>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;
