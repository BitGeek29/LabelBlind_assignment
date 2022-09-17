import request from "request";

export default function fetchTweet(url) {
  const { data, error } = request(url, function (error, body) {
    return body, error;
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return data;
}
