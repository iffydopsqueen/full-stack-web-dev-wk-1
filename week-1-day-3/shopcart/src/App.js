// Required Library Components 
import "./styles.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          image: "./products/cologne.jpg",
          desc: "Unisex Cologne",
          value: 0
        },
        {
          id: 2,
          image: "./products/iwatch.jpg",
          desc: "Apple iWatch",
          value: 0
        },
        {
          id: 3,
          image: "./products/mug.jpg",
          desc: "Unique Mug",
          value: 0
        },
        {
          id: 4,
          image: "./products/wallet.jpg",
          desc: "Mens Wallet",
          value: 0
        }
      ]
    };
  }

  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <header className="App-header"> 
          <h1>
            <FontAwesomeIcon icon={faShoppingCart} /> My Shopping Cart
          </h1>
          <div className="product-list">
            { products.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.desc} />
                <div>{product.desc}</div>
                <div>Value: ${product.value}</div>
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
