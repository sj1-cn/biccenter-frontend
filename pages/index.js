import React from "react";
import Articles from "./article/articles";
import Enterprises from "./enterprise/enterprises";
import Experts from "./expert/experts";
import Organizations from "./organization/organizations";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Moment from "react-moment";
import OrganizationSummarys from "./organization/organizationsummarys";
import ArticleSummarys from "./article/articlesummarys";
import Image from "../components/image";
import Link from "next/link";

const Home = ({enterprises,experts,organizations,articles, categories, homepage}) => {

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="uk-section uk-section-small uk-section-default">
        <div className="uk-container">
          <div className="uk-grid-match uk-grid-small uk-child-width-1-2@m"  data-uk-grid>
            <div>
              <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow="min-height: 200; max-height: 300;autoplay: true;autoplay-interval: 6000;pause-on-hover: true">
                <ul className="uk-slideshow-items">{articles.map((article, i) => {return (
                  <li key={article.id}> 
                    <Image image={article.image}/>    
                    <div class="uk-overlay uk-light uk-position-bottom-center">
                      {article.title}
                    </div>
                  </li>
                );})}</ul>
              </div>
            </div>
            <div>
              <ul className="uk-list uk-list-collapse">
              {articles.map((article, i) => {return (
                <li><div className="uk-inline uk-width-1@l" >
                <Link key={article.id} as={`/article/${article.slug}`} href="/article/[id]">{article.title}</Link>
              <div className="uk-position-right"><Moment format="YYYY-MM-DD">{article.published_at}</Moment></div></div>
                </li>
              );})}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="uk-section uk-section-small uk-section-muted">
        <div class="uk-container">
          <h3>企业</h3>
          <ArticleSummarys articles={articles} />
        </div>
      </div>
      <div class="uk-section uk-section-small uk-section-muted">
        <div class="uk-container">
          <h3>专家学者</h3>
          <ArticleSummarys articles={articles} />
        </div>
      </div>
      <div class="uk-section uk-section-small uk-section-muted">
        <div class="uk-container">
          <h3>研究机构</h3>
          <ArticleSummarys articles={articles} />
        </div>
      </div>
            <ul class="uk-subnav uk-subnav-pill uk-container" data-uk-switcher>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>

<ul class="uk-switcher uk-margin">
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
</ul>

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