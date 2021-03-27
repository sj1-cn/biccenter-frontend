import React from "react";
import Image from "./image";
import Link from "next/link";

const ArticleSummarys = ({type, articles }) => {
  return (
    <div>
      <div className="uk-child-width-1-1@s" data-uk-grid="true">
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {articles.map((article, i) => {
              return (
                <Link key={article.id} as={`/${type}/${article.id}`} href={`/${type}/[id]`}>
                <a className="uk-link-reset">
                  <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                    <Image image={article.image}style={{ height: 60,}}/>
                    <div className="uk-width-expand">
                      <p className="uk-margin-remove-bottom">
                        {article.title}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSummarys;