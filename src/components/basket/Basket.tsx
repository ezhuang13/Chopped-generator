import * as React from 'react';
import { meats, vegetables, sides } from '../../constants/foods';
import Ingredients from '../../types/Ingredients';
import BasketIngredient from './BasketIngredient';
import '../../App.css';
import FoodCategory from '../../types/FoodCategory';

interface BasketProps {
    saved: Ingredients;
    saveIngredient: (category: FoodCategory, ingredient: string) => void;
}

const Basket = (props: BasketProps) => {
    const [basket, setBasket] = React.useState({
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

    const saveIngredient = (category: FoodCategory, ingredient: string) => {
        props.saveIngredient(category, ingredient);
    };

    return (
        <div className="basketContainer">
            <button onClick={generateBasket}>Generator chopped basket</button>
            <div>Random basket:</div>
            <div className={'btn-group'}>
                {Object.keys(basket).map((category) => {
                    return (
                        <BasketIngredient
                            ingredient={basket[category]}
                            isAlreadySaved={
                                basket[category] === props.saved[category]
                            }
                            saveIngredient={saveIngredient}
                            category={category as FoodCategory}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Basket;
