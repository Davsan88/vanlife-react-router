import { NavLink, Link } from 'react-router'
import logo from '../assets/logo.png'
import { IoMdContact, IoMdLogOut } from 'react-icons/io'

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
                        aria-label="Log in"
                    >
                        <IoMdContact 
                            size={22} 
                            strokeWidth={5}                          color="var(--color-grey-text)"
                        />
                    </Link>
                    <button
                        className="log-out-btn"
                        onClick={fakeLogOut}
                        aria-label="Log out"
                    >
                        <IoMdLogOut 
                            size={22} 
                            strokeWidth={5} 
                        />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header
