import React from 'react'

const Address = ({country,city}) => {
    console.log(country); //!Germany
    console.log(city);    //!Stuttgart
    
    return (
    <div>
        <h4> Country: {country} </h4>
        <h4> City: {city}</h4>
    </div>
  )
}

export default Address