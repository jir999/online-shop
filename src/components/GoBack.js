import React from "react";
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";

const GoBack = () => {
    const history = useHistory();
    const handleBtnClick = () => {
        history.goBack();
    }

    return(
        <Button variant="contained" color="default" onClick={handleBtnClick}>GoBack</Button>
    )
}

export default GoBack;