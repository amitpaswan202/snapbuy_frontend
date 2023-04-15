import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaData from '../layout/MetaData';
import { clearCart } from '../../actions/cartActions';
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux

const OrderSuccess = () => {
    const dispatch = useDispatch(); // Get the dispatch function from react-redux

    useEffect(() => {
        // Clear cart items when component mounts
        dispatch(clearCart());
    }, [dispatch]); // Empty dependency array to only run the effect once, when component mounts

    return (
        <Fragment>

            <MetaData title={'Order Success'} />

            <div className="row justify-content-center">
                <div className="col-6 mt-5 text-center">
                    <img className="my-5 img-fluid d-block mx-auto" src="/images/order_success.png" alt="Order Success" width="200" height="200" />

                    <h2>Your Order has been placed successfully.</h2>

                    <Link to="/orders/me">Go to Orders</Link>
                </div>

            </div>

        </Fragment>
    )
}

export default OrderSuccess;