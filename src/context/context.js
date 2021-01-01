import React, { useReducer, createContext } from 'react'

import contextReducer from './contextReducer'

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
    const [transaction, dispatch] = useReducer(contextReducer, initialState)
    
    const deleteTransactions = (id) => {
        dispatch({type: 'delete_transaction', payload: id})
    }

    const addTransactions = (transaction) => {
        dispatch({type: 'add_transaction', payload: transaction})
    }
    return (
        <ExpenseTrackerContext.Provider value={{deleteTransactions, addTransactions}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}