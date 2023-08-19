import React, { useState } from "react";
import { FaGooglePlus, FaReact } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";



const MouseKeyboard = () => {
  const [xEkseni, setXekseni] = useState(0);
  const [yEkseni, setYekseni] = useState(0);
  const [inputData, setInputData] = useState("");
  const [divXEkseni, setDivX] = useState(0)
  const [divYEkseni, setDivY] = useState(0)
  const [movXEkseni, setMovX] = useState(0)
  const [movYEkseni, setMovY] = useState(0)

  //todo onMouseMove mousemun sayfa üzerindeki hareketlerini inceler. coordinat takibi yapmakta kullanilabilir.
  //! client görünen ekranin sol üstten bulundugun yere uzakligi.
  //! page   görünen ekranin sag üstten bulundugun yere uzakligi
  //! layer or offset div icerisindeki uzaklik. 

  const mouseOlayi = (e) => {
    console.log(e);
    // console.log(e.clientX,e.clientY);
    // console.log(e.pageX,e.pageY);
    // setXekseni(e.pageX);
    // setYekseni(e.pageY);
    setXekseni(e.clientX);
    setYekseni(e.clientY);
  };
  const mouseOlayi2 = (e) => {
    console.log(e);
    setDivX(e.nativeEvent.layerX);
    setDivY(e.nativeEvent.layerY);
    setMovX(e.nativeEvent.offsetX)
    setMovY(e.nativeEvent.offsetY)

  };

  const keyDownOlayi = (e) => {
    console.log(e);
    console.log(e.keyCode);
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("Lütfen harf giriniz.");
    } else alert("Tebrikler harf girdiniz.");
  };

  return (
    <div className="container text-center mt-4 d-flex flex-column align-items-center mb-5 position-relative bg-info"
    onMouseMove={mouseOlayi2}
    >
      <h2 className="text-danger">MOUSE EVENT</h2>
      <h5 className="position-absolute top-0 end-0 "> <HiHeart/>  Layer X: <span>{divXEkseni}</span> Y: <span>{divYEkseni}</span></h5>
      <h5 className="position-absolute top-0 end-0  mt-3">offset X: <span>{movXEkseni}</span> Y: <span>{movYEkseni}</span></h5>
      <p>X ve Y</p>
      <p className="text-danger fw-bold">
        {xEkseni} {yEkseni}
      </p>
      <div
        className="bg-success text-light w-50 p-4"
        id="coord"
        onMouseMove={mouseOlayi}
      >
        KOORDINATLAR <FaReact /> <FaGooglePlus />
      </div>

      <h2 className="text-danger mt-4">
        Keyboard-Clipboard Events <span>{inputData}</span>
      </h2>
      <input
        type="text"
        className="form-control"
        onKeyDown={keyDownOlayi}
        onChange={(e) => setInputData(e.target.value)}
      />
    </div>
  );
};

export default MouseKeyboard;
