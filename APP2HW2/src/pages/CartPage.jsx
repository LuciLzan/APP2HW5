import {CartItem} from "../components/CartItem.jsx";

function CartPage({cart,products,removeFromCart}) {
    return (
        <>
            <h2>Items in Cart:</h2>
            {cart.length > 0 ?
                <>
                    {products.filter((product) => {
                        return cart.indexOf(product.id) !== -1
                    }).map((product) => (
                        <CartItem
                            name={product.name}
                            price={product.price}
                            onClick={() => removeFromCart(product.id)}
                        />
                    ))}
                    <h3>Total price: ${products.filter((product) => {
                        return cart.indexOf(product.id) !== -1
                    }).reduce((total, product) => total + product.price, 0).toFixed(2)
                    }</h3>
                </>
                :
                <h3>There are no items in your cart</h3>
            }
        </>

    )
}

export {CartPage};