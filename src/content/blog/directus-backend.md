---
title: "Backend CI/CD container orchestation"
description: "Using ECS that is ❝similar to kubernetes❞ automatically deployed via Jenkins I deployed a container"
employer: "Lighthouse Technologies"
heroImage: "/assets/img/2025/jenkins-ecs.webp"
pubDatetime: "Tue Nov 12 2024 06:00:00 GMT+0000 (Coordinated Universal Time)"
startDate: "Tue Nov 12 2024 06:00:00 GMT+0000 (Coordinated Universal Time)"
endDate: "Mon Jul 29 2024 05:00:00 GMT+0000 (Coordinated Universal Time)"
lucidchartUrl: ""
tags: ["AWS ECS","AWS CodeBuild","AWS S3","AWS RDS","AWS CDK","Jenkins"]
lang: "en"
translationKey: "directus-backend"
---

🚀 **Container Deployment on AWS with Jenkins and Bitbucket**

**Directus** is a headless platform that allows you to manage and expose data very easily through APIs, regardless of the type of database you have. Basically, it turns your data source into a **backend** ready to connect to any frontend or application.

☁️ **Deployment on Amazon ECS**

Deploying it on **Amazon ECS** means you can run Directus inside containers, facilitating **scalability**, **automation**, and **maintenance** of your application with high availability. Additionally, being on AWS, you can take advantage of services like **Amazon RDS** for the database and achieve a secure and robust cloud environment.

🔧 **Project Workflow**

In this project, **Bitbucket** triggers a **Jenkinsfile** that packages the artifacts and uploads them to **S3**. Then, **AWS CodeBuild** takes those files and keys from another S3 bucket to build the Docker image of Directus, which is published to **Amazon ECR** ⚙️.

Once ready, CodeBuild retrieves the image from ECR again and deploys it to an **ECS cluster**, where the application is up and running, ready to use.

🔒 **Security and Automation**

Furthermore, the database is hosted on **Amazon RDS** within a **VPC**, ensuring that everything is secure. Thanks to this architecture, the pipeline remains **automated** and **scalable**, reducing manual work and allowing for quick releases with every code push.

Check out the AWS infrastructure diagram 👇

![diagram](/assets/img/2025/276273238a789dfcec12cf0c6e9ca71b8751857a.png)
