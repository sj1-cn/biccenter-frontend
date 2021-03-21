import React from "react";
import Articles from "../../components/articles";
import Layout from "../../components/layout";
// import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";

const Home = ({ experts, categories}) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>专家学者</h1>
          <Articles articles={experts} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [experts, categories] = await Promise.all([
    fetchAPI("/experts?status=published"),
    fetchAPI("/expert-categories")
  ]);

  return {
    props: { experts, categories },
    revalidate: 1,
  };
}

export default Home;