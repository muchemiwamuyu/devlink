import React from 'react'
import Header from '../components/Header'
import { Fragments } from '../components/Fragments'

function Home() {
    return (
        <>
                {/* <Header/> */}
                <div className='h-screen flex bg-black'>
                    <Header/>
                    <div className='overflow-x-hidden mt-12 md:mt-[6%] ml-[2%]'>
                        <Fragments/>
                    </div>
                </div>
        </>
    )
}
export default Home
