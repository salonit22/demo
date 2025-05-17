import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"


const value = React.createElement("h1", { id: "head" }, "Hello World")

// its not react element HTML like or jsx like syntax
// const jsxheading = <h1 id="head">Hello World by jsx</h1>
const jsxheading = <h1 className="head">Hello World by jsx</h1>

/*
Header
    - Logo
    - Nav
    - Search
    - Cart
    - Profile
Body
    - search
    - RestaurantList
        - RestaurantCard
            - Image
            - Name
            - Rating
            - Cuisines
            - Delivery Time
Footer
    - Links
*/




const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)

console.log(value)