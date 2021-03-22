import React from "react";
import Image from "../../components/image";
import Link from "next/link";

const OrganizationSummarys = ({ articles }) => {
  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {articles.map((article, i) => {
              return (
                <Link key={article.id} as={`/organization/${article.id}`} href="/organization/[id]">
                <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                  <div>
                    {article.author.picture && (
                      <Image
                        image={article.image}
                        style={{
                          position: "static",
                          borderRadius: "5%",
                          height: 30,
                        }}
                      />
                    )}
                  </div>
                  <div className="uk-width-expand">
                    <p className="uk-margin-remove-bottom">
                      By {article.title}
                    </p>
                  </div>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationSummarys;