import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";

const Article = ({ expert, categories }) => {
  const imageUrl = getStrapiMedia(expert.image);

  const seo = {
    metaTitle: expert.title,
    metaDescription: expert.description,
    shareImage: expert.image,
    expert: true,
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
        <h1>{expert.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={expert.content} escapeHtml={false} />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {expert.author.picture && (
                <Image
                  image={expert.author.picture}
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
                By {expert.author.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{expert.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const experts = await fetchAPI("/experts");

  return {
    paths: experts.map((expert) => ({
      params: {
        id: expert.id+"",
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const experts = await fetchAPI(`/experts?id=${params.id}&status=published`);
  const categories = await fetchAPI("/expert-categories");

  return {
    props: { expert: experts[0], categories },
    revalidate: 1,
  };
}

export default Article;