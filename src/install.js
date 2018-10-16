'use strict';

const AWS = require('aws-sdk');

const s3 = new AWS.S3();

var fs = require('fs');



module.exports.install = (event, context, callback) => {
  console.log("Starting install..");
  console.log("Bucket: "+process.env.BUCKET);
  console.log("MyFolder: "+process.env.MyFolder);
}
