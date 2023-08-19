import React, { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); // eslint-disable-line

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  // const colon = seconds % 2 === 0 ? ":" : " "
  const colon = ":";

  return (
    <div className="container d-flex justify-content-center mt-5">
      <h1>
        {hours}
        {colon}
        {minutes < 10 ? "0" + minutes : minutes}
        {colon}
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
    </div>
  );
}

export default Clock;



//TODO hocanin cözümü
// import moment from "moment"
// import React, {useEffect,useState} from 'react'

// const Clock = () => {
//     const [time,setTime] = useState(moment())
    
// useEffect(()=>{
//     const times = setInterval(()=>{
//         setTime(moment());
//         console.log("merhaba");
//     },1000)

//     return()=>{
//       clearInterval(times)
//       console.log("baska sayfayay gidildigi icin setInterval was stopped");
//     }




//     //! sayfa ilk render edildiginde setInterval baslasin
// },[])

//   return (
//     <div>
//       {time.format("HH")}
//       {time.format("ss") % 2 === 0 ? ":" : " "}
//       {time.format("mm")}
//       {time.format("ss") % 2 === 0 ? ":" : " "}
//       {time.format("ss")}
//     </div>
//   );
// }

// export default Clock