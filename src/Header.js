import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ basket }] = useStateValue();
    return (
        <nav className="header">
            {/* 1. Logo-> Left  */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>

            {/* 2. Search box in middle */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            {/* 3. Links */}
            {/* Basket/Cart Icon on the left with number */}
            <div className="header__nav">

                {/* 1st Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Helllo, Meenakshi</span>
                        <span className="header__optionLineTwo"> Sign In</span>
                    </div>
                </Link>

                {/* 2nd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Your</span>
                        <span className="header__optionLineTwo"> Prime</span>
                    </div>
                </Link>

                {/* 4th Link  to checkout*/}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* Shopping basket icon */}
                        <ShoppingBasketIcon />
                        {/* Number of items in the cart */}
                        <span className="header__optionLineTwo header_basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav >
    )
}

export default Header;