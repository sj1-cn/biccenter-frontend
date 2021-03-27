import React from "react";
import Layout from "../../../components/layout";
import { fetchAPI } from "../../../lib/api";
import Link from "next/link";
import Activities from "../activities";
import CategoryNav from '../../../components/categorynav';

const ExpertIndex = ({currentCategorySlug, experts, categories }) => {

  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>活动动态</h1>
          <CategoryNav type="activity" categories={categories} title="动态分类" slug={currentCategorySlug}/>
          <Activities articles={experts} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/activity-categories");
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
    fetchAPI(`/activities?category.slug=${params.slug}&status=published`),
    fetchAPI("/activity-categories"),
  ]);


  return {
    props: { currentCategorySlug,experts, categories },
    revalidate: 1,
  };
}

export default ExpertIndex;
