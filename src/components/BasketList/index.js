import React, { useState } from "react";
//import {getShowBasket} from "../../store/selectors";
import {getBasketData} from "../../store/selectors";
import {useSelector} from "react-redux";
import BasketMenu from "./BasketMenu";
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";
import {handleBasketIconClick} from "../../store/actions";
import {handleOrderBtnClick} from "../../store/actions";
import OrderPopup from "../OrderPopup";

import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const BasketList = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    // const basketList = useSelector((state) => getBasketList(state));
    const {basketList} = useSelector((state) => {
        console.log("BasketListSelector")
        return {
            basketList: getBasketData(state),
        }
    });

    console.log("BASKETLIST", basketList);

    if(basketList.length){
        return(
            <Grid className={classes.root} container spacing={3}>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() =>dispatch(handleBasketIconClick(false))}>
                        <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    {basketList.map((item) => (
                        <BasketMenu 
                            id={item.menuId} 
                            name={item.menuName} 
                            photo={item.menuPhoto}
                            price={item.menuPrice}
                        />
                    ))}
                </Grid>
                <Grid item xs={12}>
                    <OrderPopup />
                </Grid>
            </Grid>
        ) 
    }
    else{
        return null;
    }
};

export default BasketList;