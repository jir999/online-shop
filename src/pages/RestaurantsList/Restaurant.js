import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const Restaurant = ({ id, name, photo, kitchenTypes }) => {
    const classes = useStyles();

    const history = useHistory();
    const handleButtonClick = () => {
        console.log("btn")
        history.push(`/restaurant/${name}`)
    }

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="{name restaurant}"
                    height="140"
                    image={photo}
                    title="Restaurant"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {kitchenTypes.map((item) => `${item} `)}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={handleButtonClick} size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
};

export default Restaurant;