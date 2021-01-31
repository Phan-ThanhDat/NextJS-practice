import React from 'react'
import Link from "next/link";
import Slider from "react-slick";
import { Box, Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Restaurant from './Restaurant';
import { IRestaurantsComp } from '../interface';

var settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '1024px',
      margin: 'auto',
      paddingTop: 32,
    },
    wrapper_slider: {
      padding: 0,
      paddingTop: 16,
      paddingBottom: 16,
      width: '90%',
      margin: 'auto'
    },
    textSize: {
      fontSize: 24,
      fontWeight: 800,
      textAlign: 'center'
    },
    aTags: {
      textDecoration: 'none'
    }
  }),
);

export function Restaurants({restaurants}: IRestaurantsComp) {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
        <Typography component="h3" color="error" className={classes.textSize}>{restaurants?.title}</Typography>
        <div className={classes.wrapper_slider}>
          <Slider {...settings}>
            {
                restaurants?.restaurants.map((r, k) => {
                  const url_name = r.name.replace(/ /g,"-");
                  return (
                    <Link href={url_name} key={k}>
                      <a className={classes.aTags}>
                        <Restaurant restaurant={r}/>
                      </a>
                    </Link>
                  )
                  }
                )
            }
        </Slider>
        </div>
    </Box>
  )
}

export default Restaurants
