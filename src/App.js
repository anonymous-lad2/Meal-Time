import Header from "./components/Header";
import { useState } from "react";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Testimonial from "./components/Testimonial";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import Error from "./pages/Error";
import Login from "./pages/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";
import SignUp from "./pages/SignUp";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <Provider store={Store}>
          <div className={`scroll-w-0 ${darkTheme ? "dark" : ""}`}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen px-8 py-24">
              <Header
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
              <Outlet />
              <Footer />
            </div>
          </div>
        </Provider>
      ),
      children: [
        {
          path: "/",
          element: (
            <div>
              <Home />
              <Main />
              <Testimonial />
            </div>
          ),
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
          element: <Login setIsLoggedIn={setIsLoggedIn} />,
        },

        {
          path: "/signup",
          element: <SignUp setIsLoggedIn={setIsLoggedIn}/>,
        },

        {
          path: "/cart",
          element: <Cart />,
        },

        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        },
      ],
      errorElement: (
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Header
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
          <Error />
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
