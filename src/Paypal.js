import React , { useState,useEffect, useRef} from 'react';
import { Container } from 'react-bootstrap';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './Paypal.css';



// This is a Functional Component

const Paypal = function () {

    const [amount, setAmount] = useState(5);
    const [orderID, setOrderID] = useState(false);

    function createOrder(data, actions) {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            value: amount,
                        },
                    },
                ],
            })
            .then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });

    }

    function onChange({ target: { value } }) {
        setAmount(value);
        setOrderID(false);
    }
    
 
  

    return (

        <div>
    
        <PayPalScriptProvider options={{ "client-id": "AQPppW3ngo6vadS11CycreIZ2gDrHp6-v9dVSJpAYhEGLVYf6s_TTb6AfOi84w4q6YDiPXXRuT_DDAnS&currency=USD" }}>
        <select onChange={onChange} name="amount" id="amount">
                <option value="5.00">$5.00</option>
                <option value="10.00">$10.00</option>
                <option value="25.00">$25.00</option>
                <option value="50.00">$50.00</option>
                <option value="100.00">$100.00</option>

            </select>
            <p>Transaction ID: {orderID ? orderID : "Not Yet Completed"}</p>
            <PayPalButtons createOrder={createOrder}  forceReRender={amount}  />
           
    </PayPalScriptProvider>

    </div>
        )

        
}




export default Paypal;