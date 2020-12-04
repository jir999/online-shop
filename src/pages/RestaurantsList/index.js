import React, {memo, useEffect } from "react";
import Restaurant from "./Restaurant";
import SearchBox from "../../components/SearchBox";
import DropDown from "../../components/DropDown";
import { useDispatch } from "react-redux";
import { fetchedRestaurantsData } from "../../store/actions";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { getRestaurantsList } from "../../store/selectors";

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

const RestaurantsList = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const data = useFetch("./restaurants.json");

    console.log("RestaurantsData", data);

    useEffect(() => {
        dispatch(fetchedRestaurantsData(data));
    }, [data])

    // useMemo(() => {
    //     dispatch(fetchedRestaurantsData(data));
    // },[])

    const { restaurantsList } = useSelector((state) => ({
        restaurantsList: getRestaurantsList(state),
    }))

    console.log("restaurants", restaurantsList)


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <SearchBox  />
                </Grid>
                <Grid item xs={6}>
                    <DropDown />
                </Grid>
                <Grid container spacing={3}>
                    {restaurantsList.map((el) => (
                        <Grid item xs={4}>
                            {<Restaurant className={classes.paper}
                                         photo={el.photoUrl} 
                                         id={el.id} 
                                         name={el.name} 
                                         kitchenTypes={el.kitchenTypes} />
                            }
                        </Grid>
                        ))}
                </Grid>
            </Grid>
        </div>
    )
};

export default memo(RestaurantsList);