import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import useStyles from './style';

import Grid from '@material-ui/core/Grid';
import { useDispatch } from "react-redux";
// import handleDeleteClick from "../../store/actions";

const BasketMenu = ({ id, name, photo, price, onDeleteClick }) => {
    const classes = useStyles();
    //const {menuId, menuName, menuPhoto, menuPrice} = useSelector((state) => getBasketData(state));

    const handleAddClick = () => {

    };

    const handleDeleteClick = () => {
        onDeleteClick(id);
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
                <p>{price}</p>
            </Grid>
            <Grid item xs>
                <Button color="primary"><RemoveIcon /></Button>
            </Grid>
            <Grid item xs>
                <Button onClick={handleAddClick} color="primary"><AddIcon /></Button>
            </Grid>
            <Grid item xs>
                <Button onClick={handleDeleteClick} color="secondary"><DeleteOutlineIcon /></Button>
            </Grid>
        </Grid>
    )
};

export default BasketMenu;