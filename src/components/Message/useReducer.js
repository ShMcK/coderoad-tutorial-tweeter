import React from "react";

import { Card } from "../Card";
import { MessageHeader } from "./Header";
import { Icon, IconButton, IconCountWrapper } from "../Icon";
import "./styles.css";

export const messageReducer = (state, action) => {
  switch (action.type) {
    case "RETWEET":
      return {
        ...state,
        retweeted: !state.retweeted,
        retweet_count: state.retweet_count + (!state.retweeted ? 1 : -1)
      };
    case "FAVORITE":
      return {
        ...state,
        favorited: !state.favorited,
        favorite_count: state.favorite_count + (!state.favorited ? 1 : -1)
      };
    default:
      return state;
  }
};

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

  const [state, dispatch] = React.useReducer(messageReducer, {
    retweet_count,
    retweeted,
    favorite_count,
    favorited
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
          <IconCountWrapper title="retweet_count" count={state.retweet_count}>
            <IconButton
              role="retweet"
              onClick={() => {
                dispatch({ type: "RETWEET" });
              }}
            >
              <Icon
                icon="retweet"
                active={state.retweeted}
                highlight="rgb(23, 191, 99)"
              />
            </IconButton>
          </IconCountWrapper>
          <IconCountWrapper title="favorite_count" count={state.favorite_count}>
            <IconButton
              role="favorite"
              onClick={() => {
                dispatch({ type: "FAVORITE" });
              }}
            >
              <Icon
                icon="favorite"
                active={state.favorited}
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
