import React from "react";
import {
  CardActionArea,
  Grid,
  Card,
  Typography,
  CardContent,
  CardMedia,
  Hidden,

} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetail: {
    flex: "1",
  },
  cardMedia: {
    width: "150px",
  },
});
function PostCard(props) {
  const classes = useStyles();

  return (
 
        <Grid item xs={12} md={6} >
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetail}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {props.post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {props.post.date}
              </Typography>
              <Typography variant="subtitle2" pragraph>
                {props.post.description}
              </Typography>
              <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={props.post.image}
              title={props.post.imageText}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>

  );
}

export default PostCard;
