import React, { useReducer, createContext } from 'react'

const initailState = [];

const ExpenseTrackerContext = createContext(intialState)

export const Provider = ({children})