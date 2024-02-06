import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header>
                <div className='header-logo'>
                    <img src='' alt='logo_img'/>
                    <h1>Weather Web</h1>
                </div>
                <div className='block-nav'>
                    <nav>
                        <button className='nav-btn'><Link to='/weather'>Weather</Link></button>
                        <button className='nav-btn'><Link to='/'>Home</Link></button>
                    </nav>
                </div>
            </header>
        </div>
    )
}

