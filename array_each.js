let answer = document.querySelector("#answer");
let html = "<ul>";

//HTMLで書いたやつ　これをScriptで書きたい
//<ul>
//  <li><b>太郎</b>: 満足度が回復した <i>2018-11-01 20:05:38</i></li>
//</ul>

//let i = 0;
//while(i < tweets.length){
//  html += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
//  i++;
//}
//html += "</ui>";
//answer.innerHTML = html;


let renderTweet = function (tweet){
  html += `<li><b>${tweet.name}</b>: ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
};
tweets.forEach(renderTweet);

html += "</ul>";
answer.innerHTML = html;
