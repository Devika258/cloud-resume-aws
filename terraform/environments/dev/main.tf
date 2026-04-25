terraform {
  required_version = ">= 1.6.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

module "static_site" {
  source = "../../modules/static_site"

  project_name = var.project_name
  environment  = var.environment
}

module "visitor_counter" {
  source = "../../modules/visitor_counter"

  project_name = var.project_name
  environment  = var.environment
}

output "website_bucket_name" {
  value = module.static_site.website_bucket_name
}

output "cloudfront_domain_name" {
  value = module.static_site.cloudfront_domain_name
}

output "cloudfront_distribution_id" {
  value = module.static_site.cloudfront_distribution_id
}

output "visitor_api_url" {
  value = module.visitor_counter.api_url
}