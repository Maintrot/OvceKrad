import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className='weird-menu'>
                    <ul className='list-text'>
                        <li>самый в мире самый</li>
                        <li>тупой будто ты</li>
                        <li>лист на дереве кошек</li>
                    </ul>
                </div>
                <div className='my-social'>
                    <ul className='social'>
                        <li><Link className='link' to='https://www.instagram.com/maintrot0525/'>Instagram</Link></li>
                        <li><Link className='link' to='https://steamcommunity.com/id/Maintrot/'>Steam</Link></li>
                        <li><Link className='link' to='https://www.instagram.com/maintvor0525/'>Instagram-witharts</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}