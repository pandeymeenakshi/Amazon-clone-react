export const getTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
); 

//Data Layer Logic 
export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //LOGIC FOR ADDING ITEMIN BASKET
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            //LOGIC FOR removing from basket

            //Clone the basket
            let newBasket = [...state.basket];

            //check whether queried item is present in the currrent cart or not 
            const index = state.basket.findIndex((basketitems) => basketitems.id === action.id);
            if (index >= 0) {
                //item exists in the basket, remove it
                newBasket.splice(index, 1);

            } else {
                console.warn(`Can't remove product (id: ${action.id} as it is no longer present in the cart.`);
            }
            return { ...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer;