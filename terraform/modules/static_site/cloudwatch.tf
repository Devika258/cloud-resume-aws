resource "aws_cloudwatch_metric_alarm" "cloudfront_4xx" {
  alarm_name          = "${var.project_name}-${var.environment}-cloudfront-4xx"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "4xxErrorRate"
  namespace           = "AWS/CloudFront"
  period              = 300
  statistic           = "Average"
  threshold           = 1
  alarm_description   = "Alarm when CloudFront has high 4xx error rate"

  dimensions = {
    DistributionId = aws_cloudfront_distribution.cdn.id
    Region         = "Global"
  }
}