import { Link } from 'react-router'
import logo from '../assets/logo.png'

const Header = () => {

    return (
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
    )
}

export default Header
