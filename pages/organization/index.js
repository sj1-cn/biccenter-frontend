import React from "react";
import Articles from "../../components/articles";
import Layout from "../../components/layout";
// import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";

const Home = ({ organizations, categories}) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>企业</h1>
          <Articles articles={organizations} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [organizations, categories] = await Promise.all([
    fetchAPI("/organizations?status=published"),
    fetchAPI("/organization-categories")
  ]);

  return {
    props: { organizations, categories },
    revalidate: 1,
  };
}

export default Home;