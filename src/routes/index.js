import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RestaurantsList from "../pages/RestaurantsList";
import MenuList from "../pages/MenuList";
import ErrorBoundry from "../pages/ErrorBoundry";
import BasketList from "../components/BasketList";


const Routing = () => {
    return (
        <div>
            <BasketList />
            <Switch>
                <Route exact path="/" component={RestaurantsList} />
                <Route path="/restaurant/:name/:id" component={MenuList} />
                <Route exact path="NotFound" component={ErrorBoundry} />
                <Redirect to="NotFound" />
            </Switch>
        </div>
    )
};

export default Routing;