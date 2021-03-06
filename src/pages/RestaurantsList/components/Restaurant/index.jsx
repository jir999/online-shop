import useStyles from './style';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Restaurant = ({ id, name, photo, kitchenTypes }) => {
    const classes = useStyles();

    const history = useHistory();
    const handleButtonClick = () => {
        history.push(`/restaurant/${name}/${id}`)
    }

    return (
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
    )
};

export default Restaurant;