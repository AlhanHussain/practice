import React ,{useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {

  const [foodCat,setFoodCat] =useState([])
  const [foodItem,setFoodItem] =useState([])

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        const data = await response.json();
        setFoodCat(data.categories); // Update to use 'categories' instead of 'category'
        setFoodItem(data.items); // Update to use 'items' instead of 'data'
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
useEffect(()=>{
  loadData()
},[])





  return (
    <div>
      <Navbar />
      <div>
        <Carousel />
      </div>
      <div className="container">
      {/* {
        foodCat && foodCat.length > 0
        ? foodCat.map((data) => {
            return (
              <div>Hello world</div>
            )
          })
        : <div>No food categories available</div>
      } */}
        <Card />

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
