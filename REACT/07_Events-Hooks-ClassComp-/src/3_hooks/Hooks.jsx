import React, { useState } from "react";


const Hooks = () => {
  const [sayac, setSayac] = useState(0); //! sayac tanimliyor ve baslangic degerini 0 yapiyoruz.
  const [kisi, setKisi] = useState({
    isim: "Özlem",
    email: "ozlem@hotmail.com",
    yas: 39,
    renk: "red",
  });

  const arttir = () => {
    setSayac(sayac + 1);
  };

  const azalt = () => {
    setSayac(sayac - 1);
  };
  const degistir = () => {
    if (kisi.isim == "Özlem") {
      setKisi({
        isim: "Nihal",
        email: "nihal@hotmail.com",
        yas: 29,
        renk: "green",
      });
    } else {
      setKisi({
        isim: "Özlem",
        email: "ozlem@hotmail.com",
        yas: 39,
        renk: "red",
      });
    }
  };

  return( 
  <div className="container text-center ">
    <h2>*********************************************************</h2>
    <h1>useState hook</h1>
    <h2>COUNT: {sayac}</h2>
    <button className="btn btn-primary" onClick={arttir}>ARTTIR</button>
    <button className="btn btn-danger" onClick={azalt}>AZALT</button>
    <button className="btn btn-warning" onClick={()=>setSayac(0)}>TEMIZLE</button>
    <div className="text-center mt-4">
      <h1 className="text-danger">useState with Object</h1>
      <h2>{kisi.isim}</h2>
      <h3>{kisi.email}</h3>
      <h5>{kisi.yas}</h5>
      <button className="btn btn-success" onClick={degistir}>CHANGE</button>
    </div>
    <hr /> <hr />wd
  </div>);
};

export default Hooks;
