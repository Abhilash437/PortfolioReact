import React from 'react'
import { IoLogoGithub } from 'react-icons/io5';
import { motion } from 'framer-motion';
import youtubeclone from '../assets/Images/youtubeclone.png';
import travelguru from '../assets/Images/travelguru.png';
import blog from '../assets/Images/blog.png';
import HMS from '../assets/Images/HMS.png';
import todo from '../assets/Images/todolist.png';

const data = [
    {
        id:1,
        title:'YouTube Clone',
        technologies:'React JS, Material UI and YouTube API',
        githubLink:'https://github.com/Abhilash437/Youtube-Clone',
        imgSrc:youtubeclone
    },
    {
        id:2,
        title:'Travel Guru',
        technologies:'React JS, TripAdvisor API and Google Maps API',
        githubLink:'https://github.com/Abhilash437/Travel-Guru',
        imgSrc:travelguru
    },
    {
        id:3,
        title:'Blog Website',
        technologies:'Node JS, MongoDB, Mongoose, Express JS and EJS',
        githubLink:'lhttps://github.com/Abhilash437/Blog-Website',
        imgSrc:blog
    },
    {
        id:4,
        title:'Hostel Management',
        technologies:'React JS, Node JS and MySQL',
        githubLink:'https://github.com/Abhilash437/Hostel-Management-and-Booking',
        imgSrc:HMS
    },
    {
        id:5,
        title:'ToDo List',
        technologies:'Node JS, Express JS, MongoDB, Mongoose and EJS',
        githubLink:'https://github.com/Abhilash437/ToDo-List',
        imgSrc:todo
    },
]

const Projects = () => {
  return (
    <section className='flex flex-wrap items-center justify-evenly my-20 p-2 gap-4' id="projects">
        {data.map((project)=>(
        <div className='border border-zinc-800 rounded-md p-2 mb-10 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>
            <p className='text-md text-Black font-medium'>{project.title.length > 25 ? `${project.title.slice(0, 25)}...` : project.title}</p>
            <img src={project.imgSrc} alt="Project" className='w-full h-full object-cover rounded-md my-4'></img>
            <div className='flex flex-1 items-center justify-between'>
                <p className='text-lg text-black'>
                    Technologies:<span className='block text-sm text-black'>{project.technologies.length > 25 ? project.technologies.slice(0,25) + '...' : project.technologies}</span>
                </p>

                <motion.a whileTap={{scale:0.8}} href={project.githubLink}>
                    <div>
                        <IoLogoGithub className='text-black text-3xl cursor-pointer'/>
                    </div>
                </motion.a>
            </div>
        </div>

        ))}
    </section>
  )
}

export default Projects