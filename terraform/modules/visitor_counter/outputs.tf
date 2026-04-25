output "api_url" {
  value = "${aws_apigatewayv2_api.visitor_api.api_endpoint}/visitors"
}

output "dynamodb_table_name" {
  value = aws_dynamodb_table.visitor_count.name
}