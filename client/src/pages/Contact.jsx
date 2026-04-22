import React, { useState } from 'react'
import { assets } from '../assets/mamboleoImages/greencart_assets/assets'

// Reusable Input
const InputField = ({ type, placeholder, name, handleChange, value }) => (
    <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg outline-none text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition'
    />
)

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <div className='mt-6 sm:mt-10 md:mt-16 pb-10 md:pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto'>

            {/* Title */}
            <p className='text-xl sm:text-2xl md:text-3xl font-medium text-gray-700'>
                Contact <span className='text-primary font-semibold'>Us</span>
            </p>

            {/* Layout */}
            <div className='flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10 mt-4 sm:mt-6 lg:mt-10'>

                {/* FORM */}
                <div className='w-full lg:w-1/2'>
                    <form onSubmit={handleSubmit} className='space-y-3 sm:space-y-4 text-sm'>

                        <InputField
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            value={form.name}
                            handleChange={handleChange}
                        />

                        <InputField
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            value={form.email}
                            handleChange={handleChange}
                        />

                        <InputField
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            value={form.subject}
                            handleChange={handleChange}
                        />

                        {/* Message */}
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            required
                            className='w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg outline-none text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition resize-none'
                        />

                        {/* Button */}
                        <button className='w-full mt-3 sm:mt-4 bg-primary text-white py-2 sm:py-3 rounded-lg hover:bg-primary-dull transition uppercase tracking-wide text-sm sm:text-base'>
                            Send Message
                        </button>

                    </form>
                </div>

                {/* IMAGE */}
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <img
                        src={assets.add_address_iamge} // reuse same image or replace later
                        alt='Contact'
                        className='w-full max-w-[180px] sm:max-w-xs md:max-w-md lg:max-w-lg object-contain'
                    />
                </div>

            </div>
        </div>
    )
}

export default Contact