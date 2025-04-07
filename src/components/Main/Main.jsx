import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets';


const Main = () =>{
  return (
    <div className= 'main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt=""/>
        </div>
        <div className="main-container">
          <div className="greet">
            <p>Hello Tejaswini</p>
            <p>How can I help you today</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Briefly sumarize this concept: urban planning</p>
              <img src={assets.compass_icon} alt=""/>
            </div>
            <div className="card">
              <p>Sugggets beatiful places</p>
              <img src={assets.compass_icon} alt=""/>
            </div>

            <div className="card">
              <p>Brainstrom team bonding activities for our work retreat</p>
              <img src={assets.bulb_icon} alt=""/>
            </div>
            <div className="card">
              <p>improve the readability of the following code</p>
              <img src={assets.message_icon} alt=""/>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Main