import React from "react";
import { Icon } from "../Icon";
import { Message } from "../Message";
import "./styles.css";

import fetchData from "../../services/api";

export const useApi = url => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetchData(url)
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, [url]);
  return {
    loading,
    error,
    data
  };
};

export const Feed = () => {
  const { loading, error, data } = useApi("messages");
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
