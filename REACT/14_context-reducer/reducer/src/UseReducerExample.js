import { useReducer } from "react";
// import { reducer, initialState } from "./reducer";
import load from "./img/loading-loading-gif.gif";

const UseReducerExample = () => {
  //todo action1 alttaki fetchDog functionun dan gelen payload.
  const reducerAA = (state1, action1) => {
    switch (action1.type) {
      case "START":
        return { ...state1, dog: "", loading: true }; //! dog:" " => yeni resim gelirken eski resmin ekranda kalmasini engelliyor.
      case "SUCCESS":
        return { ...state1, dog: action1.payload, loading: false };
      case "FAIL":
        return { ...state1, error: action1.payload, loading: false };
      default:
    }
  };
  const [state, dispatch1] = useReducer(reducerAA, {
    loading: false,
    dog: "",
    error: "",
  });
  const { dog, loading, error } = state;

  const fetchDog = () => {
    dispatch1({ type: "START" });
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        dispatch1({ type: "SUCCESS", payload: data.message });
      })
      .catch(() => {
        dispatch1({ type: "FAIL", payload: "DATA CAN NOT BE FETCHED!" });
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={fetchDog}
        disabled={loading}
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="" width="400px" />}
      {error && <h2>{error}</h2>}
      {loading && <img src={load} alt="" width="400px" />}
    </div>
  );
};

export default UseReducerExample;
