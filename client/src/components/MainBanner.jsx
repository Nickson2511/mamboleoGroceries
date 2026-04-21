import React from 'react'
import { assets } from '../assets/mamboleoImages/greencart_assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
    return (
        <div className="relative w-full overflow-hidden">

            {/* Background Images */}
            <img
                src={assets.main_banner_bg}
                alt="banner"
                className="w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[600px] object-cover hidden md:block"
            />

            <img
                src={assets.main_banner_bg_sm}
                alt="banner"
                className="w-full h-[420px] sm:h-[480px] object-cover md:hidden"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-end md:items-center">
                
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-10 md:pb-0">
                    
                    <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">

                        {/* Heading */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug md:leading-tight">
                            Need Somewhere You Can Shop Groceries? <br className="hidden sm:block" />
                            <span className="text-primary">Mamboleo Groceries</span> does it better.
                        </h1>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-6">

                            {/* Primary CTA */}
                            <Link
                                to="/products"
                                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-primary hover:bg-primary-dull transition rounded-lg text-white font-medium"
                            >
                                Shop Now
                                <img
                                    className="w-4 h-4 transition group-hover:translate-x-1"
                                    src={assets.white_arrow_icon}
                                    alt="arrow"
                                />
                            </Link>

                            {/* Secondary CTA */}
                            <Link
                                to="/products"
                                className="hidden md:flex items-center gap-2 px-6 py-3 text-gray-800 font-medium hover:text-primary transition"
                            >
                                Explore Deals
                                <img
                                    className="w-4 h-4 transition group-hover:translate-x-1"
                                    src={assets.black_arrow_icon}
                                    alt="arrow"
                                />
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner