import React, { useState } from 'react'
import '../globals.css'

const Navbar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const openMenu = () => setIsSidebarOpen(true)
    const closeMenu = () => setIsSidebarOpen(false)

    return (
        <>
            <nav className='w-11/12 rounded-full fixed lg:px-8 xl:px-[3%] px-10 py-4 md:flex items-center justify-between inline-flex z-50 bg-pink-dark text-pink-light'>

                <a className='font-bold text-xl'>
                    tasha's
                </a>

                <ul className='hidden md:flex items-center gap-6 rounded-full text-xl'>
                    <li><a href="#about">about me</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>

                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                {/* dark backdrop */}
                <div
                    onClick={closeMenu}
                    className={`
                        fixed inset-0 bg-black/50 z-40
                        transition-opacity duration-300
                        ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                    `}
                />

                {/* sidebar menu */}
                <ul
                    className={`
                        flex md:hidden flex-col gap-4 py-20 px-10
                        fixed top-0 right-0 bottom-0 w-64 h-screen
                        bg-pink-dark z-50
                        transform transition-transform duration-500 ease-in-out
                        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
                    `}
                >
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <li><a href="#abtme" onClick={closeMenu}>about me</a></li>
                    <li><a href="#exp" onClick={closeMenu}>experience</a></li>
                    <li><a href="#projects" onClick={closeMenu}>projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>contact me</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar
