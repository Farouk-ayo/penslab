import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, path: "", element: <Home /> },
        { path: "login", element: <About /> },
        { path: "reset-password", element: <Projects /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
