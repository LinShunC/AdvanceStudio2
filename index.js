var AWS = require("aws-sdk");
var express = require('express');
var app = express();
var path = require('path');
AWS.config.update({
    accessKeyId: 'AKIAIMRF5KQSPL7PDVNQ',
    secretAccessKey: '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',
    region: 'ap-southeast-2'
});
var params = {
    "Attributes": ["ALL", "DEFAULT"],
    Image: {
        S3Object: {
            Bucket: "emotiontest",
            Name: "test.jpeg",
        }
    },

};
const rekognition = new AWS.Rekognition();
rekognition.detectFaces(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log(JSON.stringify(data, null, '\t'));


})