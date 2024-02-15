import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"
import Content from "@/components/Content.jsx"
import { useState } from "react"

export default function ContentPage() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: '',
        tempOf: 0,
        speedOf: 0
    })
    const [city, setCity] = useState('')

    return (
        <div>
            <Header/>
            <Content propsWeather={[weatherInfo, setWeatherInfo]} propsCity={[city, setCity]} />
            <Footer/>
        </div>
    )
}