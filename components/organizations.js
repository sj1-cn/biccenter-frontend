import React from "react";
import OrganizationCard from './organizationcard';

const Organizations = ({ articles }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {articles.map((article, i) => {
              return (
                <OrganizationCard
                  article={article}
                  key={`article__left__${article.slug}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizations;