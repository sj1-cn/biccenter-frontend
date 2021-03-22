import React from "react";
import Articles from "./article/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({articles, categories, homepage}) => {

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [enterprises,exports,organizations,articles, categories, homepage] = await Promise.all([
    fetchAPI("/enterprises?status=published"),
    fetchAPI("/experts?status=published"),
    fetchAPI("/organizations?status=published"),
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { /*enterprises, exports, organizations, */ articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;