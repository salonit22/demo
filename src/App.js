import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router"
import Contact from "./components/Contact"
import About from "./components/About"
import Menu from "./components/Menu"
import Error from "./components/Error"
import Shimmer from "./components/shimmer"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"


// how to lazy load instamart?
const Instamart = lazy(() => import("./components/Instamart"))

const value = React.createElement("h1", { id: "head" }, "Hello World")

// its not react element HTML like or jsx like syntax
// const jsxheading = <h1 id="head">Hello World by jsx</h1>
const jsxheading = <h1 className="head">Hello World by jsx</h1>


const AppLayout = () => {
    return (
        <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </Provider>
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
    {path: '/cart', element: <Cart />},
    {path: '/instamart', element: <Suspense fallback={<Shimmer/>}><Instamart /></Suspense>},
    ],
    errorElement: <Error />
},
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)

