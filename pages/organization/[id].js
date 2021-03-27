import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";
import { useRouter } from 'next/router'

const Organization = ({ organization, categories }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const imageUrl = getStrapiMedia(organization.image);

  const seo = {
    metaTitle: organization.title,
    metaDescription: organization.description,
    shareImage: organization.image,
    organization: true,
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
        <h1>{organization.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={organization.content} escapeHtml={false} />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {organization.author.picture && (
                <Image
                  image={organization.author.picture}
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
                By {organization.author.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{organization.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const organizations = await fetchAPI("/organizations");

  return {
    paths: organizations.map((organization) => ({
      params: {
        id: organization.id+"",
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const organizations = await fetchAPI(
    `/organizations?id=${params.id}&status=published`
  );
  const categories = await fetchAPI("/organization-categories");

  return {
    props: { organization: organizations[0], categories },
    revalidate: 1,
  };
}

export default Organization;