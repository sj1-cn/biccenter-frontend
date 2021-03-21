import React from "react";
import Enterprises from "../../components/enterprises";
import Layout from "../../components/layout";
// import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";

const EnterpriseIndex = ({ enterprises, categories}) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>企业</h1>
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