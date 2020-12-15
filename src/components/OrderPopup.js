import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {handleOrderBtnClick} from "../store/actions";
import {useDispatch} from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const OrderPopup = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(handleOrderBtnClick())
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
                        <h2 id="transition-modal-title">Your order will be delivered in 20 minutes </h2>
                        <Button color="primary" variant="outlined" onClick={handleClose}>Ok</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
};

export default OrderPopup;