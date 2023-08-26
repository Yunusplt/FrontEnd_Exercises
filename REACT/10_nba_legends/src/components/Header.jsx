import React from 'react'
import logo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <div className="container text-center mt-4">
      <img src={logo} alt="Nba-logo" />
      <h2>NBA LEGENDS</h2>
    </div>
  );
}

export default Header