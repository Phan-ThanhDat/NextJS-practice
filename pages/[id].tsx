import React from 'react'
import {useContext} from 'react'
import { useRouter } from 'next/router'
import { createStyles, makeStyles, Theme } from '@material-ui/core';

import {DataContext} from '../store/GlobalState'
import Loading from '../components/Loading';
import Detail from '../components/Detail';
import { IRestaurantDetailByID } from '../interface';


const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    '@media screen and (min-width: 768px)':{
        paddingRight: 0,
        paddingLeft: 0,
    },
    '@media screen and (min-width: 992px)':{
      paddingRight: 16,
      paddingLeft: 16,
    },
    '@media screen and (min-width: 1024px)':{
      paddingRight: 24,
      paddingLeft: 24,
    },
    '@media screen and (min-width: 1280px)':{
      paddingRight: 48,
      paddingLeft: 48,
    }
  }
  
})
);

export function RestaurantDetailByID({restaurantEmpty}: IRestaurantDetailByID) {
  const router = useRouter();
  const {state} = useContext(DataContext);
  const {restaurants} = state;
  const pathName = router.asPath.substring(1);
  const classes = useStyles();

  const restanrantPopularFiltered = restaurants[0]?.restaurants
    .filter((r,k) => r.name.replace(/ /g,"-") === pathName);

    const restanrantNewFiltered = restaurants[1]?.restaurants
    .filter((r,k) => r.name.replace(/ /g,"-") === pathName);

    const restanrantNearByFiltered = restaurants[2]?.restaurants
    .filter((r,k) => r.name.replace(/ /g,"-") === pathName)
    
    const restaurantNeeded = (restanrantPopularFiltered?.length > 0 && restanrantPopularFiltered[0])
        || (restanrantNewFiltered?.length > 0 && restanrantNewFiltered[0])
        || (restanrantNearByFiltered?.length > 0 && restanrantNearByFiltered[0])

  if (!router.isReady || router.isFallback) 
    return <Loading/>

  return (
    <div className={classes.root}>
      <Detail restaurant={restaurantNeeded}/>
    </div> 
  )
}

export const getStaticProps = async (ctx) => {
    return { 
        props : {
                    restaurantEmpty: {}
                },
        }
    }

export const getStaticPaths = async (ctx) => {
    return {
        fallback: true,
        paths: [{ params: { id: String(ctx?.id) } }]
    }
}
export default RestaurantDetailByID
