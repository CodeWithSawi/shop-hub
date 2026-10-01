import { Link } from "react-router-dom";
import { getProducts } from "../data/products";

const ProductCard = () => {
  const products = getProducts();

  return (
    <div className="container">
      <h2 className="page-title">Discover Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} className="product-card-image" />
            <div className="product-card-content">
              <h3 className="product-card-name">{product.name}</h3>
              <p className="product-card-price">{product.price}</p>
              <div className="product-card-actions">
                <Link to="/" className="btn btn-secondary">
                  View Details
                </Link>
                <Link className="btn btn-primary">Add to cart</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
