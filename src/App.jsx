import './App.css'
import Home from './components/Home'
import About from './components/About'
import { Routes, Route, Link } from 'react-router'
import logo from './assets/logo.png'

function App() {

  return (
    <>
      <nav>
        <Link to='/home'>
          <img src={logo} alt="" />
        </Link>

        <div 
          className="links-div"
        >
          <Link to='/about'>
            About
          </Link>
          <Link to='/vans'>
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
        © 2026 #VANLIFE
      </footer>
    </>
  )
}

export default App
