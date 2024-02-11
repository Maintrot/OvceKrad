import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className='weird-menu'>
                    <ul className='list-text'>
                        <li className='li-text' >самый в мире самый</li>
                        <li className='li-text' >тупой будто ты</li>
                        <li className='li-text' >лист на дереве кошек</li>
                    </ul>
                </div>
                <div className='my-social'>
                    <ul className='social'>
                        <li className='li-link' ><Link className='link' to='https://www.instagram.com/maintrot0525/'>Instagram</Link></li>
                        <li className='li-link' ><Link className='link' to='https://steamcommunity.com/id/Maintrot/'>Steam</Link></li>
                        <li className='li-link' ><Link className='link' to='https://www.instagram.com/maintvor0525/'>Instagram-witharts</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}