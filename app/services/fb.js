
// FB.api(
//     '/search',
//     'GET',
//     {"type":"place","q":"car","center":"40.7304,-73.9921","distance":"1000","fields":"name,checkins,picture,description,photos"},
//     function(response) {
//         console.log(response);
//     }
//   );

let graph = require('fbgraph');

graph.setGraphUrl('https://graph.facebook.com');

graph.setAppSecret('298942267616599');

graph.setAccessToken('286171775573133|ctMckCzv5RcBnxxBCEwxaRVmKNM');

graph.setVersion("3.2");
 
var searchOptions = {
    q:     "father"
  , type:  "place"
  , fields: "name,picture,description,photos,videos"
};
 
graph.search(searchOptions, function(err, res) {
  console.log(res.data.length); // {data: [{id: xxx, from: ...}, {id: xxx, from: ...}]}
});


// graph.get("20531316728",(err,res) => {

    // console.log(res);

// });