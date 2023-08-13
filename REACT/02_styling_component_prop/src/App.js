import React from 'react';
import Inline from './inline_css/Inline'; 
import Internal from './internal_css/Internal';            
import Externall from './external_css/Externall';
import Person from './props/Person';
//! componentleri import et. 


function App() {
  return (
    <div>
    <hr />
    <hr />
      <h1
        style={{
          display: "inline-block",
          border: "2px solid red",
          padding: "2px 20px",
        }}
      >
        Styling
      </h1>
      <Inline />
      <hr />
      <Internal />
      <hr />
      <Externall />
      <hr />
      <hr />
      <Person
        name="Yunus Polat"
        img="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__480.jpg"
        tel="545 552 52 52"
        country="Germany"
      />
      {/* Address compenentini burada degil. Person compenentinin icinde cagiriyorum. Person'a buradan prop yolluyorum*/}
      <hr />
      <hr />
    </div>
  );
}

export default App;
