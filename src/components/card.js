import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import cardStyles from './card.module.scss'

const Card = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulPortfolioPage ( sort: { fields: publishedDate, order: DESC }) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <card> 
            {data.allContentfulPortfolioPage.edges.map((edge) => {
                    return (
                            <li className={cardStyles.card}>
                                <Link to={`/portfolio/${edge.node.slug}`}>  
                                <h3>{edge.node.title}</h3>
                                <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                    )
                })}
        </card> 
    )
}

export default Card