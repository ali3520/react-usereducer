import React, { useState } from 'react'
import "./style.css";   
import Details from './Details';
import Models from './Models';
import {ImSpinner3} from "react-icons/im"
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const AdvanceForm = () => {
  const [value,setValue]=useState()
  const [loading,setLoading]= useState(false)
  const[error,setError]= useState(false)
  const [formfield,setFormfield] = useState({
    name:'',address:'',email:''
  })
  const {name,address,email,cell} = formfield;
  const [data,setData]= useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && address && email){
      let myData = {name,address,email}
      setData([...data,{...myData,cell:value}])
      setFormfield({name:'',address:'',email:''})
      setValue('')
      setLoading(true)
    
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }else{
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000);
    }
    
 
  }

  

  const change = (e) => {
      setFormfield((prevlaue)=>({
        ...prevlaue,
        [e.target.name] : e.target.value
      }))
  }
  return (
    <>
    {error && <Models/>}
    <div className="container col-lg-12 col-6 border shadow mx-auto mt-3 p-3">
        <form className='col-lg-8 mx-auto' >
            <label className='text-danger'>Name:</label>
            <input type="text" name='name' 
            className={`form-control text-light bg-dark ${name ? name: 'border-danger'}`} 
            placeholder='Enter your name...'
            value={name}
            onChange={change}
            
            />
            <label className='text-danger'>Address:</label>
            <input type="text" name='address' 
            className={`form-control text-light bg-dark ${address ? address: 'border-danger'}`}  
            placeholder='Enter your address...'
            value={address}
            onChange={change}
            />
            <label className='text-danger'>Email:</label>
            <input type="email" name='email' 
            className={`form-control text-light bg-dark ${email ? email: 'border-danger'}`} 
            placeholder='Enter your email...'
            value={email}
            onChange={change}
            />
          
              <label className='text-danger'>Cell #:</label>
            <PhoneInput type="text" name='cell' 
            className={`form-control text-light bg-dark ${value ? value: 'border-danger'}`}
            placeholder='Enter your cell #...'
            value={value}
            onChange={setValue}
            />

            {loading ? (
              <button onClick={handleSubmit} className="btn btn-danger d-flex m-auto my-3 w-50 justify-content-around align-items-center"><ImSpinner3 className='spinner'/>Submit Me</button>
            ):(<button onClick={handleSubmit} className="btn btn-danger d-flex m-auto my-3 w-50 justify-content-around align-items-center">Submit Me</button>)}
            
        </form>
        {data.map((d)=>{
          return <Details {...d}/>
        })}
    </div>
    
    </>
  )
}

export default AdvanceForm