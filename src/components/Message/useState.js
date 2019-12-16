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

  const [retweet, toggleRetweet] = React.useState({
    toggled: retweeted,
    count: retweet_count
  });

  const [favorite, toggleFavorite] = React.useState({
    toggled: favorited,
    count: favorite_count
  });

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
          <IconCountWrapper title="retweet_count" count={retweet.count}>
            <IconButton
              role="retweet"
              onClick={() => {
                toggleRetweet({
                  count: retweet.count + (retweet.toggled ? -1 : 1),
                  toggled: !retweet.toggled
                });
              }}
            >
              <Icon
                icon="retweet"
                active={retweet.toggled}
                highlight="rgb(23, 191, 99)"
              />
            </IconButton>
          </IconCountWrapper>
          <IconCountWrapper title="favorite_count" count={favorite.count}>
            <IconButton
              role="favorite"
              onClick={() => {
                toggleFavorite({
                  count: favorite.count + (favorite.toggled ? -1 : 1),
                  toggled: !favorite.toggled
                });
              }}
            >
              <Icon
                icon="favorite"
                active={favorite.toggled}
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
