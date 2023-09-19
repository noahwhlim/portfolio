import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'

const projects = [
    {
        name: "Corn Cash Price Prediction",
        description: "A price prediction tool that was trained on data from USDA. Predicts prices of corn for the year with >95% accuracy.",
        image: "/corn.png",
        github: "http://github.com/noahwhlim/CornCashPrices",
        link: "https://github.com/noahwhlim/CornCashPrices",
    },
    {
        name: "Touch Grass Discord Bot",
        description: "A simple Discord bot that utilizes API from www.openweathermap.org. Type !grass {location} to see if it's safe to go outside and touch some grass.",
        image: "/touch-grass.png",
        github: "https://github.com/noahwhlim/touch-grass",
        link: "https://github.com/noahwhlim/touch-grass",
    },
    {
        name: "Snake Game",
        description: "A snake game that runs in the terminal on Mac and Windows. Built using the ncurses library in C++.",
        image: "/snake.png",
        github: "https://github.com/noahwhlim/Snake",
        link: "https://github.com/noahwhlim/Snake",
    },
];

    

export const ProjectSection = () => {
  return (
    <section id="projects">
        <h1 className='text-center font-bold text-4xl'>
            Projects
            <hr className='w-6 h-1 mx-auto my-4 bg-yellow-500 border-0 rounded'/>
        </h1>

        <div className='flex flex-col space-y-28'>
            {projects.map((item, idx) => {
                return (
                    <div key={idx}>
                        <SlideUp offset='300px 0px -300px 0px'>
                            <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                <div className='mt-8 md:w-1/2'>
                                    <Link href={item.link} target='_blank'>
                                        <Image 
                                            src={item.image}
                                            alt=""
                                            width={1000}
                                            height={1000}
                                            className='rounded-xl shadow-xl hover:opacity-70'
                                        />
                                    </Link>
                                </div>
                                <div className='mt-12 md:w-1/2'>
                                    <h1 className='text-4xl font-bold mb-6'>{item.name}</h1>
                                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                                        {item.description}
                                    </p>
                                    <div className='flex flex-row align-bottom space-x-4'>
                                        <Link href={item.github} target="_blank">
                                            <BsGithub 
                                                size={30}
                                                className='hover:translate-y-1 transition-transform cursor-pointer'
                                            />
                                        </Link>
                                        <Link href={item.link} target="_blank">
                                            <BsArrowUpRightSquare 
                                                size={30}
                                                className='hover:translate-y-1 transition-transform cursor-pointer'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
