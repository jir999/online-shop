import React, {useState ,useEffect, useMemo} from "react";
import {useDispatch} from "react-redux";
import useFetch from "../../hooks/useFetch";
import {useParams} from "react-router-dom";
import {fetchedMenuData} from "../../store/actions";
import {useSelector} from "react-redux";
import { getMenuData, getSearchValue } from "../../store/selectors";
import GoBack from "../../components/GoBack";
import SearchBox from "../../components/SearchBox";
import Menu from "./Menu";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menus: {
    marginLeft: "110px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const MenuList = () => {
    const classes = useStyles();

    const params = useParams();
    console.log("PARAMS", params)
    const dispatch = useDispatch();

    const data = useFetch(`/menus/${params.id}.json`);

    useEffect(() => {
        dispatch(fetchedMenuData(data));
    }, [data])

    const {menusList, searchValue} = useSelector((state) => ({
        menusList: getMenuData(state),
        searchValue: getSearchValue(state),
    }))

    let filtered;
    if(searchValue){
        console.log("MENULIST searchValue", searchValue)
        console.log("MENULIST FILTERED", filtered);
        filtered = menusList.filter((item) => item.name.toLowerCase().includes(searchValue));
    }    

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <GoBack />
                </Grid>
                <Grid item xs={12}>
                    <SearchBox  />
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
        </div>
    )
};

export default MenuList;