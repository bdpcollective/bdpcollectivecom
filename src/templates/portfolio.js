import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'
import portfolioStyles from "../pages/portfolio.module.scss"


export const query = graphql`
  query($slug: String!) {
    contentfulPortfolioPage(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const PortfolioPage = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulPortfolioPage.title} />
      <h1>{props.data.contentfulPortfolioPage.title}</h1>
      <p>{props.data.contentfulPortfolioPage.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulPortfolioPage.body.json, options)}
    </Layout>
  )
}

export default PortfolioPage