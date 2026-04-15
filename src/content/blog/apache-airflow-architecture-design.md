---
title: "Scalable ETL pipelines"
description: "Significantly reduced infrastructure expenses in AWS"
employer: "Next-e"
heroImage: "/assets/img/2025/airflow.webp"
pubDatetime: "Tue Mar 08 2022 19:02:00 GMT+0000 (Coordinated Universal Time)"
startDate: "Tue Mar 08 2022 19:02:00 GMT+0000 (Coordinated Universal Time)"
endDate: "Fri May 09 2025 17:00:00 GMT+0000 (Coordinated Universal Time)"
lucidchartUrl: "https://lucid.app/documents/embedded/30f8bc57-131a-4503-84ae-af9a9f673a31"
tags: ["AWS ECS","Docker","Amazon RDS","Amazon EFS","CI/CD","AWS Load Balancer","DNS"]
lang: "en"
portfolio: true
translationKey: "apache-airflow-architecture-design"
---

As part of my work at a startup 🚀, I had the opportunity to design and implement the backend and cloud infrastructure using **AWS CDK**. One of the key components of this solution was the implementation of Apache Airflow, the popular workflow orchestration tool, on the AWS platform ☁️.

‍

One of the key components of the solution was using **Amazon ECS** to host the different Airflow components, such as the **WEB SERVER** 🌐, the **SCHEDULER** ⏰, and the **WORKERS** 👷. This allowed me to select the most appropriate machine types to meet the performance and processing power needs of our workload. Additionally, the ability to scale up and down the **EC2 or FARGATE** instances ensured that the infrastructure could adapt to variations in demand.

‍

Another important element was the integration of **Amazon RDS**, where I set up a **PostgreSQL** database 🗄️ to store Airflow metadata. But perhaps the most notable aspect of the solution was the use of **Amazon EFS (Elastic File System)** to store **DAGs (Directed Acyclic Graphs)** 📊 and other Airflow-related files.

‍

EFS allowed me to create a scalable shared file system, ensuring that the files were always accessible to our Airflow environment, regardless of the number of EC2 instances being used.

‍
The EFS integration was key, allowing me to avoid data persistence issues that could arise with other storage solutions. Additionally, EFS offers high availability and durability, giving me peace of mind knowing that my critical Airflow data would be secure and accessible 🔒.
‍

As for automation, I set up **GitHub Actions** ⚙️ to automate the deployment of DAGs from a GitHub repository directly to our Airflow environment. This improved efficiency and reduced manual errors in the deployment process, as changes to the DAGs were automatically updated.

‍

‍Every file and DAG in the repository reflects the exact content in all containers.

‍
Check out the AWS infrastructure diagram 👇
