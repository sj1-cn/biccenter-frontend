import React from "react";
import Enterprises from "./enterprises";
import Layout from "../../components/layout";
// import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import Link from "next/link";
import CategoryNav from '../../components/categorynav';

const EnterpriseIndex = ({ enterprises, categories}) => {
  
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>企业</h1>          
          <CategoryNav type="enterprise" categories={categories} title="企业分类"/>
          <Enterprises articles={enterprises} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [enterprises, categories] = await Promise.all([
    fetchAPI("/enterprises?status=published"),
    fetchAPI("/enterprise-categories")
  ]);

  return {
    props: { enterprises, categories },
    revalidate: 1,
  };
}

export default EnterpriseIndex;