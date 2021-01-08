import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Product from '../../components/Product/Product';

class Builder extends Component {
    render(){
        return (
            <Aux>
                <Product />
                <div>Controls</div>
            </Aux>
        );
    }
}

export default Builder;