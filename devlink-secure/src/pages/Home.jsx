import React from 'react'
import Header from '../components/Header'
import { AboutContainers, FeaturesContainer, Fragments } from '../components/Fragments'

function Home() {
    return (
        <>
            
            <div className='h-screen relative flex bg-black p-3'>
                {/* header */}
                <Header />

                {/* Fragments should appear underneath */}
                <div className='overflow-hidden mt-12 md:mt-[6%] ml-6 z-10 relative'>
                    <Fragments />
                </div>

                {/* Section placed absolutely on top */}
                <section className="absolute top-0 left-0 w-full h-full z-20 bg-[rgba(43,42,42,0.7)]">

                    {/* container for holding the text & cta buttons*/}
                    <div className='w-[1100px] text-white  mt-38 ml-[23%] rounded text-center p-3'>
                        <h1 className='text-5xl leading-tight text-[#00ffff]'>Start a project in minutes.</h1>
                        <h1 className='text-4xl leading-tight mt-2'>Assign tasks to available developers.</h1>
                        <h1 className='text-3xl leading-tight mt-2'>Chat, track progress, and get your work done faster.</h1>
                        <br />
                        <h3 className=''>Easily create and manage your projects from start to finish. Assign tasks to the right developers, stay in touch, and keep everything on track  all from one dashboard.</h3>
                        <br />

                        <div className='space-x-48 mt-16'>
                            <button className='py-4 px-8 bg-white text-black rounded'>Start Now</button>
                            <button className='py-4 px-8 bg-white text-black rounded'>Live Demo</button>
                        </div>

                    </div>

                </section>

            </div>


            {/* about us section */}
            <section className='h-90 bg-[#1a1a1a] p-3 grid items-center'>
                <h2 className='text-center text-3xl font-bold text-white'>About Us</h2>

                <AboutContainers/>
            </section>

            {/* features section */}
            <section className=' bg-[#202020] p-3'>
                <h2 className='text-white text-3xl font-bold text-center mb-4'>Features</h2>

                <FeaturesContainer />
            </section>

            {/* how to use section */}
            <section className='h-90 bg-[#202020] p-3'>
                <h2 className='text-white text-3xl font-bold'>How to use it</h2>

                {/* set animations on how to use it */}

            </section>

            {/* testimonials sections */}
            <section className='h-[500px] bg-[#3b3939] p-3'>
                <h2 className='text-white text-3xl mb-1 ml-12'>What our Clients Say:</h2>
                <p className='text-xs text-white/50 font-bold ml-12'>we believe that devlink users are to be prioritized</p>

                {/* minimal effects to be applied here */}
                <div className='w-full h-15 mt-[-60px] flex items-center relative'>
                    <div className='w-18 h-12 bg-teal-800 absolute left-[854px] rounded-full shadow-md shadow-white'></div>
                    <hr className='w-1/2 h-2 bg-white/50 rounded-r-sm border-none absolute right-0'/>
                </div>

            </section>
        </>
    )
}
export default Home
