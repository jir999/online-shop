import useStyles from './style';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { memo, useEffect } from 'react';
import Restaurant from './components/Restaurant';
import SearchBox from '../../components/SearchBox';
import DropDown from '../../components/DropDown';
import { fetchedRestaurantsData, handleInputChange } from '../../store/actions/restaurants';
import { getDropDownValue, getRestaurantsList, getSearchValue } from '../../store/selectors';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    }, [])

    const { restaurantsList, searchValue, dropDownValue } = useSelector((state) => ({
        restaurantsList: getRestaurantsList(state),
        searchValue: getSearchValue(state),
        dropDownValue: getDropDownValue(state),
    }))

    console.log("DROPDOWNVALUE", dropDownValue)

    let filtered;
    if (searchValue && dropDownValue !== "all") {
        filtered = restaurantsList.filter((item) => item.kitchenTypes.toString().includes(dropDownValue))
        filtered = filtered.filter((item) => item.name.toLowerCase().includes(searchValue));
    }
    else if (searchValue) {
        filtered = restaurantsList.filter((item) => item.name.toLowerCase().includes(searchValue));
    }
    else if (dropDownValue !== "all") {
        filtered = restaurantsList.filter((item) => item.kitchenTypes.toString().includes(dropDownValue))
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <SearchBox />
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