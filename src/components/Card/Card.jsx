import React, { useState } from "react";
import { useDispatchCart, useCart } from "../ContextReducer";

function Card(props) {
  const dispatch = useDispatchCart();
  const data = useCart();

  const [qty, setQty] = useState(1); // Initialize as a number
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem.id) {
        food = item;
        break;
      }
    }
    if (food.length !== 0) {
      if (food.size == size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem.id,
          price: finalPrice,
          qty: qty,
        });
        return;
      }
    } else if (food.size !== size) {
      await dispatch({
        type: "ADD",
        id: props.foodItem.id,
        name: props.foodItem.name,
        finalPrice: calculateFinalPrice(),
        qty: qty,
        size: size,
      });
      return;
    }
    await dispatch({
      type: "ADD",
      id: props.foodItem.id,
      name: props.foodItem.name,
      finalPrice: calculateFinalPrice(),
      qty: qty,
      size: size,})
  };

  
  const calculateFinalPrice = () => {
    if (size === "Half") {
      return qty * parseFloat(props.halfPrice); 
    } else if (size === "Full") {
      return qty * parseFloat(props.fullPrice);
    }
    return 0;
  };

  const finalPrice = calculateFinalPrice();

  return (
    <>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-64 mb-2">
        <div className="relative h-40 mx-4 -mt-3 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src={props.foodItem.img}
            alt="card-image"
            style={{ objectFit: "fill" }}
          />
        </div>
        <div className="p-4">
          <h5 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {props.foodItem.name}
          </h5>
        </div>
        <div className="p-4 pt-0">
          <select className="m-1" onChange={(e) => setSize(e.target.value)}>
            <option value="">Select Size</option>
            <option value="Half">Half ₹{props.halfPrice}</option>
            <option value="Full">Full ₹{props.fullPrice}</option>
          </select>
          <select
            className="m-1"
            onChange={(e) => setQty(parseInt(e.target.value))}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <div className="inline-flex m-2 text-lg">₹{finalPrice}/-</div>
        </div>
        <hr />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddToCart}
          disabled={!size} 
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default Card;
