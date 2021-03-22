import React from "react";
import Articles from "./article/articles";
import Enterprises from "./enterprise/enterprises";
import Experts from "./expert/experts";
import Organizations from "./organization/organizations";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import OrganizationSummarys from "./organization/organizationsummarys";
import Image from "../components/image";

const Home = ({enterprises,experts,organizations,articles, categories, homepage}) => {

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />



      
      <div className="uk-card uk-card-default uk-card-body uk-width-1-1@m">
        <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div className="uk-position-relative uk-visible-toggle uk-light" data-tabindex="-1" data-uk-slideshow="min-height: 200; max-height: 300;autoplay: true;autoplay-interval: 6000;pause-on-hover: true">
            <ul className="uk-slideshow-items">
                  {articles.map((article, i) => {
                    return (
                      <li key={article.id}> 
                        <Image image={article.image}
                    style={{
                      position: "static",
                      height: 420,
                    }}/>
                      </li>
                    );
                  })}
            </ul>
          </div>
          <div>
            <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>

            </div>
          </div>
        </div>
      </div>

      <div className="uk-card uk-card-default uk-card-body uk-width-1-1@m">
        <h3 className="uk-card-title">质量与品牌专栏</h3>
        <OrganizationSummarys articles={articles} />
      </div>
      <div className="uk-section">
        {/* <div className="uk-container uk-container-large">
          <h3>企业</h3>
          <Enterprises articles={enterprises} />
        </div> */}
          {/* <hr className="uk-divider-small" />
        <div className="uk-container uk-container-large">
          <h3>专家</h3>
          <Experts articles={experts} />
        </div>
          <hr className="uk-divider-small" />
        <div className="uk-container uk-container-large">
          <h3>研究机构</h3>
          <Experts articles={organizations} />
        </div>
          <hr className="uk-divider-small" />
        <div className="uk-container uk-container-large">
          <h3>质量与品牌专栏</h3>
          <OrganizationSummarys articles={articles} />
        </div> */}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [enterprises,experts,organizations,articles, categories, homepage] = await Promise.all([
    fetchAPI("/enterprises?status=published"),
    fetchAPI("/experts?status=published"),
    fetchAPI("/organizations?status=published"),
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { enterprises, experts, organizations, articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;