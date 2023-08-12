import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";     
//! Bootsrap icin sart.
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import data from "./data"



function App() {
  return (
    <div>
      <Navbar/>
      <CourseCard data = {data}/>
      <Footer/>  
    </div>
  );
}

export default App;
