import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();

        this.setState({loading: true});

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Tom Jones',
                address: {
                    street: 'Test street 2',
                    zipCode: '12312',
                    city: 'Warsaw'
                },
                email: 'tset@test.com'
            },
            deliveryTime: 'fast'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
        
    }

    render(){
        let form = (
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Name" />
                <Input inputtype="input" type="email" name="email" placeholder="Email" />
                <Input inputtype="input" type="text" name="street" placeholder="Street" />
                <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
                <Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;