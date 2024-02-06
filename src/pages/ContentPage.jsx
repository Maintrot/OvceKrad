import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"
import Content from "@/components/Content.jsx"
import { useState } from "react"

export default function ContentPage() {
    // cosnt [usercity, useUserCity] = useState('Bishkek')
    // cosnt [userTemp, useUserTemp] = useState('270')
    // cosnt [userSpeedOf, useUserSpeedOf] = useState('666')

    return (
        <div className="wrapper">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}