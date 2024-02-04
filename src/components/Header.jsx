import { Link } from 'react-router-dom'
import { UserContext } from '@/App.jsx'
import { useContext } from 'react'


export default function Header() {
    const [user, setUser] = useContext(UserContext)

    return (
        <div>
            <header>
                <div className='header-logo'>
                    <img src='' alt='logo_img'/>
                    <h1>Weather Web</h1>
                </div>
                <div className='block-nav'>
                    <nav>
                        {!user ? (
                            <div>
                                <button className='nav-btn'><Link to='/weather'>Weather</Link></button>
                                <button className='nav-btn'><Link to='/login'>Sign In</Link></button>
                                <button className='nav-btn'><Link to='/register'>Sign Up</Link></button>
                            </div>
                        ) : (
                            <div>
                                <button className='nav-btn'><Link to='/weather'>Weather</Link></button>
                                <button className='nav-btn'><Link to='/logout'>Log Out</Link></button>
                            </div>
                        )}
                    </nav>
                </div>
            </header>
        </div>
    )
}

