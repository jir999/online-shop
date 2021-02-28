import useStyles from './style';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { useState, useEffect, useMemo } from 'react';
import Restaurant from './components/Restaurant';
import SearchBox from '../../components/SearchBox';
import DropDown from '../../components/DropDown';
import { fetchedRestaurantsData } from '../../store/actions/restaurants';
import { getDropDownValue, getRestaurantsList } from '../../store/selectors';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const RestaurantsList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const data = useFetch('./restaurants.json');

    useEffect(() => {
        dispatch(fetchedRestaurantsData(data));
    }, [data])

    const { restaurantsList, dropDownValue } = useSelector((state) => ({
        restaurantsList: getRestaurantsList(state),
        dropDownValue: getDropDownValue(state),
    }));

    const restaurants = useMemo(() => {
        return restaurantsList.filter((item) => {
            const newItem = { ...item };
            return ((dropDownValue !== 'all' ? newItem.kitchenTypes.toString().includes(dropDownValue) : true) &&
                newItem.name.toLowerCase().includes(searchValue))
        });
    }, [searchValue, dropDownValue, restaurantsList]);

    const handleInputChange = (value) => {
        setSearchValue(value);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <SearchBox
                        value={searchValue}
                        onInputChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <DropDown />
                </Grid>
                <Grid container spacing={3}>
                    {restaurants.length ? restaurants.map((el) => (
                        <Grid item xs={4}>
                            {<Restaurant className={classes.paper}
                                photo={el.photoUrl}
                                id={el.id}
                                name={el.name}
                                kitchenTypes={el.kitchenTypes} />
                            }
                        </Grid>
                    )) : <h1>Nothing Found</h1>}
                </Grid>
            </Grid>
        </div>
    )
};

export default RestaurantsList;