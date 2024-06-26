import Footer from '@/components/Global/Footer'
import Navbar from '@/components/Global/Navbar'
import Art from '@/components/Launch/Art'
import Envision from '@/components/Launch/Envision'
import Hero from '@/components/Launch/Hero'
import Project from '@/components/Launch/Project'
import Card from '@/components/Launch/Card'
import Stats from '@/components/Launch/Stats'
import WhyUs from '@/components/Launch/WhyUs'
import TeamMembers from '@/components/Team/TeamMembers'
import React from 'react'


const Launch = () => {
    return (
        <>
        <Navbar />
        <Hero />
        <Envision />
        <Card/>
        <Stats />
        <WhyUs />
        <Project />
        <Art />
        <Footer />
        </>
    )
}

export default Launch