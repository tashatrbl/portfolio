import React from 'react'
import {assets} from '@/assets/assets'
import Image from 'next/image'

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-10 sm:px-15 lg:px-25 py-24 scroll-mt-20"
    >
      {/* Two-column wrapper */}
      <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center px-6 lg:px-20 gap-12">
        
        {/* Left column */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl lg:text-6xl mb-5 instrument-serif-regular">
            Get in Touch.
          </h2>

          <p className="text-3xl mb-5 instrument-serif-regular leading-snug">
            Want to collaborate and brainstorm some ideas together?<br/>Shoot me an email!
          </p>

          <ul className="flex md:flex items-center justify-start gap-3">
            <li>
                <a href={"https://www.linkedin.com/in/carmel-natasha-barnabas-490801225/"} target="_blank">
                <Image src={assets.linkedin_icon} alt="LinkedIn" width={40}height={40}/>
                </a>
            </li>
            <li>
                <a href={"https://github.com/tashatrbl"} target="_blank">
                <Image src={assets.github_icon} alt="LinkedIn" width={40}height={40}/>
                </a>
            </li>
        </ul>
        </div>

        {/* Right column */}
        <div className="w-full lg:w-1/2">
          <form className="max-w-2xl mx-auto border-[0.5px] border-pink-dark rounded-md bg-cream p-6">
            
            <label className="block text-pink-dark font-semibold mb-1" htmlFor="email">
                email
            </label>
            <input
                type="email"
                id="email"
                required
                className="
                    w-full
                    mb-4
                    px-3 py-2
                    text-sm
                    sm:px-4 sm:py-3 sm:text-base
                    border border-pink-dark
                    rounded-md
                    bg-white
                    focus:outline-none
                    focus:ring-1
                    focus:ring-pink-dark
                    "
            />

            <label className="block text-pink-dark font-semibold mb-1" htmlFor="subject">
                subject
            </label>
            <input
                type="text"
                id="subject"
                placeholder=""
                required
                className="
                    w-full
                    mb-4
                    px-3 py-2
                    text-sm
                    sm:px-4 sm:py-3 sm:text-base
                    border border-pink-dark
                    rounded-md
                    bg-white
                    focus:outline-none
                    focus:ring-1
                    focus:ring-pink-dark
                    "
            />

            <label
                className="block text-pink-dark font-semibold mb-1"
                htmlFor="message"
            >
                what's on your mind?
            </label>
            <textarea
                id="message"
                rows={3}
                placeholder=""
                required
                className="w-full mb-6 p-4 border border-pink-dark rounded-md bg-white resize-none focus:outline-none focus:ring-1 focus:ring-pink-dark"
            />

            <div className="flex justify-center mt-6">
            <button
                type="submit"
                className="px-3 py-2 rounded-md inter-bold bg-pink-dark text-pink-light hover:bg-pink-darker cursor-pointer transition-colors duration-300 ease-in-out"
            >
                send
            </button>
            </div>

          </form>
        </div>

      </div>

        <div className="flex justify-center items-center py-4 instrument-serif-italic text-sm text-pink-dark">
        © Carmel Natasha Barnabas. Last updated January 2026.
        </div>
    </div>
  )
}

export default Contact
