import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import heroStyles from '../components/hero.module.scss'

const Hero = props => {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "images/banner-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return (
    <div>
      <BackgroundImage
        className={heroStyles.masthead}
        fluid={data.bannerImage.childImageSharp.fluid}>
        <h1>Hello friendos.</h1>
        <h2>I'm Brian, a User Experience Design Consultant based in Omaha.</h2>
      </BackgroundImage>
    </div>
  )
}
export default Hero