import { useState } from "react";
import { Link } from 'react-router';


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState('login');
    return (
        <div className="header">
            <img className="head-logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="></img>
            <ul className="head-menu">
                <li><Link to ="/">Home</Link></li>
                <li ><Link to ="/about">About</Link></li>
                <li><Link to ="/contact">Contact</Link></li>
                <li>Cart</li>
            </ul>
            <div className="head-icon-wrap">
                <button className="head-login-button" onClick={() => { 
                    isLoggedIn === 'login' ? setIsLoggedIn('logout') : setIsLoggedIn('login');
                }}>{isLoggedIn}</button>
                <img className="head-cart" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="cart"></img>
                <img className="head-profile" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile"></img>
            </div>
        </div>
    )
}

export default Header;