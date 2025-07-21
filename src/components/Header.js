import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState('login');
    const cartItems = useSelector((store) => store.cart.items || []);
    console.log(cartItems);
    return (
        <div className="header ">
            <img className="head-logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="></img>
            <ul className="head-menu">
                <li><Link to ="/">Home</Link></li>
                <li ><Link to ="/about">About</Link></li>
                <li><Link to ="/contact">Contact</Link></li>
                <li><Link to ="/instamart">Instamart</Link></li>
            </ul>
            <div className="head-icon-wrap">
                <button className="head-login-button" onClick={() => { 
                    isLoggedIn === 'login' ? setIsLoggedIn('logout') : setIsLoggedIn('login');
                }}>{isLoggedIn}</button>
                <span className="pl-3 text-lg">
                   <Link to = "/cart"><img
                        src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                        alt="cart"
                        className=" w-8 h-8"
                       
                    /></Link> 
                </span>
            {cartItems.length > 0 && <div className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center absolute top-5 right-10 text-xs font-semibold">
                { <span>{cartItems.length}</span>}
            </div>}
                <img className="head-profile" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile"></img>
            </div>
        </div>
    )
}

export default Header;