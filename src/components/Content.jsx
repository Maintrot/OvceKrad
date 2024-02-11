import axios from 'axios'
import { useState } from "react"

export default function Content(props) {
    const [usercity, setUserCity] = useState(props.propsCity)
    const [userTemp, setUserTemp] = useState(props.propsTemp)
    const [userSpeedOf, setUserSpeedOf] = useState(props.propsSpeed)

    function setInputUserCity() {
        setUserCity(event.target.value)
    }

    function sendForm() {
        axios
    }

    return (
        <div className='content-container'>
            <div className='aside-lft'>
                <div className='aside-lft-ttl'>
                    <h2>Aside-left</h2>
                </div>
                <div className='aside-lft-frm'>
                    <form onSubmit={sendForm} action="" method='get'>
                        <label className='aside-lft-frm-lbl' htmlFor="city">Your city:</label>
                        <input onChange={setInputUserCity} className='aside-lft-frm-inpt' type="text" name="city" placeholder="write your city" required/>
                        <input className='aside-lft-frm-sub' type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
            <div className='aside-right'>
                <div className='weather-img'>
                    <img src="" alt="" />
                </div>
                <div className='aside-right-lst'>
                    <ul>
                        <li className='aside-right-lst-p'>Your city: {usercity}</li>
                        <li className='aside-right-lst-p'>Temp in there: {userTemp}</li>
                        <li className='aside-right-lst-p'>Speed of wind: {userSpeedOf}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}