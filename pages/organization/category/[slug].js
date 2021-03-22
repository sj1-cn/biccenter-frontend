import React from "react";
import Organizations from '../organizations' ;
import Layout from "../../../components/layout";
// import Seo from "../../components/seo";
import { fetchAPI } from "../../../lib/api";
import Link from "next/link";

const OrganizationCategoryIndex = ({ organizations, categories}) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>研究机构</h1>
          <div className="uk-navbar-right">研究机构分类:        
          <ul className="uk-navbar-nav">
              {categories.map((category) => {
                return (
                  <li key={category.id}>
                    <Link
                      as={`/organization/category/${category.slug}`}
                      href="/organization/category/[id]"
                    >
                      <a className="uk-link-reset">{category.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Organizations articles={organizations} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/organization-categories");
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
  const [organizations, categories] = await Promise.all([
    fetchAPI(`/organizations?category.slug=${params.slug}&status=published`),
    fetchAPI("/organization-categories"),
  ]);


  return {
    props: { organizations, categories },
    revalidate: 1,
  };
}

export default OrganizationCategoryIndex;
