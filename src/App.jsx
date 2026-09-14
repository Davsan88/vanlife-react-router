import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import { Routes, Route, Link } from 'react-router'
import logo from './assets/logo.png'

function App() {

  return (
    <>
      <header>
        <nav>
          <Link to='/home'>
            <img
              src={logo}
              alt="#VANLIFE log"
              className='nav-logo'
            />
          </Link>

          <div
            className="nav-links-div"
          >
            <Link
              to='/about'
              className='nav-link'
            >
              About
            </Link>
            <Link
              to='/vans'
              className='nav-link'
            >
              Vans
            </Link>
          </div>
        </nav>
      </header>


      <Routes>
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
