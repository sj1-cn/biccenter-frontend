import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";

const Enterprise = ({ enterprise, categories }) => {
  const imageUrl = getStrapiMedia(enterprise.image);

  const seo = {
    metaTitle: enterprise.title,
    metaDescription: enterprise.description,
    shareImage: enterprise.image,
    enterprise: true,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{enterprise.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={enterprise.content} escapeHtml={false} />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {enterprise.author.picture && (
                <Image
                  image={enterprise.author.picture}
                  style={{
                    position: "static",
                    borderRadius: "50%",
                    height: 30,
                  }}
                />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {enterprise.author.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{enterprise.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const enterprises = await fetchAPI("/enterprises");
  return {
    paths: enterprises.map((enterprise) => ({
      params: {
        id: enterprise.id+"",
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const enterprises = await fetchAPI(
    `/enterprises?id=${params.id}&status=published`
  );
  const categories = await fetchAPI("/enterprise-categories");

  return {
    props: { enterprise: enterprises[0], categories },
    revalidate: 1,
  };
}

export default Enterprise;