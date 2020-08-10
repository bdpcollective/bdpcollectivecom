import React from 'react'
import aboutStyles from '../pages/about.module.scss'

const About = () => {
    return (
        <>
            <p className={aboutStyles.opi}>I am a Senior Design Consultant at <a href="https://objectpartners.com/">Object Partners</a> in Omaha. With over 20 years of design experience I have seen a variety of different projects, processes and teams. I am passionate about understanding the "Why" behind design, developing apps as a team and the education of design.</p>
            <p className={aboutStyles.connectaha}>I am a regional technology conference speaker and co-founder of <a href="https//connectah.com/">Connectaha Technology Conference</a></p>
        </ >
    )
}

export default About