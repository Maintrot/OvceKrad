import axios from 'axios'
import { useState, useEffect } from "react"

export default function Content(props) {
    const [weatherInfo, setWeatherInfo] = useState(props.propsWeather)
    const [city, setCity] = useState(props.propsCity)

    useEffect(() => {
        const timer = setTimeout(sendForm, 2000)

        return () => {
            clearTimeout(timer)
        }
    }, [city])

    function setInputUserCity(event) {
        event.preventDefault()
        setCity(
            event.target.value
        )
    }

    async function sendForm() {
        const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dc92624924f6513c59f5649ee5925180`)
        .then((res) => {
            console.log(res)
            setWeatherInfo({
                city: city,
                tempOf: res.data.main.temp,
                speedOf: res.data.wind.speed
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='content-container'>
            <div className='aside-lft'>
                <div className='aside-lft-ttl'>
                    <h2>Aside-left</h2>
                </div>
                <div className='aside-lft-frm'>
                    <form onSubmit={setInputUserCity} method='get'>
                        <label className='aside-lft-frm-lbl' htmlFor="city">Your city:</label>
                        <input onChange={setInputUserCity} className='aside-lft-frm-inpt' type="text" name="city" placeholder="write your city" required/>
                        {/* <input className='aside-lft-frm-sub' type="submit" value="Submit"/> */}
                    </form>
                </div>
            </div>
            <div className='aside-right'>
                {/* <div className='weather-img'>
                    <img src="" alt="" />
                </div> */}
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