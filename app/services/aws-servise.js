'use strict';

const AWS = require('aws-sdk');
const path = require('path');

AWS.config.loadFromPath(path.join(__dirname+'/credentials.json'));

class Translate {

    constructor () {
        this.translate = new AWS.Translate({
            apiVersion: '2017-07-01'
        });
    }

    async tran(text, source_lan, target_lan) {
        const params = {
            SourceLanguageCode: source_lan,
            TargetLanguageCode: target_lan,
            Text: text,
        };

        return this.translate.translateText(params).promise();
    }

};

class Comprehend {
    constructor () {
        this.comprehend = new AWS.Comprehend({
            apiVersion: '2017-11-27'
        })
    }

    dominantLanguage(textList) {

        const params = { 
            TextList: textList
        };

        return this.comprehend.batchDetectDominantLanguage(params).promise();
    }

    entities(textList, lan_code, cb = () => {}) {
        const params = {
            LanguageCode: lan_code,
            TextList: textList
        }

        return this.comprehend.batchDetectEntities(params).promise();
    }

    keyPhrases(textList, lan_code) {
        const params = {
            LanguageCode: lan_code,
            TextList: textList
        }

        return this.comprehend.batchDetectKeyPhrases(params).promise();
    }

    sentiment(textList, lan_code) {
        const params = {
            LanguageCode: lan_code,
            TextList: textList
        }

       return this.comprehend.batchDetectSentiment(params).promise();
    }
}

exports.Translate = Translate;
exports.Comprehend = Comprehend;


const translate = new Translate();
const comprehend = new Comprehend();


