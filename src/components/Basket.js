import React, { useState } from "react";
import {getBasketData} from "../store/selectors";
import {useSelector} from "react-redux";

import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const Basket = () => {
    const [showBasket, setShowBasket] = useState(false);

    const basketData = useSelector((state) => getBasketData(state));

    return(
        <div>
            <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
        </div>
    )
};

export default Basket;