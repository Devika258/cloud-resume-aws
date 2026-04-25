variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "eu-west-2"
}

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "cloud-resume"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "dev"
}