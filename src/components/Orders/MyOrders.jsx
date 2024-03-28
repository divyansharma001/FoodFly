import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function MyOrders() {
  const [ordersData, setOrdersData] = useState(null); // State to hold orders data

  useEffect(() => {
    const handleOrders = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail");
        if (!userEmail) {
          throw new Error("User email not found in localStorage");
        }

        const response = await axios.post("http://localhost:3000/api/orders", {
          email: userEmail,
        });

        if (response.status !== 200) {
          throw new Error("Failed to fetch orders");
        }
        setOrdersData(response.data); // Set orders data to state
      } catch (error) {
        console.error(error);
      }
    };

    handleOrders();
  }, []);

  return (
    <>
      <div className="bg-black text-white">
        <div className="flex items-center justify-center  bg-rose-900 rounded-xl mt-3">
          <h1 className="text-4xl p-4 rounded-md">My Orders</h1>
          <hr className="border-white" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </div>

      <div className="text-white">
        <table className="table-auto mt-5 mb-5 m-10 w-full">
          <thead>
            <tr>
              <th>S No.</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Size</th>
              <th>Price</th>
              <th>Order Date</th>
              <th></th>
             
            </tr>
          </thead>
          <tbody>
            {ordersData ? (
              ordersData.map((order, index) => (
                <tr key={order.order_id}>
                  <td className=" text-center">{index + 1}</td>
                  <td className=" text-center">{order.item_name}</td>
                  <td className=" text-center">{order.quantity}</td>
                  <td className=" text-center">{order.size}</td>
                  <td className=" text-center">{order.final_price}</td>
                  <td className=" text-center">{moment(order.order_date).format('MMMM Do YYYY')}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyOrders;
