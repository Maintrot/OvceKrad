import { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '@/App.jsx'
import { Link } from 'react-router-dom'

export default function LogIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userState, setUser] = useContext(UserContext)

    function SignIn(event) {
        event.preventDefault()

        axios.post('', {
            username: username,
            password: password,
        })
        .then(res => {
            setUser(true);
        })
    }
    return (
        <div>
            <div className="block_user">
                <form onSubmit={SignIn} method="post">
                    <h2>Sign In</h2>
                    <label htmlFor="username">username:</label>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="введите ваш username"/>
                    <label htmlFor="password">password:</label>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" name="password" placeholder="введите ваш пароль"/>
                    <button className="form-btn-sub">Потвердить</button>
                    <button className="form-btn-exit"><Link to='/'>Выйти</Link></button>          
                </form>
            </div>
        </div>
    )
}