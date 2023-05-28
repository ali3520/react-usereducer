import React, { useRef } from 'react'

const BasicRef = () => {
    const title = useRef(null);
    
    console.log(title)
    const handleClick = () => {
    title.current.style.color = 'red'
    title.current.style.transform = 'translateX(80%)'
    title.current.style.transition = 'all 3.6s'
    title.current.style.background = 'gray'
    title.current.style.opacity = '0.5'
    }
  return (
    <>
    <div className="container  text Center">
        <h1 ref={title}>UseRef Basics</h1>
        <button onClick={handleClick} className="btn btn-info mt-3">Click Me</button>
    </div>
    
    </>
  )
}

export default BasicRef