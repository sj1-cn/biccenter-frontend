import React from "react";
import Experts from '../experts' ;
import Layout from "../../../components/layout";
// import Seo from "../../components/seo";
import { fetchAPI } from "../../../lib/api";
import Link from "next/link";

const ExpertIndex = ({ experts, categories}) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>专家学者</h1>
          <div className="uk-navbar-right">专家分类:
            <ul className="uk-navbar-nav">
              {categories.map((category) => {
                return (
                  <li key={category.id}>
                  <Link
                    as={`/expert/category/${category.slug}`}
                    href="/expert/category/[id]"
                  >
                    <a className="uk-link-reset">{category.name}</a>
                  </Link>
                  </li>
                );
              })}
            </ul>
          </div>
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
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Run API calls in parallel
  const [experts, categories] = await Promise.all([
    fetchAPI(`/experts?category.slug=${params.slug}&status=published`),
    fetchAPI("/expert-categories"),
  ]);


  return {
    props: { experts, categories },
    revalidate: 1,
  };
}

export default ExpertIndex;
