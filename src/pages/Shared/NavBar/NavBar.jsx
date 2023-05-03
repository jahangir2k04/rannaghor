import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="ps-0 pe-1 btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 my-primary font-semibold ">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li tabIndex={0}>
                            <Link to='/about'>About</Link>
                        </li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <Link to='/' className="flex normal-case text-3xl font-bold my-primary">
                    RannaGh
                    <img className='h-8' src="/public/logo.png" alt="Site Logo" />
                    r
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-semibold my-primary">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li tabIndex={0}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 me-1 rounded-full">
                        <img src="/public/logo.png" />
                    </div>
                </label>
                <Link to='/login'>
                    <button  className='my-bg-primary my-hover px-3 md:px-6 py-1 md:py-2 text-2xl text-white font-semibold rounded-lg'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;