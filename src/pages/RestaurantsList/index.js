import React, {memo, useEffect } from "react";
import Restaurant from "./Restaurant";
import SearchBox from "../../components/SearchBox";
import DropDown from "../../components/DropDown";
import { useDispatch } from "react-redux";
import { fetchedRestaurantsData, handleInputChange } from "../../store/actions";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { getRestaurantsList, getSearchValue } from "../../store/selectors";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "110px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const RestaurantsList = () => {
    const classes = useStyles();


    console.log("RestaurantsList render")
    const dispatch = useDispatch();
    const data = useFetch("./restaurants.json");

    console.log("RestaurantsData", data);

    useEffect(() => {
        dispatch(fetchedRestaurantsData(data));
    }, [data])

    useEffect(() => {
        dispatch(handleInputChange(""));
    },[])

    // useMemo(() => {
    //     dispatch(fetchedRestaurantsData(data));
    // },[])

    const { restaurantsList, searchValue } = useSelector((state) => ({
        restaurantsList: getRestaurantsList(state),
        searchValue: getSearchValue(state),
    }))

    let filtered ;
    if(searchValue){
         filtered = restaurantsList.filter((item) => item.name.toLowerCase().includes(searchValue));
    }

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
                    {!filtered ? restaurantsList.map((el) => (
                        <Grid item xs={4}>
                            {<Restaurant className={classes.paper}
                                         photo={el.photoUrl} 
                                         id={el.id} 
                                         name={el.name} 
                                         kitchenTypes={el.kitchenTypes} />
                            }
                        </Grid>
                        ))
                    : filtered.map((el) => (
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