const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage} = actions
    const portfolioTemplate = path.resolve('./src/templates/portfolio.js')
    const res = await graphql(`
        query {
            allContentfulPortfolioPage {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    
    `)

    res.data.allContentfulPortfolioPage.edges.forEach((edge) => {
        createPage({
            component: portfolioTemplate,
            path: `/portfolio/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}
