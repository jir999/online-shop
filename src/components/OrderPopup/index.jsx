import useStyles from './style';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { handleOrderBtnClick } from '../../store/actions/basketList';
import { toggleAddToCartDisableAllFalse } from '../../store/actions/menus';


const OrderPopup = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(handleOrderBtnClick());
        dispatch(toggleAddToCartDisableAllFalse());
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Order
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">
                            Your order will be delivered in 20 minutes
                        </h2>
                        <Button
                            color="primary"
                            variant="outlined"
                            onClick={handleClose}
                        >
                            Ok
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
};

export default OrderPopup;