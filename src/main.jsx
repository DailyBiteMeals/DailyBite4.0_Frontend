import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Products from "./components/Products/Products.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import ProductPage from "./components/Products/ProductPage.jsx";
import BlogPage from "./components/Blogs/BlogPage.jsx";

// Another method to do the routing

// const router = createBrowserRouter([{
//   path: "/",
//   element: <Layout/>,
//   children: [
//     {
//       path: "/",
//       element: <Home/>
//     },
//     {
//       path: "/about",
//       element: <About/>
//     }
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<Products />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/blog/:id" element={<BlogPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
