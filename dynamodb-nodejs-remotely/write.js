var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-west-2",
    "endpoint": "http://dynamodb.us-west-2.amazonaws.com",
    "accessKeyId": "AKIAIMTFREONMQY64LWA", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

    var input = {
        "email_id": "example-1@gmail.com", "created_by": "clientUser", "created_on": new Date().toString(),
        "updated_by": "clientUser", "updated_on": new Date().toString(), "is_deleted": false
    };
    var params = {
        TableName: "users",
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("users::save::success" );                      
        }
    });
}

save();