import { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '@/App.jsx'
import { Link } from 'react-router-dom'

export default function Register() {
    const [first_name, setFirstname] = useState('')
    const [last_name, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [userState, setUser] = useContext(UserContext)

    function SignUp(event) {
        event.preventDefault()

        axios.post('', {
            first_name: first_name,
            last_name: last_name,
            password: password,
            passwordConfirm: passwordConfirm,
            email: email,
        })
        .then(res => {
            setUser(true)
        })
    }
    return (
        <div>
            <div className="block_user">
                <form action="" method="post">
                    <h2>Sign Up</h2>
                    <label htmlFor="first_name">Имя:</label>
                    <input type="text" name="first_name" placeholder="введите ваше имя"/>
                    <label htmlFor="last_name">Фамилия:</label>
                    <input type="text" name="last_name" placeholder="введите ваше фамилию"/>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" placeholder="придумайте ваш username"/>
                    <label htmlFor="password">Пароль:</label>
                    <input type="password" name="password" placeholder="придумайте пароль"/>
                    <label htmlFor="enc-password">Подтвердить пароль:</label>
                    <input type="password" name="enc-password" placeholder="подтвердите пароль"/>
                    <label htmlFor="email">Электронная почта:</label>
                    <input type="email" name="email" placeholder="введите вашу электронную почту"/>
                    <button className="form-btn-sub">Подтвердить</button>
                    <button className="form-btn-exit"><Link to='/'>Выйти</Link></button>
                </form>
            </div>
        </div>
    )
}