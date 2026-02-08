import './Header.css';
import {Link} from "react-router-dom";  // Add this line at the top
// Via: https://app.rize.education/courses/8156/resource/95fdbcdd-c9fd-47a6-840f-61cea1053c19?weekId=10972
// Header.jsx
function Header({items}) {
    return (
        <header className="app-header">
            <h1 className="logo">ComponentCorner</h1>
            <nav className="nav-menu">
                <Link to={"/"} className="nav-link">Home</Link>
                <Link  to={"/products"} className="nav-link">Products</Link>
                <Link  to={"/cart"} className="nav-link">Cart</Link>
            </nav>
            <div className="cart-container">
                <span className="cart-icon">🛒</span>
                <span className="cart-badge">{items.length}</span>
            </div>
        </header>
    );
}

export default Header;

export {Header};