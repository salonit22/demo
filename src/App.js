import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router"
import Contact from "./components/Contact"
import About from "./components/About"
import Menu from "./components/Menu"
import Error from "./components/Error"

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
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {path : '/',
    element: <AppLayout />,
    children:[
    {path: '/', element: <Body />},
    {path: '/about', element: <About />},
    {path: '/contact', element: <Contact />},
    {path: '/restaurant/:id', element: <Menu />},
    ],
    errorElement: <Error />
},
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)

