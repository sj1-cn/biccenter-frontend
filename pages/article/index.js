import React from "react";
import Articles from "./articles";
import Layout from "../../components/layout";
// import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import CategoryNav from "../../components/categorynav";

const Home = ({ articles, categories}) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>质量与品牌专栏</h1>
          <CategoryNav type="article" categories={categories} title="分类"/>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories")
  ]);

  return {
    props: { articles, categories },
    revalidate: 1,
  };
}

export default Home;