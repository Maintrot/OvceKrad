import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"
import Content from "@/components/Content.jsx"
import { useState } from "react"

export default function ContentPage() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: 'bishkek',
        tempOf: 0,
        speedOf: 0
    })

    return (
        <div className="wrapper">
            <Header/>
            <Content propsWeather={[weatherInfo, setWeatherInfo]} />
            <Footer/>
        </div>
    )
}