import React from 'react';
import {useContext} from 'react'
import useSWR from 'swr';

import {getData} from './../utils/fetchData'
import {DataContext} from '../store/GlobalState'
import Loading from '../components/Loading';
import Restaurants from '../components/Restaurants';
import { IIndexPage } from '../interface';
import EmptyScene from '../components/EmptyScene';


function Index({dataFromServer } :IIndexPage) {
  const [isLoading, setIsLoading] = React.useState<boolean> (true);
  const {state, dispatch} = useContext(DataContext);
  const {restaurants} = state
  
  // @ts-ignore
  const {data, loading, error} = useSWR('/api/restaurants', { initialData: 
    JSON.stringify(restaurants) === JSON.stringify(dataFromServer) ?
    restaurants : dataFromServer} );
  
  React.useEffect(() => {
    setIsLoading(loading);
    if (JSON.stringify(restaurants) !== JSON.stringify(dataFromServer)) {
      dispatch({ 
        type: "ADD_RESTAURANTS",
        payload: data
      })
    }
  }, [loading, dispatch]);

  if (error) {
    return <EmptyScene text="something wrong, please try again"/>
  }
  else if (isLoading && !error) {
    return (
      <Loading/>
    )
  }
  
  return (
    <React.Fragment>
      <Restaurants restaurants = {data?.[0]}/>
      <Restaurants restaurants = {data?.[1]} />
      <Restaurants restaurants = {data?.[2]} />
    </React.Fragment>
  );
}

export async function getStaticProps(ctx) {
  const restaurants = await getData('restaurants');

  return { 
    props : {
      dataFromServer: restaurants
    }, 
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In 1 seconds
   }
}

export default Index