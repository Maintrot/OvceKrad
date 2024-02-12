import axios from 'axios'
import { useState } from "react"

export default function Content(props) {
    const [weatherInfo, setWeatherInfo] = useState(props.propsWeather)

    function setInputUserCity(event) {
        setWeatherInfo({
            ...weatherInfo,
            city: event.target.value
        })
    }

    async function sendForm(event) {
        event.preventDefault()
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weatherInfo.city}&appid=dfae5829d6f01ce1b1ba68af1141edac`)
        setWeatherInfo({
            ...weatherInfo,
            tempOf: response.data.main.temp,
            speedOf: response.data.wind.speed
        })
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
                        <li className='aside-right-lst-p'>Your city: {weatherInfo.city}</li>
                        <li className='aside-right-lst-p'>Temp in there: {Math.round(weatherInfo.tempOf - 273.15)} °C</li>
                        <li className='aside-right-lst-p'>Speed of wind: {weatherInfo.speedOf} m/s</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}