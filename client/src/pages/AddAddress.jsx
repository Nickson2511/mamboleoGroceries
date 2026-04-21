import React, { useState } from 'react'
import { assets } from '../assets/mamboleoImages/greencart_assets/assets'

// Reusable Input Field Component
const InputField = ({ type, placeholder, name, handleChange, address }) => (
    <input
        className='w-full px-3 py-3 border border-gray-300 rounded-lg outline-none text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition'
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={address[name]}
        required
    />
)

const AddAddress = () => {
    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setAddress((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        console.log(address)
    }

    return (
        <div className='mt-10 md:mt-16 pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto'>
            
            {/* Title */}
            <p className='text-2xl sm:text-3xl font-medium text-gray-700'>
                Add Shipping <span className='text-primary font-semibold'>Address</span>
            </p>

            {/* Layout */}
            <div className='flex flex-col lg:flex-row items-center gap-10 mt-8 lg:mt-10'>
                
                {/* LEFT: FORM */}
                <div className='w-full lg:w-1/2'>
                    <form onSubmit={onSubmitHandler} className='space-y-4 text-sm'>

                        {/* Name */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <InputField {...{ handleChange, address }} name='firstName' type='text' placeholder='First Name' />
                            <InputField {...{ handleChange, address }} name='lastName' type='text' placeholder='Last Name' />
                        </div>

                        {/* Email */}
                        <InputField {...{ handleChange, address }} name='email' type='email' placeholder='Email Address' />

                        {/* Street */}
                        <InputField {...{ handleChange, address }} name='street' type='text' placeholder='Street Address' />

                        {/* City + State */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <InputField {...{ handleChange, address }} name='city' type='text' placeholder='City' />
                            <InputField {...{ handleChange, address }} name='state' type='text' placeholder='State' />
                        </div>

                        {/* Zip + Country */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <InputField {...{ handleChange, address }} name='zipcode' type='number' placeholder='Zip Code' />
                            <InputField {...{ handleChange, address }} name='country' type='text' placeholder='Country' />
                        </div>

                        {/* Phone */}
                        <InputField {...{ handleChange, address }} name='phone' type='text' placeholder='Phone Number' />

                        {/* Button */}
                        <button className='w-full mt-4 bg-primary text-white py-3 rounded-lg hover:bg-primary-dull transition cursor-pointer uppercase tracking-wide'>
                            Save Address
                        </button>
                    </form>
                </div>

                {/* RIGHT: IMAGE */}
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <img
                        src={assets.add_address_iamge}
                        alt='Add Address'
                        className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain'
                    />
                </div>

            </div>
        </div>
    )
}

export default AddAddress