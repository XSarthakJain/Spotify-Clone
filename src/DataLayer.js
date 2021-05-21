import React,{ createContext,useContext,useReducer } from 'react';


export const DataLayerContext = createContext();

export const DataLayer = ({ initialState,reducer,children}) => {
    console.log("initialState,reducer",initialState,reducer);
    return(
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>
    );
};

export const useDataLayerValue = () => useContext(DataLayerContext);

