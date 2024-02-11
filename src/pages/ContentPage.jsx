import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"
import Content from "@/components/Content.jsx"
import { useState } from "react"

export default function ContentPage() {
    const [usercity, setUserCity] = useState('Bishkek')
    const [userTemp, setUserTemp] = useState('270')
    const [userSpeedOf, setUserSpeedOf] = useState('666')

    return (
        <div className="wrapper">
            <Header/>
            <Content propsCity={[usercity, setUserCity]} propsTemp={[userTemp, setUserTemp]} propsSpeed={[userSpeedOf, setUserSpeedOf]} />
            <Footer/>
        </div>
    )
}