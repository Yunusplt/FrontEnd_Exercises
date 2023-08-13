import React from "react";
import Address from "./Address";

const Person = (props) => {
  console.log(props); //! {name: 'Yunus Polat', img: 'https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg', tel: '545 552 52 52', country: 'Germany'}

  //! destruction
  const { name, img, tel, country } = props;
  console.log(name); //! Yunus Polat

  return (
    <div>
      <h1 style={{display:"inline-block", border:"2px solid red", padding:"2px 20px" }}>Props</h1>
      <h2>{name}</h2>
      <Address country={country} city="Stuttgart" />
      <img src={img} alt="avatar" width="200px" />
      <h4>TEL: {tel}</h4>
    </div>
  );
};

export default Person;
