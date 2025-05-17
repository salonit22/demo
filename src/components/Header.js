const Header = () => {
    return (
        <div className="header">
            <img className="head-logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="></img>
            <ul className="head-menu">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            <div className="head-icon-wrap">
                <img className="head-cart" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="cart"></img>
                <img className="head-profile" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile"></img>
            </div>
        </div>
    )
}

export default Header;