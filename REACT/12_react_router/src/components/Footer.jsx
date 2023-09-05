import React from 'react'

const Footer = () => {
  return (
    <div className="bg-dark text-white text-center p-4 fixed-bottom">
      <p>
        Copyright {new Date().getFullYear()} - <span>designed by <i>Polat</i></span>
      </p>
    </div>
  );
}

export default Footer