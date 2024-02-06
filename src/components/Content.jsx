import axios from 'axios'
import { useState } from "react"

export default function Content(props) {
    // cosnt [usercity, useUserCity] = useState(props.propsCity)
    // cosnt [userTemp, useUserTemp] = useState(props.propsTemp)
    // cosnt [userSpeedOf, useUserSpeedOf] = useState(props.propsSpeed)

    return (
        <div className='aside-lft'>
            <div>
                <div className='aside-lft-ttl'>
                    <h2>Aside-left</h2>
                </div>
                <div className='aside-lft-frm'>
                    <form action="" method='get'>
                        <label className='aside-lft-frm-lbl' htmlFor="city">Your city:</label>
                        <input className='aside-lft-frm-inpt' type="text" name="city" placeholder="write your city" required/>
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
                        <li className='aside-right-lst-p'>Your city:</li>
                        <li className='aside-right-lst-p'>Temp in there:</li>
                        <li className='aside-right-lst-p'>Speed of wind:</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}