import React from "react";
import Layout from "../../components/layout";
// import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import Activities from "./activities";
import CategoryNav from "../../components/categorynav";

const ActivityIndex = ({ articles, categories}) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>动态</h1>
          <CategoryNav type="activity" categories={categories} title="动态分类"/>
          <Activities articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories] = await Promise.all([
    fetchAPI("/activities?status=published"),
    fetchAPI("/activity-categories")
  ]);

  return {
    props: { articles, categories },
    revalidate: 1,
  };
}

export default ActivityIndex;