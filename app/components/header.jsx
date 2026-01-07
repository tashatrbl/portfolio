import React from 'react'
import {assets} from '@/assets/assets'
import Image from 'next/image'


const Header = () => {
  return (
<div className="w-full h-screen px-10 sm:px-15 lg:px-25 pt-80">
  <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
        
    <div className="flex-1 text-left">
        <h2 className="flex items-end gap-2 text-5xl sm:text-5xl md:text-5xl lg:text-6xl mb-3 inter-bold justify-items-start">
            hey, i'm tasha!
        </h2>

        <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl mb-3 instrument-serif-regular leading-snug">
            <i>software</i> developer, <i>artificial</i> intelligence <br/> enthusiast. 
            also a cat <i>lover</i>.
        </h3>

        <h3 className="text-md sm:text-md md:text-md lg:text-md  mb-3 inter leading-snug">
          <i>BSc. (Hons) Computer Science with AI @ <b>UoNM</b></i> <br/>
          <i>Currently an IT Executive @ <b>Sarawak Energy Berhad</b></i>
        </h3>


        <ul className="flex md:flex items-center justify-start gap-3">
            <li>
                <Image src={assets.resume_icon} alt="LinkedIn" width={40}height={40}/>
            </li>
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
  
    </div>
    </div>
  )
}

export default Header
