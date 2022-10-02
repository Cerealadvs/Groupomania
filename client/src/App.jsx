import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InfoContextProvider from './Context/InfoContext'
import Header from './components/Header'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <InfoContextProvider>
        <Header />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<Login />} />
        </Routes>
      </InfoContextProvider>
    </BrowserRouter>
  )
}

export default App
