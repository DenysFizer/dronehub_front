import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';

const Newcard = (props) => {
    const navigate = useNavigate();
    console.log(props)
    let path =`/static/img/${props.content.imgpath}.webp`;
    function Route() {
    console.log("redirect");
    navigate(`/drones/${props.content.id}`);
    }

    return (
        <div>
        <Card
            raised
            sx={{
                maxWidth: 280,
                margin: "0",
                padding: "0.1em",
            }}
        >
            <CardActionArea
            onClick={Route}
            >
                <CardMedia
                    component="img"
                    height="190"
                    sx={{
                        padding: "0em 0em 0 0em",
                        objectFit: "contain",
                        height: "150",
                        width: "100%"
                }}
                    image = {path}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.content.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
</div>
    );
};

export default Newcard;