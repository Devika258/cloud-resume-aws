# 🌐 Cloud Resume Website (AWS + Terraform + CI/CD)

This project is a fully serverless cloud resume website built on AWS, showcasing cloud engineering and DevOps skills.

🔗 **Live Site:** https://d2ngjx00rtoziz.cloudfront.net

---

## 🚀 Architecture

- Static website hosted on **Amazon S3**
- Delivered globally via **CloudFront CDN**
- Backend visitor counter using:
  - **AWS Lambda**
  - **API Gateway**
  - **DynamoDB**
- Infrastructure managed with **Terraform**
- CI/CD pipeline using **GitHub Actions**
- Monitoring with **CloudWatch**

---

## 🧰 Tech Stack

- AWS S3
- AWS CloudFront
- AWS Lambda
- API Gateway
- DynamoDB
- IAM
- Terraform
- GitHub Actions
- CloudWatch

---

## ⚙️ Features

- 🌍 Global CDN delivery using CloudFront
- 🔐 Secure access with IAM and OAC
- 🔄 CI/CD pipeline for automatic deployments
- 📊 Visitor counter using serverless backend
- 📈 CloudWatch monitoring:
  - Lambda errors
  - API Gateway 5xx errors
  - CloudFront 4xx errors
- 🧱 Infrastructure as Code (Terraform)
- 🔒 Remote Terraform state using S3 + DynamoDB locking

---

## 📁 Project Structure
├── assets/
├── lambda/
├── terraform/
│ ├── backend/
│ ├── environments/dev/
│ └── modules/
├── .github/workflows/
├── index.html
├── script.js
└── style.css

---

## 🔁 CI/CD Pipeline

On every push to `main`:

1. GitHub Actions runs
2. Configures AWS credentials
3. Uploads files to S3
4. Invalidates CloudFront cache

---

## 🧪 How to Deploy

### 1. Clone repo

```bash
git clone https://github.com/Devika258/cloud-resume-aws.git
cd cloud-resume-aws