import { getStrapiMedia } from "../lib/media";

const Image = ({ image, style,...rest }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
      {...rest} 
    />
  );
};

export default Image;