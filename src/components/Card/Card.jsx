import React from 'react';

function Card(props) {
  
  return (
    <>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-64 mb-2">
        <div
          className="relative h-40 mx-4 -mt-3 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
        >
          <img src={props.img} alt="card-image" />
        </div>
        <div className="p-4">
          <h5 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {props.name}
          </h5>
          <p className="block font-sans text-sm antialiased font-light leading-relaxed text-inherit">
            {props.description}
          </p>
        </div>
        <div className="p-4 pt-0">
          <select className="m-1">
            {Array.from({ length: 6 }, (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select className="m-1">
            <option value="Half">Half</option>
            <option value="Full">Full</option>
          </select>

          <div className="inline-flex m-2 text-lg">Total Price</div>
        </div>
      </div>
    </>
  );
}

export default Card;
