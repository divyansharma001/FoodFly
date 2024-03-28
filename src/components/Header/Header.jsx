import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";
import { useCart } from "../ContextReducer";

function Header() {
  const [cartView, setcartView] = useState(false);
  const navigate = useNavigate();

  let data = useCart();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src="./food-location-svgrepo-com.svg"
              alt="Foodfly"
            />
            <Link to="/">
              <h3 className="text-white rounded-md px-3 py-2 text-sm font-medium">
                FoodFly
              </h3>
            </Link>
          </div>

          <div className="flex space-x-4">
            {localStorage.getItem("authToken") ? (
              <div>
                <Link
                  to="/orders"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  My Orders
                </Link>
                <Link
                  className="relative text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium sm:text-sm"
                  onClick={() => setcartView(true)}
                >
                  My Cart
                  <span className="flex absolute top-0 end-0 -mt-2 -me-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
                    {data.length==0?(<></>):(
                    <span className="relative inline-flex text-xs bg-red-500 text-white rounded-full py-0.5 px-1.5">
                      {data.length}
                    </span>)}
                  </span>
                </Link>
                {cartView ? (
                  <Modal onClose={() => setcartView(false)}>
                    <Cart />
                  </Modal>
                ) : null}
              </div>
            ) : (
              ""
            )}
          </div>

          {!localStorage.getItem("authToken") ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
              <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <Link to="/login">Login</Link>
              </button>
              <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <Link to="/signup">Sign up</Link>
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={handleLogout}
                className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
              >
                <Link to="/logout">Logout</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
