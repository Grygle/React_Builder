import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Product from '../../components/Product/Product';
import Controls from '../../components/Product/Controls/Controls';

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.5,
    meat: 1.5,
    bacon: 0.6
}

class Builder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        //state should be updated in a immutable way
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAdd = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount > 0){
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const priceReduce = INGREDIENT_PRICE[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceReduce;
    
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            })
        }
    }

    render(){
        const disabled = {
            ...this.state.ingredients
        }
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }
        return (
            <Aux>
                <Product ingredients={this.state.ingredients}/>
                <Controls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabled}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default Builder;
