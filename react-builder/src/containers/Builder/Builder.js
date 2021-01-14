import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Product from '../../components/Product/Product';

class Builder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render(){
        return (
            <Aux>
                <Product ingredients={this.state.ingredients}/>
                <div>Controls</div>
            </Aux>
        );
    }
}

export default Builder;