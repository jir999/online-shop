import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RestaurantsList from "../pages/RestaurantsList";
import MenuList from "../pages/MenuList";
import ErrorBoundry from "../pages/ErrorBoundry";
import BasketList from "../components/BasketList";
import {useSelector} from "react-redux";
import {getShowBasket} from "../store/selectors";

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


const Routing = () => {
    const classes = useStyles();

    const showBasket = useSelector((state) => getShowBasket(state));

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Switch>
                        <Route exact path="/" component={RestaurantsList} />
                        <Route path="/restaurant/:name/:id" component={MenuList} />
                        <Route exact path="NotFound" component={ErrorBoundry} />
                        <Redirect to="NotFound" />
                    </Switch>
                </Grid>
                {showBasket && <Grid item xs={5}>
                    <BasketList />
                </Grid>}
            </Grid>
        </div>
    )
};

export default Routing;