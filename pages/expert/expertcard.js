import React from "react";
import Link from "next/link";
import Image from "../../components/image";
import Text from "../../components/text";

const ExpertCard = ({ article }) => {
  return (
      <div className="uk-card uk-card-default uk-text-center">
          {/* <div className="uk-card-header  uk-margin-remove-bottom uk-padding-small"> */}
          <div className="uk-card-body uk-padding-small">
              <div className="uk-grid-small uk-flex-middle" >
                  <div className="uk-width-auto">
                    <Link as={`/expert/${article.id}`} href="/expert/[id]">
                      <a className="uk-link-reset">
                        <Image image={article.image} style={{position: "static",borderRadius: "50%",height: 80,}} />
                      </a>
                    </Link>
                  </div>
                  <div className="uk-width-expand ">
                      <h3 className="uk-card-title uk-margin-remove-bottom">{article.title}</h3>
                      <p className="uk-text-meta uk-margin-remove-top">{article.position}</p>
                  </div>
              </div>
          {/* </div> */}
          {/* <div className="uk-card-body uk-padding-small"> */}
              <div className="uk-flex-left uk-text-left">
            <Link as={`/expert/${article.id}`} href="/expert/[id]">
              <a className="uk-link-reset">
                <Text text={article.description} max={53}/>
              </a>
            </Link></div>
          </div>
          {/* <div className="uk-card-footer">
              <a href="#" className="uk-button uk-button-text">Read more</a>
          </div> */}
      </div>

  );
};

export default ExpertCard;