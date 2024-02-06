import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ContentPage from '@/pages/ContentPage.jsx'
import MainPage from '@/pages/MainPage.jsx'
import ErrorPage from '@/pages/ErrorPage.jsx'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/weather' element={<ContentPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App