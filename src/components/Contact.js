import React from 'react'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const data = [
    {
        id:1,
        title:'Github',
        icon:<IoLogoGithub className='text-black text-3xl cursor-pointer'/>,
        link:'https://github.com/Abhilash437'
    },
    {
        id:2,
        title:'LinkedIn',
        icon:<IoLogoLinkedin className='text-blue-500 text-3xl cursor-pointer'/>,
        link:'https://www.linkedin.com/in/abhilashshathwar'
    },
    {
        id:3,
        title:'Instagram',
        icon:<IoLogoInstagram className='text-pink-500 text-3xl cursor-pointer'/>,
        link:'https://instagram.com/abhilash_437?igshid=ZDdkNTZiNTM='
    },
    {
        id:4,
        title:'Twitter',
        icon:<IoLogoTwitter className='text-blue-800 text-3xl cursor-pointer'/>,
        link:'https://mobile.twitter.com/abhilashindia7'
    },
]

const Contact = () => {
  return (
      <>
        <section
            id="contacts"
            className="flex flex-col items-center justify-evenly w-full my-24"
          >
            <p className="text-2xl text-black capitalize">Follow me on</p>
            <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4 p-4">
              {data &&
                data.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={n.link}
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.icon}
                    <p className="text-lg text-black">{n.title}</p>
                  </motion.a>
                ))}
            </div>
          </section>
      </>
  )
}

export default Contact