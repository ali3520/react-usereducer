import React, { useState } from 'react'
import Model from './Model'

const Singlecolor = ({rgb,hex,index}) => {
    const [models,setModels] = useState(false)
    const [value,setValue] = useState()
    const handleClick = () =>{
        setModels(true)  
        setValue(`#${hex}`)
    }
    navigator.clipboard.writeText(value)
    setTimeout(()=>{
setModels(false)
    },2000)
  return (
    <>
        <div onClick={handleClick} className="col-lg-2 " style={{height:'100px', background:`rgb(${rgb})`,color:`${index > 10 && 'white' }`}}>
            #{hex}
        
            {models && <Model/>}
        </div>
                        
    </>
  )
}

export default Singlecolor