import useStyles from './style';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getBasketData } from '../../store/selectors';
import BasketMenu from '../BasketMenu';
import Button from '@material-ui/core/Button';
import { handleBasketIconClick } from '../../store/actions/basketList';
import OrderPopup from '../OrderPopup';

import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import Grid from '@material-ui/core/Grid';

const BasketList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDeleteClick = (id) => {   // [{} , {}, {}]
        // const filtered = basketList.filter((item) => item.menuId !== id);
        console.log("basket", basketList);
        // const filterd
        // console.log("FilteredBasketList", filtered)
        // setFilteredBasketList(filtered);
    };

    const { basketList } = useSelector((state) => {
        return {
            basketList: getBasketData(state),
        }
    });

    const [filteredBasketList, setFilteredBasketList] = useState(basketList);

    useEffect(() => {
        setFilteredBasketList(basketList);
    }, [basketList])

    console.log("basketList", basketList);

    if (filteredBasketList.length) {
        return (
            <Grid className={classes.root} container spacing={3}>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => dispatch(handleBasketIconClick(false))}>
                        <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    {filteredBasketList.map((item) => (
                        <BasketMenu
                            onDeleteClick={handleDeleteClick}
                            id={item.menuId}
                            name={item.menuName}
                            photo={item.menuPhoto}
                            price={item.menuPrice}
                        />
                    ))}
                </Grid>
                <Grid item xs={12}>
                    <OrderPopup />
                </Grid>
            </Grid>
        )
    }
    else {
        return null;
    }
};

export default BasketList;