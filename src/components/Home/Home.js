import React from 'react'
import './Home.css';
import Services from '../Services/Services';
import About from '../About/About';
import Guarantee from '../Guarantee/Guarantee';

const Home = () => {
  return (
    <div className='home-container'>
        <div className='logo-div'>
            <img className="company-logo" src={require("../../images/tonys-company-logo.jpg")} alt='Company Logo'/>
            <p>
                <br />
            Mobile Dent And Scratch Repair, AT YOUR DOORSTEP!<br />
            </p>
            <div className="locations"><b>Serving:</b> All Of Palm Beach County.</div>
            <div className='reviews-div'>
              <button>
                
                <a href='https://g.co/kgs/PGNiRZe'>CHECK OUT OUR 5 STAR REVIEWS ON GOOGLE!</a>
                <br /><p>CLICK HERE</p>
              </button>
              
            </div>
        </div>
        {<About />}
        {<Services />}
        {<Guarantee />}
    </div>
  )
}

export default Home