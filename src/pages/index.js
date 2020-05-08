import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <Hero />
            <About />
        </Layout>
    )
}

export default IndexPage