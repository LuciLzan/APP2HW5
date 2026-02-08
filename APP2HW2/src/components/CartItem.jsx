import "./CartItem.css"

function CartItem({name,price,onClick}) {
    return (
        <div className="CartItemBox">
            <p className={"CartItemName"}>{name}</p>
            <p className={'CartItemPrice'}>{price}</p>
            <button className={"CartItemRemoveButton"} onClick={onClick}>Remove</button>
        </div>
    )
}

export {CartItem}