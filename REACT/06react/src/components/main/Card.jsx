import React from 'react'

const Card = (item) => {
  console.log(item);
  return (
    <div className='main-card'>
      <section className='sec-1'>
        <img src={item.src.large} alt="" />
      </section>
      <section className='sec-2'>
        <h3>{item.photographer}</h3>
      </section>
    </div>
  )
}

export default Card