import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

function Body() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:3000/api/foodData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <div
          className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495214783159-3503fd1b572d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            height: "400px",
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-white">
                <h2 className="mb-4 text-4xl font-semibold">FoodFly</h2>
                <h4 className="mb-6 text-xl font-semibold">
                  Explore top-notch cuisine across diverse categories at the
                  finest restaurants, cafés, and bars.
                </h4>
                <div className="max-w-md mx-auto">
                  <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>

                    <input
                      className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                      type="text"
                      id="search"
                      placeholder="Discover delectable dishes..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          {foodCat.length !== 0 &&
            foodCat.map((data) => (
              <div key={data.id}>
                <div className="text-3xl text-white mt-5">{data.name}</div>
                <hr />
                {foodItem.length !== 0 ? (
                  <div className="flex flex-wrap justify-evenly">
                    {foodItem
                      .filter(
                        (item) =>
                          item.categoryname === data.name &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div key={filterItems.id} className="p-4">
                            <Card
                              foodItem={filterItems}
                              halfPrice={filterItems.half_price}
                              fullPrice={filterItems.full_price}
                            />
                          </div>
                        );
                      })}
                  </div>
                ) : (
                  <div>No such data found</div>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Body;
