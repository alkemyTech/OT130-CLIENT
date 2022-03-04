import React from "react";
import { TwitterTweet, LinkedinFollowCompany } from "react-social-plugins";
import {
  LINKEDIN_COMPANY_ID,
  TWITTER_WIDGET_WIDTH,
} from "../../Helpers/constants";
import './socialMediaWidget.css'

const tweetsIdMock = [
  "1245758106392580097",
  "1440383594615042052",
  "1450535690199085058",
  "1247299608570736641"
];

const SocialMediaWidgets = () => {
  return (
    <div className="my-5 ">
      <div className="d-flex justify-content-center aling-items-center">
        <LinkedinFollowCompany
          companyId={LINKEDIN_COMPANY_ID}
          counter="top"
          lang="en_US"
        />
        <div className="row aling-items-center justify-content-center social-media-widget">
        {tweetsIdMock.map((tweetId) => (
          <TwitterTweet
            className="m-2"
            align="left"
            coversation="none"
            width={TWITTER_WIDGET_WIDTH}
            tweetId={tweetId}
            theme="light"
          />
          ))}
          </div>
      </div>
    </div>
  );
};

export default SocialMediaWidgets;
