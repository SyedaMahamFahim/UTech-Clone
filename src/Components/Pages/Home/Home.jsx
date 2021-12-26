import React from 'react'
import Header from '../../Header/Header'
import './home.css'
const Home = () => {
    return (
        <>
            <Header/>
        <div className="container">
            <div className="row">
                <div className="col-6">
<img src="./images/hero-section-img.svg" alt="hero-section-img" />
                </div>
                <div className="col-6">
     <h1>Best e-Learning Courses </h1>
     <h1 className='stroke-text'>for better experience</h1>

                </div>
            </div>
        </div>
        </>
    )
}

export default Home
