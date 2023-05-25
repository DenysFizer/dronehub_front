import React from 'react';
import {CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

const Card = () => {

    return (
        <div>
            <Card
                raised
                sx={{
                    maxWidth: 345,
                    margin: "0 auto",
                    padding: "0.1em",
                }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                        image="/static/img/drone.webp"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"  sx={{flexGrow: 1}}>
                            Lizardadddddddddddddd dddddddddd dddddddddddd ddddddddddd
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div"  sx={{flexGrow: 1}}>
                            Lizardadddddddddddddd dddddddddd dddddddddddd ddddddddddd
                        </Typography>
                    </CardContent>
                </CardActions>
            </Card>
        </div>
    );
};

export default Card;