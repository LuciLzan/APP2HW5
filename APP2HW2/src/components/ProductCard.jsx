//Adapted from https://app.rize.education/courses/8156/resource/1f6287eb-b9a5-4052-9b8c-29e987b37a75?weekId=10972
import './ProductCard.css';
// ProductCard.jsx
function ProductCard({name, price, image, description, onClick}) {
    return (
        <div className="product-card">
            <div className="product-header">
                <img
                    src={image}
                    alt="Product Image"
                    className="image"
                />
                <div className="user-info">
                    <h3 className="product-name">{name}</h3>
                    <span className="product-price">{price}</span>
                </div>
            </div>
            <p className="product-description">
                {description}
            </p>
            <button onClick={onClick}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;