// FB.init({appId: '298942267616599', version: 'v3.2', xfbml: true});

// FB.api(
//     '/search',
//     'GET',
//     {"type":"place","q":"car","center":"40.7304,-73.9921","distance":"1000","fields":"name,checkins,picture,description,photos"},
//     function(response) {
//         console.log(response);
//     }
//   );


//   //

//   граф . setAccessToken ( access_token ) ;

// var options = {
//     timeout:  3000
//   , pool:     { maxSockets:  Infinity }
//   , headers:  { connection:  "keep-alive" }
// };
let graph = require('fbgraph');

graph.setGraphUrl('https://graph.facebook.com');

graph.setAppSecret('298942267616599');

graph.setAccessToken('298942267616599|rkjVymXL-AQkdBwPenZP4e5MkVg');

graph.setVersion("3.2");
 
// var searchOptions = {
//     q:     "got father"
//   , type:  "place"
//   , fields: "name,checkins,picture,description,photos"
// };
 
// graph.search(searchOptions, function(err, res) {
//   console.log(res); // {data: [{id: xxx, from: ...}, {id: xxx, from: ...}]}
// });

graph.get("20531316728",(err,res) => {

    console.log(res);

});