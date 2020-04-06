import * as React from 'react';
import './App.css';
import { meats, vegetables, sides } from './foods';

const App = () => {
    const [basket, setBasket] = React.useState({
        meat: '',
        vegetable: '',
        side1: '',
        side2: '',
    });
    const [saved, setSaved] = React.useState({
        meat: '',
        vegetable: '',
        side1: '',
        side2: '',
    });

    const getRandomIngredient = (foodArray: string[]) => {
        return foodArray[Math.floor(Math.random() * foodArray.length)];
    };

    const generateBasket = () => {
        const newSide1 = getRandomIngredient(sides);
        let newSide2 = getRandomIngredient(sides);
        while (newSide2 === newSide1) {
            newSide2 = getRandomIngredient(sides);
        }
        setBasket({
            meat: getRandomIngredient(meats),
            vegetable: getRandomIngredient(vegetables),
            side1: newSide1,
            side2: newSide2,
        });
    };

    const saveIngredient = (category: string) => {
        setSaved({ ...saved, [category]: basket[category] });
    };
    return (
        <div className="App">
            <button onClick={generateBasket}>Generator chopped basket</button>
            <div>Random basket:</div>
            <div className={'btn-group'}>
                {Object.keys(basket).map((category) => {
                    if (basket[category] === '') return null;
                    let selected = basket[category] === saved[category];
                    return (
                        <button
                            className={'btn'}
                            disabled={selected}
                            onClick={() => saveIngredient(category)}>
                            {basket[category]}
                        </button>
                    );
                })}
            </div>
            <div className={'saved'}>
                <div>Saved ingredients:</div>
                {Object.keys(basket).map((category) => (
                    <div>
                        <span style={{ textTransform: 'capitalize' }}>
                            {category}:{' '}
                        </span>
                        {saved[category]}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
