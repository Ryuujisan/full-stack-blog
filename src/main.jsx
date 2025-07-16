import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayaut from "./layauts/MainLayaut.jsx";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Homepage from "./routes/Homepage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import Write from "./routes/Write.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";
import {ClerkProvider} from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

console.log("publish key: " + PUBLISHABLE_KEY);

const router = createBrowserRouter([
    {
        element: <MainLayaut/>,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/posts",
                element: <PostListPage/>,
            },
            {
                path: "/:slug",
                element: <SinglePostPage/>,
            },
            {
                path: "/write",
                element: <Write/>,
            },
            {
                path: "/login",
                element: <LoginPage/>,
            },
            {
                path: "/Register",
                element: <RegisterPage/>,
            },
        ]
    }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
          <RouterProvider router={router} />
      </ClerkProvider>

  </StrictMode>,
)
