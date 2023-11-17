import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import HomePage from "../pages/index";
import About from "../pages/About";
import Blog from "../pages/blogs";
import Post from "../pages/blogs/_id"

import ErrorPage from "../component/error";
import { posts, postById } from "../api/louder";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blog',
                element: <Blog />,
                loader: posts
            },
            {
                path: '/blog/:id',
                element: <Post />,
                loader: postById
            }
        ]
    }
])