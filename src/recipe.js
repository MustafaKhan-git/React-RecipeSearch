import React from 'react';
import './App.css'


const Recipe = ({title, calories, image, ingredients}) =>{
    return(
        <div className="container">
            <h1>{title}</h1>
            <div className="recipe-card">
            <img src={image} alt=""/>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            </div>
        </div>
    )
}

export default Recipe