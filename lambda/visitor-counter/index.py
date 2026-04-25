import json
import os

import boto3

dynamodb = boto3.client("dynamodb")
TABLE_NAME = os.environ["TABLE_NAME"]


def handler(event, context):
    response = dynamodb.update_item(
        TableName=TABLE_NAME,
        Key={"counter_id": {"S": "resume"}},
        UpdateExpression="ADD visitor_count :inc",
        ExpressionAttributeValues={":inc": {"N": "1"}},
        ReturnValues="UPDATED_NEW",
    )

    count = int(response["Attributes"]["visitor_count"]["N"])

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        "body": json.dumps({"visitor_count": count}),
    }