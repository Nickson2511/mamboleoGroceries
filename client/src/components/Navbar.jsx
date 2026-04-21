import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/mamboleoImages/greencart_assets/assets'
import { useAppContext } from '../context/useAppContext'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const {
        user,
        setUser,
        setShowUserLogin,
        navigate,
        setSearchQuery,
        searchQuery,
        getCartCount
    } = useAppContext()

    const logout = () => {
        setUser(null)
        navigate('/')
    }

    useEffect(() => {
        if (searchQuery.length > 0) {
            navigate('/products')
        }
    }, [searchQuery, navigate])

    return (
        <nav className="w-full border-b border-gray-300 bg-white sticky top-0 z-50">
            
            {/* Container */}
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4">

                {/* Logo */}
                <NavLink to="/" onClick={() => setOpen(false)}>
                    <img className="h-8 sm:h-9" src={assets.logo} alt="logo" />
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">

                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">All Products</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                    {/* Search */}
                    <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                        <input
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="py-1.5 w-40 xl:w-56 bg-transparent outline-none placeholder-gray-500"
                            type="text"
                            placeholder="Search products"
                        />
                        <img src={assets.search_icon} alt="search" className="h-4 w-4" />
                    </div>

                    {/* Cart */}
                    <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
                        <img src={assets.nav_cart_icon} alt="cart" className="w-6 opacity-80" />
                        <span className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] flex items-center justify-center rounded-full">
                            {getCartCount()}
                        </span>
                    </div>

                    {/* Auth */}
                    {!user ? (
                        <button
                            onClick={() => setShowUserLogin(true)}
                            className="px-6 lg:px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
                        >
                            Login
                        </button>
                    ) : (
                        <div className="relative">
                            <img
                                src={assets.profile_icon}
                                className="w-9 lg:w-10 cursor-pointer"
                                alt="profile"
                                onClick={() => setShowMenu(prev => !prev)}
                            />

                            {showMenu && (
                                <ul className="absolute top-12 right-0 bg-white shadow border border-gray-200 py-2 w-32 rounded-md text-sm z-50">
                                    <li
                                        onClick={() => {
                                            navigate('/my-orders')
                                            setShowMenu(false)
                                        }}
                                        className="px-3 py-2 hover:bg-primary/10 cursor-pointer"
                                    >
                                        My Orders
                                    </li>
                                    <li
                                        onClick={() => {
                                            logout()
                                            setShowMenu(false)
                                        }}
                                        className="px-3 py-2 hover:bg-primary/10 cursor-pointer"
                                    >
                                        Logout
                                    </li>
                                </ul>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile Icons */}
                <div className="flex items-center gap-4 md:hidden">

                    {/* Cart */}
                    <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
                        <img src={assets.nav_cart_icon} alt="cart" className="w-6 opacity-80" />
                        <span className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] flex items-center justify-center rounded-full">
                            {getCartCount()}
                        </span>
                    </div>

                    {/* Menu Toggle */}
                    <button onClick={() => setOpen(prev => !prev)}>
                        <img src={assets.menu_icon} alt="menu" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-sm px-5 py-4 space-y-3 text-sm">

                    <NavLink to="/" onClick={() => setOpen(false)} className="block">
                        Home
                    </NavLink>

                    <NavLink to="/products" onClick={() => setOpen(false)} className="block">
                        All Products
                    </NavLink>

                    {user && (
                        <NavLink to="/my-orders" onClick={() => setOpen(false)} className="block">
                            My Orders
                        </NavLink>
                    )}

                    <NavLink to="/contact" onClick={() => setOpen(false)} className="block">
                        Contact
                    </NavLink>

                    {/* Mobile Search */}
                    <div className="flex items-center border border-gray-300 px-3 rounded-full mt-2">
                        <input
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="py-2 w-full bg-transparent outline-none placeholder-gray-500 text-sm"
                            type="text"
                            placeholder="Search products"
                        />
                        <img src={assets.search_icon} alt="search" className="h-4 w-4" />
                    </div>

                    {!user ? (
                        <button
                            onClick={() => {
                                setOpen(false)
                                setShowUserLogin(true)
                            }}
                            className="w-full mt-3 py-2 bg-primary hover:bg-primary-dull text-white rounded-full"
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={logout}
                            className="w-full mt-3 py-2 bg-primary hover:bg-primary-dull text-white rounded-full"
                        >
                            Logout
                        </button>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar






