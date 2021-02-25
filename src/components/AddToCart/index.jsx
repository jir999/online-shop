import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { handleAddToCartClick } from '../../store/actions/basketList';


const AddToCart = (menuData) => {
    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(handleAddToCartClick(menuData, true))} variant="contained" color="primary" endIcon={<AddShoppingCartIcon />}>Add to Cart</Button>
    )
};

export default AddToCart;