import "./Hero.css"
import {Link} from "react-router-dom";

function Hero() {
    return (
        <div className="hero">
            <h3>Weclome to Component Corner</h3>
            <h4>Discover our amazing selection of components, right here on our online store</h4>
            <Link className={"button"} to={"/products"}>Shop Now</Link>
        </div>
    )
}

export {Hero};