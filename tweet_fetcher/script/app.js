import request from "request";
import fs from "fs";
//import { getTweets } from './twitter';
function getTweets(rurl) {
  request(rurl, function (error, response, body) {
    //console.error("error:", error);
    //console.log("statusCode:", response && response.statusCode);
    //console.log("body:", body);
    if (error) {
      return "error";
    } else {
      fs.writeFileSync("file.json", body);
      console.log(response.statusCode);
      return response.statusCode;
    }
  });
}

console.log(getTweets("http://www.mocky.io/v2/5d1ef97d310000552febe99d"));
