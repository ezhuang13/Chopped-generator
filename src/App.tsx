import * as React from 'react';
import './App.css';
import Basket from './basket/Basket';
import SavedIngredients from './savedIngredients/SavedIngredients';
import FoodCategory from './types/FoodCategory';

const App = () => {
    const [saved, setSaved] = React.useState({
        meat: '',
        vegetable: '',
        side1: '',
        side2: '',
    });

    const saveIngredient = (category: FoodCategory, ingredient: string) => {
        setSaved({ ...saved, [category]: ingredient });
    };
    return (
        <div className="App">
            <Basket saved={saved} saveIngredient={saveIngredient} />
            <SavedIngredients saved={saved} />
        </div>
    );
};

export default App;
