import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '@/App.jsx'

export default function LogOut() {
    const [userState, setUser] = useContext(UserContext)
    return (
        <div>
            <div className="block_user">
                <form action="" method="get">
                    <h2>Log Out</h2>
                    <label>зайти выход:</label>
                    <button onClick={(e) => {setUser(false)}} className="form-btn-exit" type="submit" name="logout"><Link to='/'></Link></button>
                    <button className="form-btn-sub" type="submit" name="logout"><Link to='/'></Link></button>
                </form>
            </div>
        </div>
    )
}