import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="home" />
            <h1>Artist - Photographer</h1>
            <p>Creative immersed in motion films and shooting images.</p>
            <Link to ="/contact"> Contact</Link>
        </Layout>
    )
}

export default IndexPage