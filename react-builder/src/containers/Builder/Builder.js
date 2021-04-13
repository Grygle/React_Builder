import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary';
import Product from '../../components/Product/Product';
import Controls from '../../components/Product/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Product/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../hoc/errorHandler/errorHandler';
import * as actionTypes from '../../store/actions';

class Builder extends Component {
    state = {
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
        return sum > 0;
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

        this.props.history.push('/checkout');
    }

    render(){
        const disabled = {
            ...this.props.ing
        }
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }
        let orderSummary = null;

        let product = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />

        if(this.props.ing !== null){
            product = (
                <Aux>
                    <Product ingredients={this.props.ing}/>
                    <Controls 
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabled}
                        canPurchase={this.updateCanPurchaseState(this.props.ing)}
                        ordered={this.buyHandler}
                        price={this.props.price}
                    />
                </Aux>
            )
            orderSummary =  <OrderSummary 
                ingredients={this.props.ing}
                price={this.props.price}
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

const mapStateToProps = state => {
    return {
        ing: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Builder, axios));
