import React from "react";
import Enterprises from '../../../components/enterprises' ;
import Layout from "../../../components/layout";
// import Seo from "../../components/seo";
import { fetchAPI } from "../../../lib/api";
import Link from "next/link";

const EnterprisesCategoryIndex = ({ enterprises, categories}) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>企业</h1>          
          <div className="uk-navbar-right">研究机构分类:       
          <ul className="uk-navbar-nav">
              {categories.map((category) => {
                return (
                  <li key={category.id}>
                    <Link
                      as={`/enterprise/category/${category.slug}`}
                      href="/enterprise/category/[id]"
                    >
                      <a className="uk-link-reset">{category.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            </div>
          <Enterprises articles={enterprises} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/enterprise-categories");
  // console.log(categories)
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
  const [enterprises, categories] = await Promise.all([
    fetchAPI(`/enterprises?category.slug=${params.slug}&status=published`),
    fetchAPI("/enterprise-categories"),
  ]);

  return {
    props: { enterprises, categories },
    revalidate: 1,
  };
}

export default EnterprisesCategoryIndex;