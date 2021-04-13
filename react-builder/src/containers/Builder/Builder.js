import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Product from '../../components/Product/Product';
import Controls from '../../components/Product/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Product/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../hoc/errorHandler/errorHandler';

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.5,
    meat: 1.5,
    bacon: 0.6
}

class Builder extends Component {
    state = {
        ingredients: null,
        totalPrice: 2,
        canPurchase: false,
        buying: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        console.log(this.props);
        // axios.get('/ingredients.json')
        //     .then(response => {
        //         this.setState({ingredients: response.data});
        //     })
        //     .catch(error => {
        //         this.setState({error: true});
        //     })
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
        //alert('continue');
        // this.setState({loading: true});

        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice.toFixed(2),
        //     customer: {
        //         name: 'Tom Jones',
        //         address: {
        //             street: 'Test street 2',
        //             zipCode: '12312',
        //             city: 'Warsaw'
        //         },
        //         email: 'tset@test.com'
        //     },
        //     deliveryTime: 'fast'
        // }
        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({loading: false, buying: false});
        //     })
        //     .catch(error => {
        //         this.setState({loading: false, buying: false});
        //     });
        const queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price= ' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render(){
        const disabled = {
            ...this.state.ingredients
        }
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }
        let orderSummary = null;

        let product = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />

        if(this.state.ingredients !== null){
            product = (
                <Aux>
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
            )
            orderSummary =  <OrderSummary 
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                buyCancel={this.cancelBuyingHandler}
                buyContinue={this.continueBuyingHandler}/>
        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.buying} modalClosed={this.cancelBuyingHandler}>
                    {orderSummary}
                </Modal>
                {product}
            </Aux>
        );
    }
}

export default errorHandler(Builder, axios);
