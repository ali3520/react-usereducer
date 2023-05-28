import React, { useState } from 'react'
import Values from 'values.js'
import Singlecolor from './Singlecolor'
const Color = () => {

    const [colors,setColors] = useState ('')
    const [list,setList] = useState([])
    const handleClick = (e) =>{
        e.preventDefault();
        try {
            const colored = new Values(colors).all(5);
            setList(colored)
            console.log(colored)
        } catch (error) {
            alert('Please Enter correct color name..')
        }
        
    }
  return (
    <>
            <div className="container col-lg-8 m-auto my-3 shadow p-3 text-center  ">
                <h3>Color Generator</h3>
                <form >
                    <input   className='form-control w-50 m-auto' type="text"
                     placeholder='e.g Red ..' 
                     value={colors}
                     onChange={(e)=>setColors(e.target.value)}
                     />
                </form>
                <button onClick={handleClick} className="btn btn-info mt-3">Generate Color</button>
            </div>
        <div className="container col-lg-10">
            <div className="row">
            {list.map((d)=>{
                return (
                    <>
                    <Singlecolor {...d} hex={d.hex}/>
                    
                    </>
                )
            })}
            </div>
        </div>
    
    </>
  )
}

export default Color