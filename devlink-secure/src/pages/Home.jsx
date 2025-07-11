import React from 'react'
import Header from '../components/Header'
import { Fragments } from '../components/Fragments'

function Home() {
    return (
        <>
            {/* <Header/> */}
            <div className='h-screen relative flex bg-black p-3'>
                <Header />

                {/* Fragments should appear underneath */}
                <div className='overflow-hidden mt-12 md:mt-[6%] ml-6 z-10 relative'>
                    <Fragments />
                </div>

                {/* Section placed absolutely on top */}
                <section className="absolute top-0 left-0 w-full h-full z-20 bg-[rgba(43,42,42,0.7)] flex justify-center">
                    
                    
                </section>

            </div>


            {/* about us section */}
            <section className='h-screen'>

            </section>
        </>
    )
}
export default Home
