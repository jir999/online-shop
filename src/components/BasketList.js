import React, { useState } from "react";
import {getShowBasket} from "../store/selectors";
import {useSelector} from "react-redux";
import BasketMenu from "./BasketMenu";
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";
import {handleBasketIconClick} from "../store/actions";

import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

// import { createMuiTheme } from '@material-ui/core/styles';
// import green from '@material-ui/core/colors/green';

// const theme = createMuiTheme({
//   palette: {
//     basket: {
//       main: green[500],
//     },
//   },
// });

const BasketList = () => {
    //const [showBasket, setShowBasket] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(handleBasketIconClick(false));
    }
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