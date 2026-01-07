import { infoList, workexp } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const  About = () => {
  return (
    <div id='about' className="w-full px-10 sm:px-14 lg:px-24 py-24 scroll-mt-20 min-h-screen">

    <div className='flex w-full flex-col lg:flex-row items-start gap-10'>
        {/* left hand side */}
        <div className='w-full lg:w-2/5'>
            <h1 className='text-4xl sm:text-4xl md:text-4xl lg:text-5xl mb-3 inter-bold'>
                who's tasha?
            </h1>

            <div className='border-[0.5px] border-pink-dark bg-cream rounded-2xl p-6 mt-5 mb-5 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:shadow-md'>
            <p className='text-2xl sm:text-2xl md:text-2xl lg:text-xl mb-3 instrument-serif-regular leading-snug'>
                tasha is a recent <i>Computer Science with Artificial Intelligence</i> graduate from <i>University of 
                Nottingham Malaysia</i>. she's an avid tech lover with a strong passion in AI, Software Development 
                and cats!
                <br/> <br/>
                if you're looking for a skilled developer, with an obsession with artificial intelligence and 
                machine learning, or you just need an obnoxious gen-z in the office, tasha is the way to go.
            </p>
            </div>

            <div>
                <h3 className='flex items-end gap-2 text-2xl sm:text-2xl md:text-2xl lg:text-3xl mb-3 inter-bold justify-items-start'>
                    tasha's tech pool
                </h3>

                <ul className="flex flex-wrap gap-4">
                {infoList.map(({ icon, description }, index) => (
                    <li key={index}>
                    <div className="border-[0.5px] border-pink-dark bg-cream rounded-md px-2 py-1 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                        <Image src={icon} alt={description} width={20} height={20} className='inline'/> {description}
                    </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>

        {/* right hand side - experience */}
        <div className='w-full lg:w-3/5'>
            <h1 className='flex items-end gap-2 pb-5 text-3xl sm:text-3xl md:text-3xl lg:text-4xl inter-bold justify-items-start'>
                work experience
            </h1>

        <ul className="flex flex-col gap-4 text-xl sm:text-md md:text-md lg:text-md">
        {workexp.map(({ company, location, length, jobtitle, desc1, desc2 }, index) => (
            <li key={index}>
            <div className="border-[0.5px] border-pink-dark bg-cream rounded-md p-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="flex justify-between items-center mb-1">
                <span className="instrument-serif-regular">
                    {company} | {location}
                </span>
                <span className="instrument-serif-regular">{length}</span>
                </div>

                <div className="inter-bold mb-1">{jobtitle}</div>

                <div className="pl-6 inter text-left text-base sm:text-lg lg:text-lg leading-snug">
                    <ul className='list-disc'>
                        <li>{desc1}</li>
                        <li>{desc2}</li>
                    </ul>
                </div>
            </div>
            </li>
        ))}
        </ul>



        </div>
        
    </div>

    </div>
  )
}

export default About
