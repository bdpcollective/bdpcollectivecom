import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import aboutStyles from './about.module.scss'
import heroStyles from '../components/hero.module.scss'
    

const AboutPage = () => {
    const data = useStaticQuery(graphql`
      query {
        aboutImage: file(relativePath: { eq: "images/about-banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    return (
        <Layout className={aboutStyles.text}>
            <BackgroundImage className={heroStyles.masthead}
            fluid={data.aboutImage.childImageSharp.fluid}>
            </BackgroundImage>
            <h2>About</h2>
            <p>A typical day for me starts with getting to the (these days "Home") office early, grabbing some coffee and planning my day. I enjoy strategizing design for large enterprise systems, creating prototypes and testing usability. Outside of the office I enjoy University of Nebraska athletic events, craft cocktails, and hanging out with the fam.</p>
            <h2>Favorite Links</h2>
            <p className={aboutStyles.list}>
                <a href="https://biscosmith.com/">Bisco Smith</a>
                <a href="http://www.designkit.org/human-centered-design">Ideo's Human Centered Design</a>
                <a href="https://www.youtube.com/watch?v=hcYAHix-riY">You Know What? Fuck Dropdowns</a>
                <a href="https://www.behance.net/gallery/19641639/Web-design-user-experience-32-myths-to-be-dispelled">32 UX Myths</a>
                <a href="https://youtu.be/WPU5jNP2BH0?t=1m14s">Mike Montiero- Let's Praise Ordinary People</a>
                <a href="https://www.danwintersphoto.com/">Dan Winters Photography</a>
                <a href="http://bjk5.com/post/44698559168/breaking-down-amazons-mega-dropdown">Breaking down Amazon's mega dropdown</a>
                <a href="https://jerryoftheday.net/blogs/best-of-jerry-of-the-day">Jerry of the Day</a>
                <a href="http://www.fromupnorth.com/">From Up North</a>
                <a href="https://www.youtube.com/watch?v=eU7V4GyEuXA">A Brief History of John Baldessari</a>
                <a href="https://www.nngroup.com/articles/">Nielsen Norman Group - Articles</a>
                <a href="https://www.lukew.com/ff/">Luke Wroblewski</a>
                <a href="http://www.bbc.co.uk/gel/">BBC's Global Experience Language</a>
                <a href="http://www.bridging-the-gap.com/what-questions-do-i-ask-during-requirements-elicitation/">Questions For Requirement Elicitation?</a>
                <a href="http://www.joseparla.com/">Jose Parla</a>
            </p>
        </Layout>
    )
}


export default AboutPage