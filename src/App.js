import * as React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [meat, setMeat] = React.useState('');
  const [vegetable, setVegetable] = React.useState('');
  const [side1, setSide1] = React.useState('');
  const [side2, setSide2] = React.useState('');
  const [savedMeat, setSavedMeat] = React.useState('');
  const [savedVegetable, setSavedVegetable] = React.useState('');
  const [savedSide1, setSavedSide1] = React.useState('');
  const [savedSide2, setSavedSide2] = React.useState('');
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
  
  const getRandomIngredient = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  const generateBasket = () => {
    setMeat(getRandomIngredient(meats));
    setVegetable(getRandomIngredient(vegetables));
    const newSide1 = getRandomIngredient(sides);
    setSide1(newSide1);
    let newSide2 = getRandomIngredient(sides);
    while (newSide2 === newSide1) {
      newSide2 = getRandomIngredient(sides);
    }
    setSide2(newSide2);
  }

  const saveIngredient = (category) => {
    switch (category) {
      case 'meat':
        setSavedMeat(meat);
        break;
      case 'vegetable':
        setSavedVegetable(vegetable);
        break;
      case 'side1':
        setSavedSide1(side1);
        break;
       case 'side2':
        setSavedSide2(side2);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <button onClick={generateBasket}>Generator chopped basket</button>
      <div>Random basket:</div>
      <div onClick={() => saveIngredient('meat')}>{meat}</div>
      <div onClick={() => saveIngredient('vegetable')}>{vegetable}</div>
      <div onClick={() => saveIngredient('side1')}>{side1}</div>
      <div onClick={() => saveIngredient('side2')}>{side2}</div>
      <div className={"saved"}>
        <div>Saved ingredients:</div>
        <div>Meat: {savedMeat}</div>
        <div>Vegetable: {savedVegetable}</div>
        <div>Side: {savedSide1}</div>
        <div>Side: {savedSide2}</div>
      </div>
    </div>
  );
}

export default App;
