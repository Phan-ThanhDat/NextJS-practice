import React from 'react'
import {  CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Card from '../components/Card';
import { IRestaurantDetail } from '../interface';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    maxWidth: '1024px',
    margin: 'auto',
      [theme.breakpoints.up('md')]: {
         display: 'block'
      },
      [theme.breakpoints.up('lg')]: {
          display: 'flex',
        },
        paddingRight: '16px',
        paddingLeft: '16px',
      '@media screen and (min-width: 600px)':{
        paddingRight: '24px',
        paddingLeft: '24px',
      },
  },
  media: {
      [theme.breakpoints.down('sm')]: {
         height: 300,
        },
        [theme.breakpoints.up('md')]: {
          height: 540,
          
       },
       [theme.breakpoints.up('lg')]: {
          height: 540,
          width: '50%'
        },
  },
  resDetails: {
      width: "50%"
  },
})
);

export function RestaurantDetail({restaurant}: IRestaurantDetail) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={restaurant?.img}
                    title={restaurant?.name}
                />
                <Typography component="span" className={classes.resDetails}>
                    <CardHeader title={restaurant?.name} />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Launch Date: {restaurant?.launch_date}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {restaurant?.description}
                        </Typography>
                        
                    </CardContent>
                </Typography>
            </Card>
  )
}

export default RestaurantDetail
