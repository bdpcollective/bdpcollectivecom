import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'
import contactStyles from './contact.module.scss'
import heroStyles from '../components/hero.module.scss'

const ContactPage =() => {
    const data = useStaticQuery(graphql`
    query {
      contactImage: file(relativePath: { eq: "images/pitons-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return(
        <Layout>
            <BackgroundImage className={heroStyles.masthead}
            fluid={data.contactImage.childImageSharp.fluid}>
            </BackgroundImage>
            <h2>Contact</h2>
            <p> Want to work with me? Reach out.</p>
            <ul className={contactStyles.link}>
                <li>Twitter: <a href="https://twitter.com/bdpcollective" target="_blank" rel="noopener noreferrer">@bdpcollective</a></li>
                <li>Instagram: <a href="https:/instagram.com/bdpcollective" target="_blank" rel="noopener noreferrer">bdpcollective</a></li>
                <li>Github: <a href="https://github.com/bdpcollective" target="_blank" rel="noopener noreferrer">bdpcollective</a></li>
                <li>Linkedin: <a href="https://www.linkedin.com/in/popeb/" target="blank" rel="noopener noreferrer">Brian Pope</a></li>
                <li>Facebook: <a href="https://www.facebook.com/bdpcollective" target="blank" rel="noopener noreferrer">bdpcollective</a></li>
                <li>Flickr: <a href="https://www.flickr.com/photos/bdpcollective/" target="blank" rel="noopener noreferrer">bdpcollective</a></li>
            </ul>    
        </Layout>
    )
}

export default ContactPage
