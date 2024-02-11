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
                        <Link className='link-btn' to='/weather'>Weather</Link>
                        <Link className='link-btn' to='/'>Home</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}

