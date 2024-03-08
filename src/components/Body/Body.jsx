import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'

function Body() {

  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async() =>{
    let response = await fetch("http://localhost:3000/api/foodData",{
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      }
    })
    response = await response.json();
    setfoodItem(response[0]);
    setfoodCat(response[1]);
    // console.log(response[0], response[1]);
  }

  useEffect( ()=>{
    loadData();
  }, [] )

  return (
   <>
   <div>

   <Carousel/>
   
   <Card img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   name="Food Item 1" description="Description" />
   <Card img="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   name="Food Item 2" description="Description" />
   <Card img="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   name="Food Item 3" description="Description" />
   <Card img="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
   name="Food Item 4" description="Description" />
   
   </div>
   </>
  )
}

export default Body