var AWS = require("aws-sdk");

let awsConfig = {
    "region": "us-west-2",
    "endpoint": "http://dynamodb.us-west-2.amazonaws.com",
    "accessKeyId": "AKIAIMTFREONMQY64LWA", "secretAccessKey": "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"
};

AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let remove = function () {

    var params = {
        TableName: "users",
        Key: {
            "email_id": "example@gmail.com"
        }
    };
    docClient.delete(params, function (err, data) {

        if (err) {
            console.log("users::delete::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::delete::success");
        }
    });
}

remove();