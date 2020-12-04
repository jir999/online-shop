import React, { useState } from "react";
import {getBasketData} from "../store/selectors";
import {useSelector} from "react-redux";
import BasketMenu from "./BasketMenu";

import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const Basket = () => {
    //const [showBasket, setShowBasket] = useState(false);

    const {menuId, menuName, menuPhoto, menuPrice, showBasket} = useSelector((state) => getBasketData(state));

    if(showBasket){
    return(
        <div>
            <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
            <BasketMenu 
                id={menuId}
                name={menuName}
                photo={menuPhoto}
                price={menuPrice}
            />
        </div>
    ) 
    }
    else{
        return null;
    }
};

export default Basket;