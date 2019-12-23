import React from "react";
import { Icon } from "../Icon";
import { Message } from "../Message";
import "./styles.css";

import fetchData from "../../services/api";

export const Feed = () => {
  const loading = true;
  const error = null;
  const data = null;

  // TODO: useEffect to load state from fetchData
  fetchData("messages")
    .then(messages => {
      data = messages;
      loading = false;
    })
    .catch(error => {
      error = error;
    });

  if (loading) {
    return (
      <div className="Feed">
        <div className="Feed_Loading" title="loading">
          <Icon icon="loading" spin size="lg" data-testid="loading" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div title="error">{error.message}</div>;
  }

  return (
    <div className="Feed" title="feed">
      {data.map(post => (
        <Message key={post.id_str} {...post} />
      ))}
    </div>
  );
};
