import React, { useEffect, useState } from 'react'

const OrnekUseEffect = () => {

  const [sayac, setSayac] = useState(0)

  useEffect(() => {

    const internal = setInterval(() => {
      console.log("interval is running");
      console.log("Hello");
      
    }, 1000);

    return()=>{
      clearInterval(internal)
      console.log("component died");
    }
  
  }, [])
  //!! useEffect hook'unun içindeki return bloğu, bileşenin montajı veya güncellemesi sonucunda çalışan bir işlevi temsil eder.

  return (
    <div className='mb-5'>
      <h3>COUNT : {sayac}</h3>
      <button className='btn btn-warning' onClick={()=>setSayac(sayac+1)}> Increase </button>
    </div>
  )
}

export default OrnekUseEffect