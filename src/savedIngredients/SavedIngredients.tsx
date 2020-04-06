import * as React from 'react';
import '../App.css';
import Ingredients from '../types/Ingredients';

interface SavedIngredientsProps {
    saved: Ingredients;
}

const SavedIngredients = (props: SavedIngredientsProps) => {
    return (
        <div className={'saved'}>
            <div>Saved ingredients:</div>
            {Object.keys(props.saved).map((category) => (
                <div>
                    <span style={{ textTransform: 'capitalize' }}>
                        {category}:{' '}
                    </span>
                    {props.saved[category]}
                </div>
            ))}
        </div>
    );
};

export default SavedIngredients;
