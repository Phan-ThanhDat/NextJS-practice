export interface IRestaurant {
    name: string,
    img: string,
    description: string,
    launch_date: string,
    online: boolean
}
export interface IRestaurantDetail  {
    restaurant: IRestaurant
}

export interface IRestaurantDetailByID  {
    restaurant: IRestaurant,
    restaurantEmpty: IRestaurant
}

export interface IRestaurantComp {
    restaurant: IRestaurant
}

export interface ILoadingProps {
    classes?: {
      wrapper?: string
      loader?: string
    }
}

export interface IRestaurants  {
    restaurants: IRestaurant[],
    title: string
}

export interface IRestaurantsComp  {
    restaurants: IRestaurants
}

export interface IIndexPage {
    dataFromServer: IRestaurants[]
}