import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="navbar md:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="ps-0 pe-1 btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 my-primary font-semibold ">
                        <Link to='/'>Home</Link>
                        <Link tabIndex={0} to='/about'>About</Link>
                        <Link to='/blog'>Blog</Link>
                    </ul>
                </div>
                <Link to='/' className="flex normal-case text-3xl font-bold my-primary">
                    <span>RannaGh</span>
                    <img className='h-8' src="/logo.png" alt="site logo---" />
                    <span>r</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-semibold my-primary">
                    <Link to='/'>Home</Link>
                    <Link className='mx-6' tabIndex={0} to='/about'>About</Link>
                    <Link to='/blog'>Blog</Link>
                </ul>
            </div>
            <div className="navbar-end">
                {user &&
                    <div className="w-12 me-1 rounded-full">
                        { user.photoURL ?
                            <img className='h-12 rounded-full' src={user.photoURL} alt="" title={user.displayName}/> :
                            <FaUserCircle className='w-12 h-12' title='User Name'/>
                        }
                    </div>

                }
                {user ?
                    <button onClick={handleLogOut} className='my-bg-primary my-hover px-3 md:px-6 py-1 md:py-2 text-2xl text-white font-semibold rounded-lg'>Logout</button> :
                    <Link to='/login'>
                        <button className='my-bg-primary my-hover px-3 md:px-6 py-1 md:py-2 text-2xl text-white font-semibold rounded-lg'>Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;