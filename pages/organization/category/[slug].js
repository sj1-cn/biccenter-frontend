import React from "react";
import Organizations from '../organizations' ;
import Layout from "../../../components/layout";
// import Seo from "../../components/seo";
import { fetchAPI } from "../../../lib/api";
import Link from "next/link";
import CategoryNav from '../../../components/categorynav';
const OrganizationCategoryIndex = ({ currentCategorySlug,organizations, categories}) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>研究机构</h1>
          <CategoryNav type="organization" categories={categories} title="机构分类" slug={currentCategorySlug}/>
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
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  let currentCategorySlug = params.slug;
  // Run API calls in parallel
  const [organizations, categories] = await Promise.all([
    fetchAPI(`/organizations?category.slug=${params.slug}&status=published`),
    fetchAPI("/organization-categories"),
  ]);


  return {
    props: { currentCategorySlug,organizations, categories},
    revalidate: 1,
  };
}

export default OrganizationCategoryIndex;
