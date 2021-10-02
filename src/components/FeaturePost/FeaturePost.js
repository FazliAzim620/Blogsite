import { CardContent, Container, Typography,Card, CardActions, Button } from '@material-ui/core'
import React from 'react'
import classes from './FeaturePost.module.css'
function FeaturePost() {
    return (
        <Container>
          <Card className={classes.mainCard}>
              <CardContent className={classes.textContent}>
                <Typography className={classes.cardTitle} gutterBottom>
                    Titile of longer post Feature
                </Typography>
                <Typography variant='h6' >
                Come and Explore the World with Us, we will visit togather,this will be our pleasure Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.


                </Typography>
              </CardContent>
            <CardActions>
                <Button variant='text' className={classes.CardActionBtn}>Click to See...</Button>
            </CardActions>
          </Card>
        </Container>
    )
}

export default FeaturePost
