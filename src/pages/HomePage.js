import React from 'react'
import {Link} from 'react-router-dom'
import "../index.css";

function HomePage() {
  return (
    <>
        <div className="home-container">

        <h1>Welcome to <span style={{color:"Gold"}}>AA</span> Ice Creams and Cakes.</h1>
        <br/>
        <div className='home-flex-container'>
            <div 
            className='home-flex-items'
            style={{backgroundColor:"#e28212"}}            
            >
                <Link to='/login'>Login</Link>
            </div>
            <div 
            className='home-flex-items'
            style={{backgroundColor:"#1B75D0"}}   
            >
                <Link to='/signup'>Sign Up</Link>
            </div>
            
        </div>
        </div>
    </>
  )
}

export default HomePage