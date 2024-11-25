import Header from "./components/Header";
import { useState } from "react";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Testimonial from "./components/Testimonial";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import Error from "./pages/Error";
import Login from "./pages/Login";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className={`scroll-w-0 ${darkTheme ? "dark" : ""}`}>
          <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen px-8">
            <Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Outlet />
            <Footer />
          </div>
        </div>
      ),
      children: [
        {
          path: '/',
          element: <div>
            <Main />
            <Testimonial />
          </div>
        },

        {
          path: "/about",
          element: <div>ff</div>,
        },

        {
          path: "/contact",
          element: <Footer />,
        },
        {
          path: "/login",
          element: <Login/>
        }
        
      ],
      errorElement: (
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Error/>
          <Footer />
        </div>
      ),
    },
  ]);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
