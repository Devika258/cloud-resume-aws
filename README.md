# 🌐 Cloud Resume Website (AWS + Terraform + CI/CD)

This project is a fully serverless cloud resume website built on AWS, showcasing cloud engineering and DevOps skills.

🔗 **Live Site:** https://d2ngjx00rtoziz.cloudfront.net

---

## 🌍 Deployment Details

* **CloudFront Distribution ID:** E102TJK1X040J
* **Visitor API Endpoint:** https://lc4974ybqd.execute-api.eu-west-2.amazonaws.com/visitors
* **S3 Bucket Name:** cloud-resume-dev-site-f8316c76

---

## 🚀 Architecture

* Static website hosted on **Amazon S3**
* Delivered globally via **CloudFront CDN**
* Backend visitor counter using:

  * **AWS Lambda**
  * **API Gateway**
  * **DynamoDB**
* Infrastructure managed with **Terraform**
* CI/CD pipeline using **GitHub Actions**
* Monitoring with **CloudWatch**

---

## 🧰 Tech Stack

* AWS S3
* AWS CloudFront
* AWS Lambda
* API Gateway
* DynamoDB
* IAM
* Terraform
* GitHub Actions
* CloudWatch

---

## ⚙️ Features

* 🌍 Global CDN delivery using CloudFront
* 🔐 Secure access with IAM and OAC
* 🔄 CI/CD pipeline for automatic deployments
* 📊 Visitor counter using serverless backend
* 📈 CloudWatch monitoring:

  * Lambda errors
  * API Gateway 5xx errors
  * CloudFront 4xx errors
* 🧱 Infrastructure as Code (Terraform)
* 🔒 Remote Terraform state using S3 + DynamoDB locking

---

## 📁 Project Structure

```
.
├── assets/
├── lambda/
├── terraform/
│   ├── backend/
│   ├── environments/dev/
│   └── modules/
├── .github/workflows/
├── index.html
├── script.js
└── style.css
```

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
```

### 2. Initialize Terraform

```bash
cd terraform/environments/dev
terraform init
```

### 3. Apply infrastructure

```bash
terraform apply
```

---

## 📊 Monitoring

CloudWatch alarms are configured for:

* Lambda errors
* API Gateway 5xx responses
* CloudFront 4xx error rate

---

## 👩‍💻 Author

**Devika S R**

* 🔗 LinkedIn: https://www.linkedin.com/in/devika-s-r
* 💻 GitHub: https://github.com/Devika258

---

## ⭐ Future Improvements

* Custom domain with HTTPS
* CloudWatch dashboards
* SNS email alerts
* Authentication (Cognito)
