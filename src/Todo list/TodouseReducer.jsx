import React, { useReducer, useState } from 'react'
import Model from './Model'
import Mytodo from './Mytodo'


const TodouseReducer = () => {
    const reducer = (state,action) => {
        if(action.type === 'EMPTY'){
            return{
                ...state,
                message:'Please Enter Field',
                show:'true',
            }
        }
        if(action.type === 'RESET'){
            return {
                ...state,
                message:'',
                show:'true'
            }
        }
        if(action.type === 'ADD_TODO'){
            return{
                ...state,
                todo:[...state.todo,action.payload],
                message:'TODO ADDED',
                show: 'true'
            }
        }
    }
   const [name,setName] =useState('')
   const initialState = {
    todo:[],
    message:'',
    show:'false',
   }
   const handleClick = (e) =>{
    e.preventDefault();
    if(!name){
        dispatch({type: 'EMPTY'})
    }else{
        dispatch({type:'ADD_TODO',payload:name})
        setName('')
    }
    setTimeout(() => {
        dispatch({type: 'RESET'})
    }, 2000);
   }
   const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <>
    {state.show && <Model mess={state.message}/>}
    <div className="container col-lg-6 m-auto shadow p-3">
        <form>
            <input type="text" 
            placeholder='Enter Todo..'
            className='form-control'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <button onClick={handleClick} className='btn btn-danger w-50 my-3 d-flex m-auto justify-content-center'>ADD TODO</button>
        </form>
        {state.todo.map((data)=>{
            return <Mytodo d={data}/>
        })}
    </div>
    </>
  )
}

export default TodouseReducer