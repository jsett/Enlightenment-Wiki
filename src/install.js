'use strict';

const AWS = require('aws-sdk');

const s3 = new AWS.S3();

var fs = require('fs');



module.exports.install = (event, context, callback) => {
  console.log("Starting install..");
  console.log("Bucket: "+process.env.BUCKET);
  console.log("MyFolder: "+process.env.MyFolder);

  var filePath = process.env.MyFolder;
  var bucketParams = {
   Bucket : process.env.BUCKET,
};


s3.createBucket(bucketParams, function(err, data) {
   if (err) {
      console.log("Error", err);
   } else {
      console.log("Success", data.Location);
   }
});
/*
fs.readFile("assets/bootstrap-4.1.3-dist/css/bootstrap.min.css", {encoding: 'utf-8'}, function(err,data2){
    console.log(err);
    console.log(data2);
    if (!err) {

        var params = {
          Bucket: process.env.BUCKET,
          Key: process.env.MyFolder+"/bootstrap.min.css",
          Body: data2,
        };

        s3.putObject(params, function(err, data) {
          if (err) var res = [err, err.stack]; // an error occurred
          else     var res = [data];           // successful response
        });

    } else {
        console.log(err);
    }
});
*/

var install_files = [
  "/assets/bootstrap-4.1.3-dist/css/bootstrap.min.css",
  "/assets/bootstrap-4.1.3-dist/js/bootstrap.min.js",
  "/assets/markdown-it.min.js",
  "/assets/codemirror-5.40.2/lib/codemirror.css",
  "/assets/codemirror-5.40.2/addon/fold/foldgutter.css",
  "/assets/codemirror-5.40.2/addon/fold/foldgutter.css",
  "/assets/codemirror-5.40.2/addon/dialog/dialog.css",
  "/assets/codemirror-5.40.2/theme/xq-light.css",
  "/assets/codemirror-5.40.2/lib/codemirror.js",
  "/assets/codemirror-5.40.2/addon/search/searchcursor.js",
  "/assets/codemirror-5.40.2/addon/search/search.js",
  "/assets/codemirror-5.40.2/addon/dialog/dialog.js",
  "/assets/codemirror-5.40.2/addon/edit/matchbrackets.js",
  "/assets/codemirror-5.40.2/addon/edit/closebrackets.js",
  "/assets/codemirror-5.40.2/addon/comment/comment.js",
  "/assets/codemirror-5.40.2/addon/wrap/hardwrap.js",
  "/assets/codemirror-5.40.2/addon/fold/foldcode.js",
  "/assets/codemirror-5.40.2/addon/fold/brace-fold.js",
  "/assets/codemirror-5.40.2/mode/javascript/javascript.js",
  "/assets/codemirror-5.40.2/mode/markdown/markdown.js",
  "/assets/codemirror-5.40.2/keymap/sublime.js"
]

//console.log(install_files);
console.log('done');



/*
  install_files.forEach(function(filePath){
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data2){
        if (!err) {

            var params = {
              Bucket: process.env.BUCKET,
              Key: process.env.MyFolder+filePath,
              Body: data2,
            };

            s3.putObject(params, function(err, data) {
              if (err) var res = [err, err.stack]; // an error occurred
              else     var res = [data];           // successful response
            });

        } else {
            console.log(err);
        }
    });
  })
  */

}
