import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const ShareSocialIcon = ({ url, title, description }) => {
  return (
    <div className="share-buttons h-[100%]">
      <FacebookShareButton
        url={url}
        quote={title}
        className="share-button mx-1"
      >
        <FacebookIcon size={22} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title} className="share-button mx-1">
        <TwitterIcon size={22} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        summary={description}
        className="share-button mx-1"
      >
        <LinkedinIcon size={22} round />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareSocialIcon;
