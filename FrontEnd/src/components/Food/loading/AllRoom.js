// react usestate
import React, { useState } from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { Zoom, Fade, Flip, Rotate, Bounce, Roll } from 'react-reveal';
import useStyles from '../kalijFile/Component/kalijcs'
import useStyle from '../kalijFile/Component/onlyKalij'
import LoadingPlaceHolder from './loading'
import { useSelector } from 'react-redux'
const Loading = () => {
    const classes = useStyles();
    const classed = useStyle();
    const { isLoading } = useSelector((state) => state.Room);
    return (
        <Grid className={classes.container} container alignItems="stretch" spacing={2}>
            {Array.from(Array(Math.ceil(6)).keys()).map((room) => (
                <Grid key={room._id} item xs={12} sm={6} md={6} lg={4}>
                    <Zoom in duration={2000}>
                        <Card className={classed.cards} raised elevation={4}>
                            {isLoading ? <LoadingPlaceHolder extraStyles={{
                                height: 0,
                                paddingTop: '78%', objectFit: 'cover',
                                margin: 'auto', borderRadius: '8px',
                            }} /> :
                                <div>
                                    <CardMedia className={classes.media} style={{ backgroundImage: `url(${room.selectedFile})` }} title={room.title} />
                                </div>}
                            {isLoading ? <LoadingPlaceHolder extraStyles={{
                                height: '35px', margin: '10px auto 0px auto', padding: '0.1rem 0rem',
                            }} /> :
                                <Typography className={classes.title} gutterBottom variant="h5" component="h2"></Typography>}
                            {isLoading ? <LoadingPlaceHolder extraStyles={{
                                height: '30px',
                                margin: '11px auto 10px auto', padding: '0.1rem 0rem',
                            }} /> :
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p"></Typography>
                                </CardContent>}
                            {isLoading ? <span style={{
                                display: 'flex', margin: '10px 15px 13px 15px',
                            }} > <LoadingPlaceHolder extraStyles={{
                                height: '20px', width: '90px',
                                borderRadius: '12px', margin: '2px 10px', padding: '0.1rem 0rem',
                            }} /> <LoadingPlaceHolder extraStyles={{
                                height: '20px', width: '90px',
                                borderRadius: '12px', margin: '2px 10px', padding: '0.1rem 0rem',
                            }} />
                                <LoadingPlaceHolder extraStyles={{
                                    height: '20px', width: '90px',
                                    borderRadius: '12px', margin: '2px 0px', padding: '0.1rem 0rem',
                                }} /></span> :
                                <div className={classes.details}>
                                    <Typography variant="body2" color="textSecondary" component="h2"></Typography>
                                </div>}
                            {isLoading ? <LoadingPlaceHolder extraStyles={{
                                height: '48px',
                                borderRadius: '1px', margin: '0px auto', padding: '0.1rem 0rem',
                            }} /> :
                                <CardActions className={classed.cardActionsI}>
                                    <Button size="small" className={classed.btn} type="button">Learn More
                                    </Button>
                                </CardActions>}
                        </Card>
                    </Zoom>
                </Grid>
            ))}
        </Grid>
    );
}
export default Loading;