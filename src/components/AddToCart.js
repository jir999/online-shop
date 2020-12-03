import React from "react";
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const AddToCart = () => {
    return(
        <Button variant="contained" color="primary" endIcon={<AddShoppingCartIcon />}>Add to Cart</Button>
    )
};

export default AddToCart;