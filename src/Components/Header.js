import './Header.css'
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Header=()=>{
    const totalItems = useSelector(state => state.cart.cartTotalQuantity);

    return(
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to='/'><img src='./images/logo.png' alt='website-logo' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Categories">Categories</NavLink>
                        </li>
                    </ul>
                
                    <div className='mx-3 cart'>
                        <Link to='/cart' className='link'>
                            <i className="fa-solid fa-cart-shopping me-2"><div className='num'>{totalItems}</div></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        
        </>
    );
}
export default Header;