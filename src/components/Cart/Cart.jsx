import React from "react";
import { useCart, useDispatchCart } from "../ContextReducer";

function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-800 dark:text-white">
          <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-md shadow-md text-center">
            <p className="text-lg">The cart is empty</p>
          </div>
        </div>
      </div>
    );
  }
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:3000/api/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });

    if (response.status === 200) {
      dispatch({ type: "DROP" });

      window.location.href = "https://buy.stripe.com/test_3cscNY8EV8tua6QdQQ";
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.finalPrice, 0);

  return (
    <div class="container mx-auto mt-5">
      <div class="overflow-x-auto">
        <table class="table-auto w-full text-white">
          <thead>
            <tr class="text-green-500 text-lg bg-gray-800">
              <th class="px-6 py-3"> </th>
              <th class="px-6 py-3">Name</th>
              <th class="px-6 py-3">Quantity</th>
              <th class="px-6 py-3">Option</th>
              <th class="px-6 py-3">Amount</th>
              <th class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index} class="border-b border-gray-200 bg-gray-900">
                <td class="px-6 py-4">{index + 1}</td>
                <td class="px-6 py-4">{food.name}</td>
                <td class="px-6 py-4">{food.qty}</td>
                <td class="px-6 py-4">{food.size}</td>
                <td class="px-6 py-4">{food.finalPrice}</td>
                <td class="px-6 py-4">
                  <button
                    type="button"
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      dispatch({ type: "REMOVE", index: index });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="mt-5">
          <h1 class="text-2xl text-green-500">Total Price: {totalPrice}/-</h1>
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5"
            onClick={handleCheckOut}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
