import Header from "./components/ui/Header";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/popular-destinations",
                element: <Destination />,
            },
            {
                path: "/our-features",
                element: <About />,
            },
            {
                path: "/contacts",
                element: <Contact />,
            },
        ],
    },
]);
const App = () => {
    return (
        <>
            <RouterProvider router={router} />;
        </>
    );
};
export default App;
