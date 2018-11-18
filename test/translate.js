const AWS = require('aws-sdk');
const path = require('path');

// AWS.config.loadFromPath(path.join(__dirname+'/credentials.json'));




const translate = new AWS.Translate({
    apiVersion: "2017-07-01",
    region: "eu-west-1",
    accessKeyId: "AKIAIIR2XYGYBO2LGZ5A",
    secretAccessKey: "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"
});

var params = {
    SourceLanguageCode: 'en',
    TargetLanguageCode: 'ru',
    Text: 'look at'
};

const tran = await translate.translateText(params).promise();

console.log(tran);

// translate.translateText(params, function(err, data) {
//     if (err) {
//         console.log(err, err.stack);
//         return;
//     }
//     if (data) {
//         console.log(typeof data);
//     }
// });