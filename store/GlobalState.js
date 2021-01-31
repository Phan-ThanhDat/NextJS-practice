import { createContext, useReducer, useEffect } from 'react'
import reducers from './Reducers'
import {getData} from '../utils/fetchData'

export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const initialState = { 
        restaurants: []
    }

    const [state, dispatch] = useReducer(reducers, initialState)

    useEffect(() => {

        getData('restaurants').then(res => {
            if(res.err) return [];
            dispatch({ 
                type: "ADD_RESTAURANTS",
                payload: res
            })
        })
        
    },[])


    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}