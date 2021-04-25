import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import "./CheckoutProduct.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">

            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {basket?.length === 0 ? (
                    < div >
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>You have no items in cart. To buy one or more item click "Add To Basket" next to the items</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title"> Your Shopping Basket </h2>
                        {/* List of all the items in check out */}
                        {basket.map(item => (
                            <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
                        ))}

                    </div>
                )}

            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    Subtotal
                    <Subtotal />
                </div>
            )}

        </div >
    );
}

export default Checkout
