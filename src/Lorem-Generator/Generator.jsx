import React, { useState } from 'react'
import { data } from './data'
import Model from './Model'

const Generator = () => {
    const [number,setNumber]= useState(0)
    const [datas,setDatas] = useState([])
    const handleClick = (e) => {
        e.preventDefault();
        setDatas(data.slice(0,number))
    }
  return (
    <>
    {number>10 && <Model/>}
        <div className="container col-lg-6 m-auto text-center shadow p-3">
            <h1>Lorem Generator</h1>
            <form action="">
                <input type="number"  
                placeholder='Enter the number..'
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
                />
            </form>
            <button onClick={handleClick} className="btn btn-danger my-3">Generate</button>
        </div>
        <div className="container">
            {datas.map((d)=>{
                return (
                    <>
                    <p className="text-danger shadow p-3">{d}</p>
                    </>
                )
            })}
        </div>
    
    </>
  )
}

export default Generator