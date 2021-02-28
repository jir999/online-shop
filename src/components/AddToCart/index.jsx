import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { handleAddToCartClick } from '../../store/actions/basketList';
import { toggleAddToCartDisableTrue } from '../../store/actions/menus';

const AddToCart = (menuData) => {
    const dispatch = useDispatch();
    const { menuId, disabledValue } = menuData;

    const handleBtnClick = () => {
        dispatch(toggleAddToCartDisableTrue(menuId, true));
        dispatch(handleAddToCartClick(menuData));
    };

    return (
        <Button
            disabled={disabledValue}
            onClick={handleBtnClick}
            variant="contained"
            color="primary"
            endIcon={<AddShoppingCartIcon />}
        >
            Add to Cart
        </Button>
    )
};

export default AddToCart;