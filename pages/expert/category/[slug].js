import React from "react";
import Experts from '../experts' ;
import Layout from "../../../components/layout";
// import Seo from "../../components/seo";
import { fetchAPI } from "../../../lib/api";
import Link from "next/link";
import CategoryNav from "../../../components/categorynav";

const ExpertIndex = ({ currentCategorySlug,experts, categories}) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>专家学者</h1>
          <CategoryNav type="expert" categories={categories} title="专家分类" slug={currentCategorySlug}/>
          <Experts articles={experts} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/expert-categories");
  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  let currentCategorySlug = params.slug;
  // Run API calls in parallel
  const [experts, categories] = await Promise.all([
    fetchAPI(`/experts?category.slug=${params.slug}&status=published`),
    fetchAPI("/expert-categories"),
  ]);


  return {
    props: {currentCategorySlug, experts, categories },
    revalidate: 1,
  };
}

export default ExpertIndex;
