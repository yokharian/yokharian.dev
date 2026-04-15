---
title: "Backend with JWT authorization"
description: "Maintaining high-quality standards, I developed a REST API that integrates with an authorization system & webhook requests"
employer: "Lighthouse Technologies"
heroImage: "/assets/img/2025/jwt-backend.webp"
pubDatetime: "Sun Feb 02 2025 06:00:00 GMT+0000 (Coordinated Universal Time)"
startDate: "Sun Feb 02 2025 06:00:00 GMT+0000 (Coordinated Universal Time)"
endDate: "Sat Feb 01 2025 06:00:00 GMT+0000 (Coordinated Universal Time)"
lucidchartUrl: ""
tags: ["Python","AWS Lambda","AWS API Gateway","AWS DynamoDB","AWS CDK","REST APIs"]
lang: "en"
translationKey: "primeai-webhook-jwt-backend"
---

I developed a robust **serverless backend infrastructure** using **AWS CDK**. This project integrates external webhooks from **Clerk** for seamless synchronization of user data, including:

- **Creation**
- **Modification**
- **Deletion**

Key Features

- **Secure JWT Authentication**:
- Implemented **JSON Web Token (JWT)** authentication with **AWS API Gateway**.
- Ensures safe and reliable data exchange between [Prime.ai]()’s frontend and backend systems.

By leveraging JWT tokens, we achieved a secure and efficient method for authenticating users and authorizing access to our services.

- **Automated Data Synchronization**:
- Webhooks from Clerk automate data updates.
- Real-time synchronization without manual intervention ensures our database remains accurate.

Any changes made to user data are instantly reflected in our database.

- **Simplified Infrastructure Management**:
- Utilizing **AWS CDK** allows for easy scalability and robust security measures.
- Maintains a serverless architecture, reducing operational overhead.

‍

‍
![diagram](/assets/img/2025/33afa5c4bf8fc9d4c50343d099d5c0953fe5aaec.png)