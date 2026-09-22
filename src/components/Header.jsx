import { NavLink } from 'react-router'
import logo from '../assets/logo.png'

const Header = () => {

    return (
        <header>
            <nav className='container'>
                <NavLink to='/home'>
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
                        className={({isActive}) => isActive ? 'nav-active' : 'nav-link'}
                    >
                        Host
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({isActive}) => isActive ? 'nav-active' : 'nav-link'}>
                        About
                    </NavLink>
                    <NavLink
                        to='/vans'
                        className={({isActive}) => isActive ? 'nav-active' : 'nav-link'}>
                        Vans
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header
