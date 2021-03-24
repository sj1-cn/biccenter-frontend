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
import ArticleSummarys from "../components/articlesummarys";
import Image from "../components/image";
import Link from "next/link";

const Home = ({activities,enterprises,experts,organizations,articles, categories, homepage}) => {

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
  
      <div className="uk-section uk-section-small uk-section-default">
        <div className="uk-container">
          <div className="uk-grid-match uk-child-width-1-2@m"  data-uk-grid>
            <div>              
              <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow="min-height: 200; max-height: 300;autoplay: true;autoplay-interval: 3000;pause-on-hover: true">
                <ul className="uk-slideshow-items">{articles.map((article, i) => {return (
                  <li key={article.id}> 
                    <Image image={article.image} data-uk-cover/>    
                    <div className="uk-overlay uk-light uk-position-bottom-center">
                      {article.title}
                    </div>
                  </li>
                );})}</ul>
                <a href="" className="uk-slidenav-large uk-position-center-right uk-position-small uk-hidden-hover" data-uk-slidenav-next data-uk-slideshow-item="next">&#8203;</a>
                <a href=""  className="uk-slidenav-large uk-position-center-left uk-position-small uk-hidden-hover" data-uk-slidenav-previous data-uk-slideshow-item="previous">&#8203;</a>
              </div>
            </div>
            <div>b
            </div>
            </div>
        </div>
      </div>

{/* 

      <div className="uk-section uk-section-small uk-section-default">
        <div className="uk-container">
          <div className="uk-grid-match uk-grid-small uk-child-width-1-2@m uk-grid uk-grid-stack"  data-uk-grid>
            <div>
              <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow="min-height: 200; max-height: 300;autoplay: true;autoplay-interval: 6000;pause-on-hover: true">
                <ul className="uk-slideshow-items">{articles.map((article, i) => {return (
                  <li key={article.id}> 
                    <Image image={article.image}/>    
                    <div className="uk-overlay uk-light uk-position-bottom-center">
                      {article.title}
                    </div>
                  </li>
                );})}</ul>
              </div>
            </div>
          </div>
            <div>
              <ul className="uk-list uk-list-collapse">
              {articles.map((article, i) => {return (
                <li key={article.id}>
                  <div className="uk-inline uk-width-1@l" >
                    <Link as={`/article/${article.slug}`} href="/article/[id]">{article.title}</Link>
                    <div className="uk-position-right">
                      <Moment format="YYYY-MM-DD">{article.published_at}</Moment>
                    </div>
                  </div>
                </li>
              );})}
              </ul>
            </div>
          </div>
        <div className="uk-container">
          <div className="uk-grid-match uk-child-width-expand@s" data-uk-grid>
            <div>
              <div className="uk-box-shadow-hover-xlarge uk-text-middle  ">
                <a href="" data-uk-icon="icon: heart"  style={{height: 80,}}></a>
                <span className="uk-text-center">Lorem ipsum.</span>
              </div>
            </div>
                <div className="uk-grid-medium uk-flex-middle uk-box-shadow-hover-xlarge" data-uk-grid>
                  <div className="uk-width-expand">
                      <h4 className="uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                      <ul className="uk-subnav uk-subnav-divider uk-margin-remove-top">
                        <li><a href="#">12 days ago</a></li>
                      </ul>
                  <div className="uk-width-auto">
                    <a href="" data-uk-icon="icon: heart">&nbsp;</a>
                  </div>
                  </div>
                </div>
            <div>
              <div className="uk-box-shadow-hover-xlarge uk-text-middle  ">
                <a href="" data-uk-icon="icon: heart"  style={{height: 80,}}></a>
                <span className="uk-text-center">Lorem ipsum.</span>
              </div>
            </div>
            <div>
              <div className="uk-box-shadow-hover-xlarge uk-text-middle  ">
                <a href="" data-uk-icon="icon: heart"  style={{height: 80,}}></a>
                <span className="uk-text-center">Lorem ipsum.</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="uk-section uk-section-small uk-section-muted">
        <div className="uk-container">
          <h3>企业</h3>
          <ArticleSummarys type="activity" articles={activities} />
        </div>
      </div>  */}

      
      {/* <div className="uk-section uk-section-small uk-section-muted">
        <div className="uk-container">
          <h3>企业</h3>
          <div>
            <div className="uk-child-width-1-1@s" data-uk-grid="true">
              <div>
                <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                  {enterprises.map((article, i) => {
                    return (
                      <Link key={article.id} as={`/enterprise/${article.id}`} href={`/enterprise/[id]`}>
                      <a className="uk-link-reset">
                      <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                        <div><Image image={article.image} style={{position: "static",borderRadius: "5%",height: 30,}}/></div>
                        <div className="uk-width-expand"><p className="uk-margin-remove-bottom">{article.title}</p></div>
                      </div></a>
                    </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="uk-section uk-section-small uk-section-muted">
        <div className="uk-container">
          <h3>专家学者</h3>
          <div className="uk-child-width-1-1@s" data-uk-grid="true">
            <div>
              <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                {experts.map((article, i) => {
                  return (
                    <Link key={article.id} as={`/enterprise/${article.id}`} href={`/enterprise/[id]`}>
                    <a className="uk-link-reset">
                    <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                      <div><Image image={article.image}style={{position: "static",borderRadius: "5%",height: 30,}}/></div>
                      <div className="uk-width-expand"><p className="uk-margin-remove-bottom">{article.title}</p></div>
                    </div></a>
                  </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section uk-section-small uk-section-muted">
        <div className="uk-container">
          <h3>研究机构</h3>
          <div className="uk-child-width-1-1@s" data-uk-grid="true">
            <div>
              <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                {organizations.map((article, i) => {
                  return (
                    <Link key={article.id} as={`/enterprise/${article.id}`} href={`/enterprise/[id]`}>
                    <a className="uk-link-reset">
                    <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                      <div><Image image={article.image}style={{position: "static",borderRadius: "5%",height: 30,}}/></div>
                      <div className="uk-width-expand"><p className="uk-margin-remove-bottom">{article.title}</p></div>
                    </div></a>
                  </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>  */}


    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [activities,enterprises,experts,organizations,articles, categories, homepage] = await Promise.all([
    fetchAPI("/activities?status=published"),
    fetchAPI("/enterprises?status=published"),
    fetchAPI("/experts?status=published"),
    fetchAPI("/organizations?status=published"),
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { activities,enterprises, experts, organizations, articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;