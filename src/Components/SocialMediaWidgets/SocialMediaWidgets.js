import React from "react";
import { TwitterTweet } from "react-social-plugins";

const tweetsIdMock = [
  "1245758106392580097",
  "1440383594615042052",
  "1450535690199085058",
  "1247299608570736641"
];

const SocialMediaWidgets = () => {
  return (
    <div className="container mt-5">
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
  );
};

export default SocialMediaWidgets;
