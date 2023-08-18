import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { sayac: props.count || 0 };
  }

  arttir() {
    this.setState({ sayac: this.state.sayac + 1 });
  }
  //!arrow function kullandığımız zaman bind etmeye gerek yok
  azalt = () => {
    this.setState({ sayac: this.state.sayac - 1 });
  };
  //! Metodumuz default olarak class a bind değil, bu yüzden this keyword ünü kullanamıyoruz.
  //* React tarafından tanımlanan method lar default olarak class a bind edilir (bağlanır).
  //* Bu nedenle, metodlarımızı constructor daki class a bind etmeliyiz veya automatic binding için arrow function kullanabiliriz.
  render() {
    return (
      <div className="container text-center mt-4">
        <h1>sayac:{this.state.sayac}</h1>
        <button className="btn btn-primary" onClick={this.arttir.bind(this)}>
          ARTTIR
        </button>

        <button className="btn btn-danger" onClick={this.azalt}>
          AZALT
        </button>
        <hr /> <hr />
      </div>
    );
  }
}

export default Counter;