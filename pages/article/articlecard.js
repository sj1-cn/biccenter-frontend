import React from "react";
import Link from "next/link";
import Image from "../../components/image";

const ArticleCard = ({type, article }) => {
  return (
    <Link as={`/${type}/${article.slug}`} href={`/${type}/[id]`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <Image image={article.image} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.category.name}xxx
            </p>
            <p id="title" className="uk-text-large">
              {article.title}zzzzzzzz
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ArticleCard;