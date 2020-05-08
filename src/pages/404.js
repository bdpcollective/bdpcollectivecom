import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout";
import aboutStyles from "./about.module.scss";
import Head from '../components/head'

const NotFoundPage = () => {
  return (
    <Layout className={aboutStyles.text}>
      <Head title="404" />
      <h2>Page not found</h2>
      <p>Oops! The page you are looking for must of moved.</p>
      <p><Link to="/">Take me home >></Link></p>
    </Layout>
  );
};
export default NotFoundPage;