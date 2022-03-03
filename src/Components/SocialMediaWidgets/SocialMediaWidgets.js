import React from "react";
import { TwitterTweet, LinkedinFollowCompany } from "react-social-plugins";
import {
  LINKEDIN_COMPANY_ID,
  TWITTER_WIDGET_WIDTH,
} from "../../Helpers/constants";

const tweetsIdMock = [
  "1245758106392580097",
  "1440383594615042052",
  "1450535690199085058",
  "1247299608570736641",
];

const SocialMediaWidgets = () => {
  return (
    <div className="container mt-5">
      <div>
        <LinkedinFollowCompany
          companyId={LINKEDIN_COMPANY_ID}
          counter="top"
          lang="en_US"
        />
        {tweetsIdMock.map((tweetId) => (
          <TwitterTweet
            align="left"
            coversation="none"
            width={TWITTER_WIDGET_WIDTH}
            tweetId={tweetId}
            theme="light"
          />
        ))}
      </div>
    </div>
  );
};

export default SocialMediaWidgets;
