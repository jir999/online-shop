import React, { useState } from "react";
import {getShowBasket} from "../../store/selectors";
import {useSelector} from "react-redux";
import BasketMenu from "./BasketMenu";
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";
import {handleBasketIconClick} from "../../store/actions";

import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';


const BasketList = () => {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(handleBasketIconClick(false));
    }

    // const basketList = useSelector((state) => getBasketList(state));
    const showBasket = useSelector((state) => getShowBasket(state));

    if(showBasket){
        console.log("showBasket", showBasket);
        return(
            <div>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
                </Button>
                <BasketMenu />
            </div>
        ) 
    }
    else{
        return null;
    }
};

export default BasketList;