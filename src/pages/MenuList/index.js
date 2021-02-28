import useStyles from './style';
import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { fetchedMenuData } from '../../store/actions/menus';
import { getMenuData } from '../../store/selectors';
import GoBack from '../../components/GoBack';
import SearchBox from '../../components/SearchBox';
import Menu from './components/Menu';
import InputRange from '../../components/InputRange';
import Grid from '@material-ui/core/Grid';

const MenuList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const params = useParams();
    const [searchValue, setSearchValue] = useState('');

    const data = useFetch(`/menus/${params.id}.json`);

    useEffect(() => {
        dispatch(fetchedMenuData(data));
    }, [data])

    const { menusList } = useSelector((state) => ({
        menusList: getMenuData(state),
    }));

    const menus = useMemo(() => {
        return menusList.filter((item) => {
            const newItem = { ...item }
            return newItem.name.toLowerCase().includes(searchValue);
        });
    }, [searchValue, menusList]);

    const handleInputChange = (value) => {
        setSearchValue(value);
    }

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12}>
                <GoBack />
            </Grid>
            <Grid item xs={12}>
                <SearchBox
                    value={searchValue}
                    onInputChange={handleInputChange}
                />
            </Grid>
            <Grid item xs={12}>
                <InputRange />
            </Grid>
            <Grid className={classes.menus} container spacing={3}>
                {menus.length ? menus.map((el) => (
                    <Grid item xs={4}>
                        {<Menu className={classes.paper}
                            photo={el.photoUrl}
                            id={el.id}
                            name={el.name}
                            price={el.price}
                            disabledValue={el.addToCartDisabled} />
                        }
                    </Grid>
                )) : <h1>Nothing Found</h1>}
            </Grid>
        </Grid>
    )
};

export default MenuList;