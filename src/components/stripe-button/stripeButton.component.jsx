import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import image from '../../assets/logo2.jpg';

const StripeButton = ({ total_price }) => {
    const priceForStripe = total_price * 100;
    const key = 'pk_test_51LBz35SCuHaNP8RmJ1XifOanhTuuQGSQCPLTfNyLtZY6QcaG3Vzb7iotw3vSlhJRNl2oHikSGd17xOoi05XxCoVa00auOSwC0E';
    const token = (token) =>{
        alert('payment Successful');
        console.log(token);
    }
    return (
        <div>
            <StripeCheckout
            label="Pay Now"
            name = 'Project App'
            billingAddress   
            shippingAddress
            image='https://st2.depositphotos.com/1874273/6627/v/450/depositphotos_66279165-stock-illustration-abstract-butterfly-sign.jpg'
            description= {"Your Total: $" + total_price}
            amount= {priceForStripe}
            panelLabel= 'Pay Now'
            token={token}
            stripeKey= { key }
            currency="USD"
            allowRememberMe= {true}
            />
        </div>
    )
}

export default StripeButton;