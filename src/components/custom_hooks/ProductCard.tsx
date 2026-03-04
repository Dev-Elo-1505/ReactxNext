import { FaShoppingCart } from "react-icons/fa";
import type { ProductType } from "./Cart";

interface ProductCardProps {
  product: ProductType;
  onAddToCart: (product: ProductType) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="product-cart">
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
