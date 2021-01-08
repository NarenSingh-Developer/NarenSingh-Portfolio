import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    roottwo: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
const Cards = (props) => {
    const classes = useStyles();

    const [textparaa, settextpara] = useState("");
    const ChangePara = () => {
        settextpara(props.newpara);
    }
    return (
        <>
            <Card className="mt-5">
                <CardActionArea href={props.hrefLink} onClick={ChangePara} className="text-decoration-none">
                    <CardMedia
                        className={classes.media}
                        image={props.CardImage}
                        style={{ backgroundSize: "50%" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.textheading}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.textpara}
                        </Typography>
                        <Typography variant="body2" component="p" className="text-success">
                            {textparaa}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="socialButton">
                    <Button variant="contained" href={props.Link} onClick={ChangePara} color="primary" className="SButton px-5">{props.icon}</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Cards;
