import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider.js';
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //Add item to basket
        console.log("add item to basket");

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            }
        });
    };


    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <div className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => {
                            return <p><StarRateIcon /></p>
                        })
                    }
                </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Cart</button>

        </div>
    )
};

export default Product;
