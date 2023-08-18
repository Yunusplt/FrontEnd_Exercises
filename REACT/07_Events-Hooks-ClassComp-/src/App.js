import React from "react"
import Events from "./1_events_hooks_intro/Events";
import Counter from "./2_classComponents/Counter";
import Hooks from "./3_hooks/Hooks";
import Form from "./4_forms/Form";
import MouseKeyboard from "./5_mouse_keyBoard/MouseKeyboard";
import "bootstrap/dist/css/bootstrap.min.css";                  //! Bu nereden geldi?

function App() {
  return (
    <div>
      <Events/>
      <Counter/>
      <Hooks/>
      <Form/>
      <MouseKeyboard/>
    </div>
  );
}

export default App;
