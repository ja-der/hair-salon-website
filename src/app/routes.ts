import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Booking } from "./pages/Booking";
import { ClientInfo } from "./pages/ClientInfo";
import { Confirmation } from "./pages/Confirmation";
import { Location } from "./pages/Location";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/services",
        Component: Services,
    },
    {
        path: "/booking",
        Component: Booking,
    },
    {
        path: "/client-info",
        Component: ClientInfo,
    },
    {
        path: "/confirmation",
        Component: Confirmation,
    },
    {
        path: "/location",
        Component: Location,
    },
    {
        path: "/contact",
        Component: Contact,
    },
]);
