import React from "react";

import { Card } from "../Card";
import { MessageHeader } from "./Header";
import { Icon, IconButton, IconCountWrapper } from "../Icon";
import "./styles.css";

export const Message = props => {
  const {
    user,
    created_at,
    retweet_count,
    retweeted,
    favorite_count,
    favorited,
    text
  } = props;

  /* TODO: toggle retweet & favorite status & count on click */

  return (
    <Card
      className="Message"
      title="message"
      profile_image={user.profile_image_url_https}
    >
      <div>
        <div className="Message_Header">
          <MessageHeader
            name={user.name}
            screen_name={user.screen_name}
            created_at={created_at}
          />
        </div>
        <div className="Message_Body">{text}</div>
        <div className="Message_Footer">
          <Icon icon="comment" title="comment" />
          <IconCountWrapper title="retweet_count" count={0}>
            <IconButton
              role="retweet"
              onClick={() => {
                /* toggle retweet locally */
              }}
            >
              <Icon
                icon="retweet"
                active={false}
                highlight="rgb(23, 191, 99)"
              />
            </IconButton>
          </IconCountWrapper>
          <IconCountWrapper title="favorite_count" count={0}>
            <IconButton
              role="favorite"
              onClick={() => {
                /* toggle favorite locally */
              }}
            >
              <Icon
                icon="favorite"
                active={false}
                highlight="rgb(224, 36, 94)"
              />
            </IconButton>
          </IconCountWrapper>
          <Icon icon="share" title="share" />
        </div>
      </div>
    </Card>
  );
};
