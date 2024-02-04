import { Route, Routes, BrowserRouter } from 'react-router-dom'
import React, { useState, createContext } from 'react'
import ContentPage from '@/pages/ContentPage.jsx'
import LogInPage from '@/pages/LogInPage.jsx'
import LogOutPage from '@/pages/LogOutPage.jsx'
import MainPage from '@/pages/MainPage.jsx'
import RegisterPage from '@/pages/RegisterPage.jsx'
import ErrorPage from '@/pages/ErrorPage.jsx'


export const UserContext = createContext()

const App = () => {
  const [user, setUser] = useState(false)

  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/weather' element={<ContentPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/logout' element={<LogOutPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App