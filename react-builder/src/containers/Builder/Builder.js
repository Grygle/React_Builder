import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Product from '../../components/Product/Product';

class Builder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
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