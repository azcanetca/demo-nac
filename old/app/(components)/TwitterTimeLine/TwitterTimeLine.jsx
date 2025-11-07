import { getSession, setSession } from "@/app/helpers/utils";
import React, { useEffect } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterTimeLine = () => {
  useEffect(() => {
    // Check if the Twitter API link is already stored in sessionStorage
    const twitterApiLink = getSession("twitterApiLink");
    const initialApiLink2 = getSession("twitterApiLink2");

    // If it's not stored, make the request and store it in sessionStorage
    if (!twitterApiLink && !initialApiLink2) {
      // Your initial API link
      const initialApiLink =
        "https://syndication.twitter.com/settings?session_id=33dae5350dc366647a178b5ebbf6f318daa1592e";
      const initialApiLink2 =
        "https://abs.twimg.com/sticky/animations/like.4.json";

      // Make the request here using initialApiLink

      // Store the link in sessionStorage
      setSession("twitterApiLink", initialApiLink);
      setSession("twitterApiLink2", initialApiLink2);
    }
  }, []);
  return (
    <>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="azcanet"
        options={{ height: 650 }}
      />
    </>
  );
};

export default TwitterTimeLine;
