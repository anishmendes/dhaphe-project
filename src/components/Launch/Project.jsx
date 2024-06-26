import React from 'react'

const Project = () => {
    return (
        <div id='mainProject' className='flex items-center justify-center h-[150vh] md:h-[1024px] md:items-start'>
            <div className='flex flex-col w-full px-[10%] md:mt-[280px]'>
                <div className='text-white text-[50px]/[110%] tracking-tighter md:w-[47.5%] text-pretty pb-12'>Our flagship project, the Danphe-1 rocket engine, is currently in the development phase.</div>
                <div className='text-white text-[28px]/[120%] tracking-[-3%] md:w-[47.5%]'>Designed to deliver reliable and efficient propulsion, Danphe-1 aims to pave the way for future space missions and satellite launches.</div>
            </div>
        </div>
    )
}

export default Project