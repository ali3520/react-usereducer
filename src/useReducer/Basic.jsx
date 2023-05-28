import { Action } from '@remix-run/router'
import React from 'react'
import { useReducer } from 'react'

const Basic = () => {
  const reducer = (state,action) => {
    if(action.type === 'DECREASED'){
      return state-1
    }if(action.type === 'RESET'){
      return state = 0
    }if(action.type === 'INCREASED'){
      return state+1
    }
  }
  const initialstate = 0
  const [state,dispatch] = useReducer(reducer,initialstate)
  return (
    <>
    <div className="container text-center">
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:'DECREASED'})} className="btn btn-danger mx-2">Decreased</button>
        <button onClick={()=>dispatch({type:'RESET'})} className="btn btn-warning mx-2">Reset</button>
        <button onClick={()=>dispatch({type: 'INCREASED'})} className="btn btn-success mx-2">Increased</button>
    </div>
    
    </>
  )
}

export default Basic