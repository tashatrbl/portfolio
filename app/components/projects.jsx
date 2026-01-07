import React from 'react'
import { projects } from '@/assets/assets'
import Image from 'next/image'

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full px-6 sm:px-10 lg:px-20 py-24 scroll-mt-20"
    >
      {/* Section title */}
      <h1 className="text-4xl lg:text-5xl mb-6 inter-bold">
        projects
      </h1>

      {/* Grid controls overall card width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 px-8 py-2
      ">
        {projects.map(({ name, desc, link, tech, snippet }, index) => (
          <div
            key={index}
            /* Card fills entire grid column */
            className="
              border
              border-pink-dark
              bg-cream
              rounded-lg
              transition-transform
              duration-200
              hover:-translate-y-1
              hover:shadow-md
            "
          >
            {/* Image */}
            <div className="h-60 w-full border-b border-pink-dark">
              <Image
                src={snippet}
                alt={name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Content padding controls card density */}
            <div className="p-4">
              <h3 className="instrument-serif-regular text-pink-dark text-3xl mb-3 leading-snug">
                {name}
              </h3>

              <p className="inter text-pink-dark/80 leading-snug">
                {desc}
              </p>

              <a href={link} target="_blank" rel="noopener noreferrer"
                className="inter text-sm text-pink-dark underline mt-2 inline-block">
                See Project 
                </a>↗


              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-md inter-bold bg-pink-dark text-pink-light"
                    >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
