import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                index:true,
                element:<Home />

            },
            {
                path: "/about/:id",
                element: <About />
            }
        ]
    }
])
