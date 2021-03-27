import React from "react";
import ExpertCard from './expertcard';

const Experts = ({ articles }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div>
      <div className="uk-child-width-1-4@m uk-grid-small uk-grid-match" data-uk-grid>
        
          {articles.map((article, i) => {
            return (
              <div><ExpertCard
                article={article}
                key={`article__left__${article.slug}`}
              /></div>
            );
          })}
      </div>
    </div>
  );
};

export default Experts;