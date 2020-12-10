import React from "react";
import {useSelector} from "react-redux";
import {getBasketData} from "../../store/selectors";

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  imgWidth: {
      maxWidth: "120px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const BasketMenu = () => {
    const classes = useStyles();

    const {menuId, menuName, menuPhoto, menuPrice} = useSelector((state) => getBasketData(state));

    return(
        <Grid classname={classes.root} container spacing={3}>
            <Grid item xs={4}>
                <img className={classes.imgWidth} src={menuPhoto} />
            </Grid>
            <Grid item xs>
                <p>{menuName}</p>
            </Grid>
            <Grid item xs>
                <p>{menuPrice}</p>
            </Grid>
            <Grid item xs>
                <Button color="primary"><RemoveIcon /></Button>
            </Grid>
            <Grid item xs>
                <Button color="primary"><AddIcon /></Button>
            </Grid>
            <Grid item xs>
                <Button color="secondary"><DeleteOutlineIcon /></Button>
            </Grid>
        </Grid>
    )
};

export default BasketMenu;