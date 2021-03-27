import React from "react";
import Experts from "./experts";
import Layout from "../../components/layout";
// import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import Link from "next/link";
import CategoryNav from "../../components/categorynav";

const ExpertIndex = ({ experts, categories }) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>专家介绍</h1>
          <CategoryNav type="expert" categories={categories} title="专家分类"/>
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
    fetchAPI("/expert-categories"),
  ]);

  return {
    props: { experts, categories },
    revalidate: 1,
  };
}

export default ExpertIndex;
