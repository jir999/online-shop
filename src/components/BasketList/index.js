import useStyles from './style';
import { useSelector, useDispatch } from 'react-redux';
import { getBasketData } from '../../store/selectors';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import BasketMenu from '../BasketMenu';
import OrderPopup from '../OrderPopup';
import { handleBasketIconClick } from '../../store/actions/basketList';
import { toggleAddToCartDisableAllFalse } from '../../store/actions/menus';

const BasketList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { basketList } = useSelector((state) => {
        return {
            basketList: getBasketData(state),
        }
    });

    const handleMagazineClick = () => {
        dispatch(handleBasketIconClick());
        dispatch(toggleAddToCartDisableAllFalse());
    };

    return (
        <Grid className={classes.root} container spacing={3}>
            <Grid item xs={12}>
                <Button
                    title="Close"
                    variant="contained"
                    color="primary"
                    onClick={handleMagazineClick}
                >
                    <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
                </Button>
            </Grid>
            <Grid item xs={12}>
                {basketList.map((item) => (
                    <BasketMenu
                        id={item.menuId}
                        name={item.menuName}
                        photo={item.menuPhoto}
                        price={item.menuPrice}
                        disabledValue={item.addToCartDisabled}
                    />
                ))}
            </Grid>
            <Grid item xs={12}>
                Total Price: {1000}
            </Grid>
            <Grid item xs={12}>
                <OrderPopup />
            </Grid>
        </Grid>
    );
};

export default BasketList;