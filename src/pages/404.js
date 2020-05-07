import React from "react";
import Layout from "../components/layout";
import aboutStyles from "./about.module.scss";
const NotFoundPage = () => {
  return (
    <Layout className={aboutStyles.text}>
      <h2>Page not found!</h2>
      <p>Oops! The page you are looking for must of moved.</p>
    </Layout>
  );
};
export default NotFoundPage;