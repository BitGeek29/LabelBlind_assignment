import type { NextApiRequest, NextApiResponse } from "next";
import fetchTweet from "../../constants/fT";

type Data =  {
        "_id": string,
        "url": string,
        "text": string,
        "author": string,
        "publishedDate": string,
        "publishedTimestamp": {
            "$numberLong": string
        },
        "scrapedTimestamp": {
            "$numberLong": string
        },
        "retweets": number,
        "likes": number,
        "postTimestamp": {
            "$numberLong": string
        },
        "requestTimestamp": {
            "$numberLong": string
        },
        "sentiment": string,
        "hashtags": string,
        "isRetweet": boolean,
        "rankurDataImport": boolean,
    };

export default function tweethandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method === "GET"){
  res
    .status(200)
    .json(fetchTweet("http://www.mocky.io/v2/5d1ef97d310000552febe99d"));
    }
}
