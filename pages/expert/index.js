import React from "react";
import Experts from "../../components/experts";
import Layout from "../../components/layout";
// import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";

const ExpertIndex = ({ experts, categories}) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>专家学者</h1>
          <Experts articles={experts} />
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

export default ExpertIndex;