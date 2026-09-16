import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import Layout from './components/Layout'


function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/home'
            element={<Home />}
          />

          <Route
            path='/about'
            element={<About />}
          />

          <Route
            path='/vans'
            element={<Vans />}
          />

          <Route
            path='/van/:id'
            element={<VanDetail />}
          />
        </Route>
      </Routes>

      <footer>
        <span className='footer-span'>
          © 2026 #VANLIFE
        </span>
      </footer>
    </>
  )
}

export default App
