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
      ],
      totalQuantity: 0 // Initialize total quantity
    };
  }

  componentDidMount() {
    this.calculateTotalQuantity(); // Calculate total quantity on mount
  }

  // Function to calculate total quantity
  calculateTotalQuantity = () => {
    const { products } = this.state;
    const totalQuantity = products.reduce((total, product) => total + product.value, 0);
    this.setState({ totalQuantity });
  };

  render() {
    const { products, totalQuantity } = this.state;

    return (
      <div className="App">
        <header className="App-header"> 
        <h1>Shop to React</h1>
        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} /> 
          <span> {totalQuantity}</span>    {/* Display total quantity */}
          <span> items</span>
        </div>
        </header>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-description">{product.desc}</div>
              <div className="product-content">
                <img src={product.image} alt={product.desc} />
                <div className="product-value">
                  <input type="text" value={product.value} />
                  <span> quantity</span>
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>
    );
  }
}

export default App;
