import React from "react";
import Link from "next/link";
import Image from "../../components/image";

const OrganizationCard = ({ article }) => {
  return (
    <Link as={`/organization/${article.id}`} href="/organization/[id]">
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <Image image={article.image} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default OrganizationCard;