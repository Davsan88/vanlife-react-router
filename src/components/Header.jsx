import { NavLink, Link } from 'react-router'
import logo from '../assets/logo.png'
import icon from '../assets/icon.png'

const Header = () => {
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return (
        <header>
            <nav className='container'>
                <NavLink to='/'>
                    <img
                        src={logo}
                        alt="#VANLIFE log"
                        className='nav-logo'
                    />
                </NavLink>

                <div
                    className="nav-links-div"
                >
                    <NavLink
                        to='/host'
                        className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}
                    >
                        Host
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}>
                        About
                    </NavLink>
                    <NavLink
                        to='/vans'
                        className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}>
                        Vans
                    </NavLink>
                    <Link
                        to='login'
                        className='login-link'
                    >
                        <img
                            src={icon}
                            className="login-icon"
                        />
                    </Link>
                    <button onClick={fakeLogOut}>X</button>
                </div>
            </nav>
        </header>
    )
}

export default Header
