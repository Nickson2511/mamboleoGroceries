import React from 'react'
import { assets, features } from '../assets/mamboleoImages/greencart_assets/assets'

const BottomBanner = () => {
    return (
        <div className='relative mt-16 md:mt-24 overflow-hidden'>
            
            {/* Background Images */}
            <img 
                src={assets.bottom_banner_image} 
                alt='banner' 
                className='w-full hidden md:block object-cover' 
            />
            <img 
                src={assets.bottom_banner_image_sm} 
                alt='banner' 
                className='w-full md:hidden object-cover' 
            />

            {/* Content Overlay */}
            <div className='absolute inset-0 flex flex-col 
                items-center lg:items-end 
                justify-start md:justify-center 
                px-4 sm:px-6 md:px-8 lg:px-0 
                pt-10 sm:pt-14 md:pt-0 
                lg:pr-16 xl:pr-24'>

                <div className='w-full 
                    max-w-sm 
                    sm:max-w-md 
                    md:max-w-md 
                    lg:max-w-lg'>
                    
                    {/* Title */}
                    <h1 className='text-xl sm:text-2xl md:text-2xl lg:text-3xl 
                        font-semibold text-primary 
                        mb-4 md:mb-5 lg:mb-6 
                        text-center lg:text-left'>
                        Why We Are the Best
                    </h1>

                    {/* Features */}
                    <div className='space-y-4 sm:space-y-5'>
                        {features.map((feature, index) => (
                            <div key={index} className='flex items-start gap-3'>
                                
                                {/* Icon */}
                                <img 
                                    src={feature.icon} 
                                    alt={feature.title} 
                                    className='w-8 sm:w-9 md:w-9 lg:w-11 shrink-0' 
                                />

                                {/* Text */}
                                <div>
                                    <h3 className='text-sm sm:text-base md:text-base lg:text-lg 
                                        font-semibold leading-tight'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-gray-500/70 
                                        text-xs sm:text-sm md:text-sm 
                                        leading-snug'>
                                        {feature.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BottomBanner




