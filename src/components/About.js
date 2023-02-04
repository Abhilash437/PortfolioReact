import React from 'react';
import { IoCodeWorking } from 'react-icons/io5';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Spline from '@splinetool/react-spline';
import abhi from '../assets/Images/abhi.jpeg';

const data = [
    {
        id:1,
        title: 'The Editorial Board',
        subtitle: 'Mysuru',
        content: `Editor at The Editorial Board's art section`,
        timeline: '2021 - present'
    },
    {
        id:2,
        title: 'GDSC',
        subtitle: 'Mysuru',
        content: `Web dev lead at Google Developers Student Club JSS STU`,
        timeline: '2022 - present'
    }
]

const About = () => {
  return (
    <main className='w-[80%] mt-5'>
        <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24' id="about">
            <div className='w-full height-420 flex items-center justify-center'>
                <div className='w-275 h-340 bg-emerald-200 rounded-md relative'>
                    <img className='w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg' src={abhi} alt="Abhilash">
                    
                    </img>
                </div>
            </div>
            <div className='w-full h-420 flex flex-col items-center justify-center pt-20'>
                <p className='text-lg text-black text-justify'>Hi, I'm Abhilash, a computer science student at JSS STU Mysore. I'm a full-stack web developer with a passion for coding and digital art. Over the past 1.5 years, I have been dedicated to learning web development and have become proficient in HTML, CSS, JavaScript, NodeJS, Express JS, MongoDB, Mongoose, React JS, and MySQL. My primary focus is on the MERN stack, and I'm constantly striving to improve my skills and stay up-to-date with the latest technologies. In addition to web development, I'm also a data science enthusiast and enjoy exploring ways to analyze and visualize data.</p>
            </div>
        </section>

        <section className='w-full flex items-center justify-center'>
            <VerticalTimeline>
                {data && data.map((experience,i)=>(
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 89, 123)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 89, 123)' }}
                    date={experience.timeline}
                    iconStyle={{ background: 'rgb(255, 89, 123)', color: '#fff' }}
                    icon={<IoCodeWorking />}
                    key={i}
                    >
                        <h3 className="vertical-timeline-element-title text-white">{experience.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle text-white">{experience.subtitle}</h4>
                        <p className='text-white'>
                        {experience.content}
                        </p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
        <section className='grid grid-cols-1 md:grid-cols-2 w-full h-full justify-center items-center '>
            <div className='hidden md:block w-full md:w-sreen h-screen md:h-screen mb-0'>
                <Spline className="hidden md:block" scene="https://prod.spline.design/f-0r3BJqWXVCPg64/scene.splinecode" />
            </div>
            <div class="rounded shadow-lg h-100 md:h-fit w-100 -mt-0 md:mt-1">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Front-End Development</div>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML5</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS3</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JQuery</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React JS</span>
            </div>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Back-End Development</div>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node JS</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express JS</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mongoose</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REST API</span>
            </div>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Programming Languages</div>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C++</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
            </div>
            </div>

        </section>
    </main>
  )
}

export default About