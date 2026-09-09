import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route, Link } from 'react-router'
import logo from './assets/logo.png'

function App() {

  return (
    <>
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


      <Routes>
        <Route
          path='/home'
          element={<Home />}
        />

        <Route
          path='/about'
          element={<About />}
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
