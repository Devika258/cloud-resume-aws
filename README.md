# 🌐 Cloud Resume Website with CI/CD

This project is a fully cloud-native portfolio website built on AWS using Infrastructure as Code and CI/CD automation.

🔗 **Live Site:** https://d2ngjx00rtoziz.cloudfront.net  

---

## 🚀 Architecture Overview

- Static website hosted on **Amazon S3**
- Delivered globally via **Amazon CloudFront (CDN)**
- Visitor counter powered by:
  - **AWS Lambda**
  - **API Gateway**
  - **DynamoDB**
- Infrastructure provisioned using **Terraform**
- Automated deployment using **GitHub Actions**

---

## 🛠️ Tech Stack

- AWS S3
- AWS CloudFront
- AWS Lambda
- AWS API Gateway
- AWS DynamoDB
- Terraform
- GitHub Actions
- HTML, CSS, JavaScript

---

## ⚙️ Features

- Responsive portfolio website
- Dynamic visitor counter (serverless backend)
- CI/CD pipeline for automatic deployment
- Infrastructure as Code using Terraform
- Secure and scalable cloud architecture

---

## 🔄 CI/CD Pipeline

Every push to the `main` branch:

1. Uploads website files to S3
2. Invalidates CloudFront cache
3. Deploys latest version automatically

---

## 🧠 What I Learned

- Building serverless applications on AWS
- Automating deployments with GitHub Actions
- Managing infrastructure with Terraform
- Implementing remote state with S3 and DynamoDB
- Using CloudFront for global content delivery

---

## 📸 Screenshots

(Add your portfolio screenshot here later)

---

## 👩‍💻 Author

**Devika S R**  
Cloud & DevOps Enthusiast  

- LinkedIn: https://www.linkedin.com/in/devika-s-r  
- GitHub: https://github.com/Devika258  

---

## ⭐ Future Improvements

- Custom domain integration
- HTTPS with ACM
- Monitoring with CloudWatch
- Add more AWS projects