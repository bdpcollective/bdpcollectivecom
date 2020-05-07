import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import portfolioStyles from "./portfolio.module.scss"

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioPage(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            postImage {
              fluid(maxWidth: 300) {
                src
                srcSet
                aspectRatio
                sizes
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <ol className={portfolioStyles.posts}>
        {data.allContentfulPortfolioPage.edges.map(edge => {
          return (
            <li className={portfolioStyles.post} key={edge.node.slug}>
              <Link to={`/portfolio/${edge.node.slug}`}>
                <h3>{edge.node.title}</h3>
                <p>{edge.node.publishedDate}</p>
                <div>
                  {edge.node.postImage && (
                    <Img fluid={edge.node.postImage.fluid} />
                  )}
                </div>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
export default PortfolioPage