import useStyles from './style';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Grid from '@material-ui/core/Grid';
import { handleDeleteBtnClick, handleAddIconClick, handleMinusIconClick } from '../../store/actions/basketList';
import { toggleAddToCartDisableFalse } from '../../store/actions/menus';

const BasketMenu = ({ id, name, photo, price }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [menuCount, setMenuCount] = useState(1);
    const [menuPrice, _] = useState(price);

    const handleMinusClick = () => {
        setMenuCount((count) => count - 1);
        dispatch(handleMinusIconClick(menuPrice, id));
    }

    const handleAddClick = () => {
        setMenuCount((count) => count + 1);
        dispatch(handleAddIconClick(menuPrice, id));
    };

    const handleDeleteClick = () => {
        dispatch(toggleAddToCartDisableFalse(id, false));
        dispatch(handleDeleteBtnClick(menuPrice, id));
    };

    return (
        <Grid classname={classes.root} container spacing={2}>
            <Grid item xs={4}>
                <img className={classes.imgWidth} src={photo} />
            </Grid>
            <Grid item xs>
                <p>{name}</p>
            </Grid>
            <Grid item xs>
                <p>{`${price}(${menuCount})`}</p>
            </Grid>
            <Grid item xs>
                <Box display="flex">
                    <Button
                        disabled={menuCount === 1}
                        onClick={handleMinusClick}
                        color="primary"
                    >
                        <RemoveIcon />
                    </Button>
                    <Button
                        onClick={handleAddClick}
                        color="primary"
                    >
                        <AddIcon />
                    </Button>
                    <Button
                        onClick={handleDeleteClick}
                        color="secondary"
                    >
                        <DeleteOutlineIcon />
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
};

export default BasketMenu;