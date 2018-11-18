const AWS = require('aws-sdk');

const comprehend = new AWS.Comprehend({
    apiVersion: "2017-11-27",
    region: "eu-west-1",
    accessKeyId: "AKIAIIR2XYGYBO2LGZ5A",
    secretAccessKey: "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"
});

const params = {
    TextList: ['are you batman?']
}

comprehend.batchDetectDominantLanguage(params, (err, data) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(JSON.stringify(data));
    }
});

const params1 = {
    LanguageCode: 'en',
    TextList: ['are you from Tashkent?']
}

comprehend.batchDetectEntities(params1, (err, data) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(JSON.stringify(data));
    }
});

const params2 = {
    LanguageCode: 'en',
    TextList: ['Tashkent is the best']
}

comprehend.batchDetectKeyPhrases(params2, (err, data) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(JSON.stringify(data));
    }
});


const params3 = {
    LanguageCode: 'en',
    TextList: ['you are best!']
}

comprehend.batchDetectSentiment(params3, (err, data) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(JSON.stringify(data));
    }
});

const params4 = {
    LanguageCode: 'en',
    TextList: ['The hackathon stateus 9:30 ']
}

comprehend.batchDetectSyntax(params4, (err, data) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(data);
    }
});
