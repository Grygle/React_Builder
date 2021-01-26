import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Product from '../../components/Product/Product';
import Controls from '../../components/Product/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Product/OrderSummary/OrderSummary';

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
        totalPrice: 2,
        canPurchase: false,
        buying: false
    }

    updateCanPurchaseState = (ingredients) => {
        //switch keys(string) to values
        const sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key]
            })
            .reduce((sum, element) => {
                return sum + element;
            }, 0)
        this.setState({canPurchase: sum > 0})
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
        this.updateCanPurchaseState(updatedIngredients);
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
            this.updateCanPurchaseState(updatedIngredients);
        }
    }

    buyHandler = () => {
        this.setState({buying: true});
    }

    cancelBuyingHandler = () => {
        this.setState({buying: false});
    }
    continueBuyingHandler = () => {
        alert('continue');
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
                <Modal show={this.state.buying} modalClosed={this.cancelBuyingHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        buyCancel={this.cancelBuyingHandler}
                        buyContinue={this.continueBuyingHandler}
                    />
                </Modal>
                <Product ingredients={this.state.ingredients}/>
                <Controls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabled}
                    canPurchase={this.state.canPurchase}
                    ordered={this.buyHandler}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default Builder;
