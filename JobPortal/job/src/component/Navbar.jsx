import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { path: '/', title: 'Search' },
        { path: 'post-job', title: 'Post Job' },
        { path: 'about-us', title: 'About' },
    ];

    return (
        <header className="max-w-screen-2x1 container max-auto xl:px-24 px-4">
            <nav className="flex justify-between items-center py-8">
                <a href="/" className="flex items-center gap-2 text-2xl text-black">
                    <span>JobGURU</span>
                </a>
                {/* nav items for large devices */}
                <ul className="hidden md:flex gap-12">
                    {navItems.map(({ path, title }) => (
                        <li key={path} className="text-base text-primary">
                            <NavLink
                                to={path}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {/* signup and login */}
                <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
                    <Link to="/login" className="py-2 px-5 border rounded">
                        Log in
                    </Link>
                    <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">
                        Sign up
                    </Link>
                </div>
                {/* mobile menu */}
                <div className="md:hidden block">
                    <button onClick={handleMenuToggler}>
                        {isMenuOpen ? <FaXmark className="w-5 h-5 text-primary" /> : <FaBarsStaggered className="w-5 h-5 text-primary" />}
                    </button>
                </div>
            </nav>
            {/* mobile menu items */}
            {isMenuOpen && (
                <ul className="md:hidden block">
                    {navItems.map(({ path, title }) => (
                        <li key={path} className="text-base text-primary">
                            <NavLink
                                to={path}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={handleMenuToggler}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
};

export default Navbar;
