import * as React from 'react';
import '../../App.css';
import FoodCategory from '../../types/FoodCategory';

interface BasketIngredientProps {
    ingredient: string;
    isAlreadySaved: boolean;
    category: FoodCategory;
    saveIngredient: (category: FoodCategory, ingredient: string) => void;
}

const BasketIngredient = (props: BasketIngredientProps) => {
    const saveIngredient = () => {
        props.saveIngredient(props.category, props.ingredient);
    };

    return props.ingredient ? (
        <button
            className={'btn'}
            disabled={props.isAlreadySaved}
            onClick={saveIngredient}>
            {props.ingredient}
        </button>
    ) : null;
};

export default BasketIngredient;
