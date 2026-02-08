import ProductCard from "../components/ProductCard.jsx";

function ProductsPage({products,addToCart}) {

    return (
        <>
            <div>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                        onClick={() => addToCart(product.id)}
                    />
                ))}
            </div>
        </>

    )
}

export {ProductsPage};