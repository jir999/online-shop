import useStyles from './style';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { fetchedMenuData } from '../../store/actions/menus';
import { getMenuData, getSearchValue } from '../../store/selectors';
import GoBack from '../../components/GoBack';
import SearchBox from '../../components/SearchBox';
import Menu from './components/Menu';
import InputRange from '../../components/InputRange';

import Grid from '@material-ui/core/Grid';

const MenuList = () => {
    const classes = useStyles();
    const [filteredList, setFilteredList] = useState([]);

    const params = useParams();
    console.log("PARAMS", params)
    const dispatch = useDispatch();

    const data = useFetch(`/menus/${params.id}.json`);

    useEffect(() => {
        dispatch(fetchedMenuData(data));
    }, [data])

    const { menusList, searchValue } = useSelector((state) => ({
        menusList: getMenuData(state),
        searchValue: getSearchValue(state),
    }))

    let filtered;
    if (searchValue) {
        console.log("MENULIST searchValue", searchValue)
        console.log("MENULIST FILTERED", filteredList);
        filtered = menusList.filter((item) => item.name.toLowerCase().includes(searchValue));
        // filtered = menusList.filter((item) => item.name.toLowerCase().includes(searchValue))
        // setFilteredList(filtered);
    }
    console.log("F", filteredList)

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12}>
                <GoBack />
            </Grid>
            <Grid item xs={12}>
                <SearchBox />
            </Grid>
            <Grid item xs={12}>
                <InputRange />
            </Grid>
            <Grid className={classes.menus} container spacing={3}>
                {!filtered ? menusList.map((el) => (
                    <Grid item xs={4}>
                        {<Menu className={classes.paper}
                            photo={el.photoUrl}
                            id={el.id}
                            name={el.name}
                            price={el.price} />
                        }
                    </Grid>
                ))
                    : filtered.map((el) => (
                        <Grid item xs={4}>
                            {<Menu className={classes.paper}
                                photo={el.photoUrl}
                                id={el.id}
                                name={el.name}
                                price={el.price} />
                            }
                        </Grid>
                    ))}
            </Grid>
        </Grid>
    )
};

export default MenuList;