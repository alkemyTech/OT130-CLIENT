import React from "react";
import { TwitterTweet, LinkedinFollowCompany } from "react-social-plugins";

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
          companyId={68737437}
          counter="top" // Or "right"
          lang="en_US"
        />
        {tweetsIdMock.map((tweetId) => (
          <TwitterTweet
            align="left"
            coversation="none"
            width={314}
            tweetId={tweetId}
            theme="light"
          />
        ))}
      </div>
    </div>
  );
};

export default SocialMediaWidgets;
