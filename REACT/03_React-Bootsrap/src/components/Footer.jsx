import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Navbar className='fixed-bottom bg-dark text-white text-center d-inline'>
        <p>Copyright {new Date().getFullYear()} </p>
      </Navbar>
    </div>
  )
}

export default Footer

//! text-center  sadece yazilari ve inlinelari center yapar. Blog element oldugu icin ortalanmaz