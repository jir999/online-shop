import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddToCart from "../../components/AddToCart";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  }
});

const Menu = ({id, name, photo, price}) => {
    const classes = useStyles();

    return(
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
                    {`price: ${price}`}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button>See recipe</Button>
                <AddToCart 
                    menuId={id} 
                    menuName={name} 
                    menuPhoto={photo} 
                    menuPrice={price} />
            </CardActions>
        </Card>
    )

};

export default Menu;