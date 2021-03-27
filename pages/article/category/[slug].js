import React from "react";
import Articles from '../articles' ;
import Layout from "../../../components/layout";
import { fetchAPI } from "../../../lib/api";
import Link from "next/link";
import CategoryNav from '../../../components/categorynav';

const ArticleIndex = ({ currentCategorySlug,experts, categories }) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>质量与品牌专栏</h1>
          <CategoryNav type="article" categories={categories} title="分类" slug={currentCategorySlug}/>
          <Articles articles={experts} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");
  console.log(categories)
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
    fetchAPI(`/articles?category.slug=${params.slug}&status=published`),
    fetchAPI("/categories"),
  ]);


  return {
    props: {currentCategorySlug, experts, categories },
    revalidate: 1,
  };
}

export default ArticleIndex;
