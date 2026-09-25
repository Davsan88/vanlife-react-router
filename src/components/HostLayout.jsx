import { NavLink, Outlet } from 'react-router'

const HostLayout = () => {

    return (
        <>
            <nav className='host-layout-nav container'>
                <NavLink
                    to='.'
                    end
                    className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to='income'
                    className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}
                >
                    Income
                </NavLink>
                <NavLink
                    to='vans'
                    className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}
                >
                    Vans
                </NavLink>
                <NavLink
                    to='reviews'
                    className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout