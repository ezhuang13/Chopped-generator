import * as React from 'react';
import logo from './logo.svg';
import './App.css';

const meats = ["Tuna", "Salmon", "Octopus", "Scallop", "Squid", "Cod", "Clam",
              "Chicken Thigh", "Chicken Breast", "White Fish",
              "Turkey Breast", "Turkey Drumstick",
              "Pork Ribs", "Pork Shoulder", "Pork Belly", "Pork Chop",
              "Duck Breast", 
              "Chuck Steak", "Beef Brisket",
              "Lamb Shanks", "Shrimp","Prawns",
              "Rabbit", "Pigeon", "Quail","Goose","Venison"];

const vegetables = ["Cauliflower", "Egg Plant", "Leeks", "Sweet Potato",
                    "Butternut Squash", "Shallots","Bok Choy", "Cherry Tomato", "Cactus", 
                    "Crimini Mushroom", "Portobello Mushroom", "Okra", "Kale"];

const sides = ["Red Wine", "Avocado",
              "Corn tortillas", "Mozarella", "Pickles","Wasabi","Gochujang", "Trail Mix",
              "Basil", "Cashews", "Dried cherries", "Chocolate covered Espresso beans",
              "Applesauce","Chips","Orange","Peaches","Old Bay Seasoning","Prosciutto"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      basket: { meat: '', vegetable: '', side1: '', side2: ''  },
      saved: { meat: '', vegetable: '', side1: '', side2: '' }
    };
  }

  getRandomIngredient = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  generateBasket = () => {
    const newSide1 = this.getRandomIngredient(sides);
    let newSide2 = this.getRandomIngredient(sides);
    while (newSide2 === newSide1) {
      newSide2 = this.getRandomIngredient(sides);
    }
    this.setState({ basket: {
      meat: this.getRandomIngredient(meats),
      vegetable: this.getRandomIngredient(vegetables),
      side1: newSide1,
      side2: newSide2,
    } });
  }

  saveIngredient = (category) => {
    let saved = { ...this.state.saved };
    saved[category] = this.state.basket[category];
    this.setState({ saved: saved });
  }
  render () {
  return (
      <div className="App">
        <button onClick={this.generateBasket}>Generator chopped basket</button>
        <div>Random basket:</div>
        <div className={"btn-group"}>
          {
            Object.keys(this.state.basket).map((category) => {
              if (this.state.basket[category] === '') return null;
              let selected = this.state.basket[category] === this.state.saved[category];
              return <button className={"btn"} disabled={selected} onClick={() => this.saveIngredient(category)}>
                      { this.state.basket[category] }
                    </button>
            })
          }
        </div>
        <div className={"saved"}>
          <div>Saved ingredients:</div>
          {
            Object.keys(this.state.basket).map((category) => 
              <div>
                <span style={{textTransform: 'capitalize'}}>{category}: </span>
                { this.state.saved[category] }
              </div>)
          }
        </div>
      </div>
    );
  }
}

export default App;
