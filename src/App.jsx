import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Account from "./pages/Account/Account";
import { checkAuthLoader } from "./auth/auth";
import Welcome from "./pages/Welcome";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, path: "", element: <Home /> },
        { path: "/about-us", element: <About /> },
        { path: "/projects", element: <Projects /> },
        { path: "/blog", element: <Blog /> },
      ],
    },
    { path: "/welcome", element: <Welcome /> },
    {
      path: "/account",
      element: <Account />,
      loader: checkAuthLoader,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
