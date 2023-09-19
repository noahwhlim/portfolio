import React from 'react'
import Image from "next/image"


const skills = [
    { skill: "C" },
    { skill: "C++" },  
    { skill: "Javascript" },
    { skill: "SQL" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "TailwindCSS" },
    { skill: "R" },
]

export const AboutSection = () => {
  return (
    <section id="about">
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl'>About Me
                <hr className='w-6 h-1 mx-auto my-4 bg-yellow-500 border-0 rounded'/>
            </h1>
            <div className='flex flex-col space-y-10 item-stretch justify-center align-top md:flex-row md:text-left md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to know me!</h1>
                    <p>
                        Hi, my name is Noah and I am a {" "}
                        <span className='font-bold'>{"highly ambitious, "}</span>
                        <span className='font-bold'>{"self-motivated, and "}</span>
                        <span className='font-bold'>{"driven "}</span>
                        software engineer based in Ames, IA.
                    </p>
                    <br />
                    <p>
                        I am currently doing my Bachelors degree in Computer Science in Iowa State University 
                        and will be graduating in December 2023.
                    </p>
                    <br />
                    <p>
                        I have a range of hobbies that keep me busy ranging from the gym, travelling, to playing instruments.
                        I am always searching for new things to dip my toes in and keep life exciting.
                    </p>
                    <br />
                    <p>
                        I believe that you should {" "}
                        <span className='font-bold text-yellow-500'>{"never settle "}</span>
                        and that's what I strive to do, I have a passion for developing and a desire to push myself as far as I can.
                        I am excited to see where my career goes and am always open to new opportunities wherever that may take me. 
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Skills</h1>
                    <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                        <p className='bg-yellow-400 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-yellow-500 hover:scale-105 transition duration-400 cursor-default'>
                            Java
                        </p>
                        <p className='bg-yellow-400 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-yellow-500 hover:scale-105 transition duration-400 cursor-default'>
                            ReactJS
                        </p>
                        <p className='bg-yellow-400 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-yellow-500 hover:scale-105 transition duration-400 cursor-default'>
                            Python
                        </p>
                        {skills.map((item, idx) => {
                            return (
                                <p key={idx} className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-gray-300 hover:scale-105 transition duration-400 cursor-default '>
                                    {item.skill}
                                </p>
                            )
                        })}
                        
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}
