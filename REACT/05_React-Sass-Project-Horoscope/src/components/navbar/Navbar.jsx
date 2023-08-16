import React from 'react'
import logo from "../../helpers/logo.png"
import "./Navbar.scss"


const Navbar = () => {
  return (
    <div className="container-navbar">
      <section>
        <img src={logo} alt="logo" width="100px" />
      </section>
      <section className="links">
        <a href="#">DAILY</a>
        <a href="#">TAROT</a>
        <a href="#">ARTICLE</a>
        <a href="#">CONTACT</a>
        <a href="#">HOROSCOPE</a>
      </section>
    </div>
  );
}

export default Navbar