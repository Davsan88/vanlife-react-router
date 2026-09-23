import { NavLink, Outlet } from 'react-router'

const HostLayout = () => {

    return (
        <>
            <nav className='host-layout-nav container'>
                <NavLink
                    to='/host'
                    end
                    className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to='/host/income'
                    className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}
                >
                    Income
                </NavLink>
                <NavLink
                    to='/host/vans'
                    className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}
                >
                    Vans
                </NavLink>
                <NavLink
                    to='/host/reviews'
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