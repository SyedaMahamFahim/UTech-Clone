import React from 'react'
import {Link} from 'react-router-dom'
import './all-button.css'
const GreenBtn = () => {
    return (
        <>
           <button className='animated-btn'>
        <div >
          <span className='btn-span'></span>
          <Link to ="/" className='btn-link'>Play</Link>
        </div>
      </button> 

        </>
    )
}

export default GreenBtn
