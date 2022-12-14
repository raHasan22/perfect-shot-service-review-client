import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthPrivider';

const Navigation = () => {
    const { user, logout } = useContext(AuthContext);

    const signOutHandle = () =>{
        logout()
        .then()
        .catch();
    }

    const navItems = <>
                <li className='font-semibold'><Link to='/'>Home</Link></li>
                <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
                {
                    user?.email ?
                    <>
                      <li className='font-semibold'>
                        <button onClick={signOutHandle} className='btn-ghost'>Sign Out</button>
                      </li>
                    </>
                    :
                    <li className='font-semibold'><Link to='/login'>Login</Link></li>
                }
                {
                    user?.email && <li className='font-semibold'><Link to='/checkreview'>My reviews</Link></li>
                }
    </>

    return (
        <div>
            <div className="navbar bg-base-100 lg:px-28">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl font-extrabold">PerfectSHOT</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                    {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                    user?.email ?
                    <>
                      <Link to='/services' className="btn">{user?.email}</Link>
                    </>
                    :
                    <Link to='/login' className="btn">Not registered</Link>
                }
                        
                </div>
                
            </div>
        </div>
    );
};

export default Navigation;