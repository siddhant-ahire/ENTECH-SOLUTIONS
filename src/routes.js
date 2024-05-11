import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import Clients from "./pages/Clients";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";


import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // Your App component that includes the Header and Outlet
    children: [
      { path: "/", element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "services", element: <Services /> },
      { path: "projects", element: <Projects /> },
      { path: "blogs", element: <Blogs /> },
      { path: "clients", element: <Clients /> },
      { path: "career", element: <Career /> },
      { path: "contact-us", element: <ContactUs /> },
    ],
  },
  ]);

export default router