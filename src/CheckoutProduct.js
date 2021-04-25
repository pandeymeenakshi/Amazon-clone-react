import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ basket }, disptch] = useStateValue();
    console.log(id, title, image, price, rating);
    const removeFromBasket = () => {
        //To remove Item from Basket
        disptch({
            type: "REMOVE_FROM_BASKET",
            id: id
        }
        );

    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title"> {title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => {
                            return <p><StarRateIcon /></p>
                        })
                    }
                </div>

                <button onClick={removeFromBasket}>Remove From Basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
