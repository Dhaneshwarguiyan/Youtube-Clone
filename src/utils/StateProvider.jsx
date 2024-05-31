import { useContext,createContext,useReducer } from "react";
import {reducer,initialState} from './reducer.js'
export const appContext = createContext();

export const StateProvider = ({children})=>{
    return <appContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </appContext.Provider>
}

export const useStateProvider = () => useContext(appContext);