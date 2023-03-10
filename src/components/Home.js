import React from 'react';
import Spline from '@splinetool/react-spline';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import {PacmanLoader} from 'react-spinners';
import {useState, useEffect} from 'react';
import miniroom from '../assets/Images/miniroom.png';

const Home = () => {
  const [loading, setLoading] = useState(false);
 useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{
    setLoading(false);
  },2500);
 },[])
  return (
      <>
      {
        loading ? 
        <PacmanLoader color="#FF597B" />

        :
        <>
        <div className="relative w-screen h-screen md:mt-16" id="home">
            {/* <Spline scene="https://prod.spline.design/KX3tlyDGj0qYHHE5/scene.splinecode"/> */}
            <Spline className="hidden md:block" scene="https://prod.spline.design/KX3tlyDGj0qYHHE5/scene.splinecode" />
            <img src={miniroom} className='block md:hidden absolute top-52 w-96 h-96'></img>
                <div className='absolute bottom-20 w-full justify-center items-center flex mt-16'>
                    <div className='hidden md:block shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl'>
                        <p className='text-textBase'>Press and drag to orbit</p>
                    </div>
                    <div className='block md:hidden shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl'>
                        <p className='text-textBase'>Go down ;)</p>
                    </div>
                </div>
        </div>
        <About/>
        <Projects/>
        <Contact/>
        </>

      }
        
      </>
  )
}

export default Home