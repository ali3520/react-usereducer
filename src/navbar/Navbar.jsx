import React, { useRef, useState } from 'react'
import './style.css';
import {BsListUl} from 'react-icons/bs'

const Navbar = () => {
  const[show,setShow] = useState('false')
  const list = useRef(null)
  const handleClick = () =>{
    setShow(!show)
    if(show){
      list.current.style.transform = 'translateY(0%)'

    }else{
      list.current.style.transform = 'translateY(-150%)'
    }
    
  }
  return (
    <>
    <nav className='d-flex justify-content-around bg-dark text-info align-items-center p-2'>
      <div className="nav-brand">
        <img width='100px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIoxSTDaXGySPdE3brUhMxXxcTppOZssZxQ&usqp=CAU" alt="" />
        
      </div>
      <div ref={list} className='linkss'>
        <div>
        <a href="">Home</a>
        </div>
        <div>
        <a href="">About us</a>
        </div>
        <div>
        <a href="">Services</a>
        </div>
        <div>
        <a href="">Projects</a>
        </div>
        <div>
        <a href="">Contact</a>
        </div>

      </div>
      <button className="btn btn-info submit"> Login </button>
      <BsListUl onClick={handleClick} className='list'/>
    </nav>
    
    </>
  )
}

export default Navbar
