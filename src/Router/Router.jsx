import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationCardDetails from "../Pages/donationCardDetails/donationCardDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('data.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
                loader: () => fetch('data.json')
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },

            {
                path: "/donationCardDetails/:id",
                element: <DonationCardDetails></DonationCardDetails>,
                loader: () => fetch('data.json')
            }
        ]
    }
])

export default myCreatedRoute;