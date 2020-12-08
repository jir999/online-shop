import React from "react";
import {useSelector} from "react-redux";
import {getBasketData} from "../../store/selectors";

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const BasketMenu = ({menuId, menuName, menuPhoto, menuPrice}) => {
    

    return(
        <div>
            <p>{menuId}</p>
            <p>{menuName}</p>
            <p>{menuPhoto}</p>
            <p>{menuPrice}</p>
            <Button color="primary"><RemoveIcon /></Button>
            <Button color="primary"><AddIcon /></Button>
            <Button color="secondary"><DeleteOutlineIcon /></Button>
        </div>
    )
};

export default BasketMenu;