---
title: "Invoice extractor"
description: "Significantly reduced workload of the finance team"
employer: "FairPlay"
heroImage: "/assets/img/2025/invoice-extraction.webp"
pubDatetime: "Sat Jun 05 2021 04:33:00 GMT+0000 (Coordinated Universal Time)"
startDate: "Sat Jun 05 2021 04:33:00 GMT+0000 (Coordinated Universal Time)"
endDate: ""
lucidchartUrl: ""
tags: ["Python","Webhooks","FastAPI","Asynchronous","REST APIs","portfolio"]
lang: "en"
portfolio: true
translationKey: "invoice-extraction-automation"
---

In 2020, I built an invoice extraction from Mexico's Tax Administration Service (SAT). I was only armed with determination and online documentation, but **without the AI assistants** we rely on today haha I built an automated system that would process invoices for dozens of companies efficiently.

**The Challenge**

SATWS, a cloud API offering automated electronic invoice (CFDI) extraction. However, its asynchronous nature presented **unique challenges**. The process required an initial request, waiting **several days** while the platform processed in the background, and **final retrieval** all without losing critical data.

![diagram.svg](/assets/img/2025/diagram.svg)

**The Solution**

Over one to two months of focused development, I architected a solution using FastAPI, leveraging its exceptional handling of asynchronous operations and built-in Swagger documentation. The implementation included:

- **Webhook Integration**: Rather than repetitively querying the API, I registered webhook URLs to receive automatic notifications when invoices were ready
- **Stream Processing**: Developed a system to download large files directly to temporary memory and upload to S3 using HTTP stream requests, preventing RAM exhaustion
- **Robust Error Handling**: Implemented a comprehensive retry system to ensure no invoice was lost
- **State Management**: Created a PostgreSQL-based tracking system for extraction states using raw SQL queries without an ORM (Object-Relational Mapping a tool that abstracts database interactions into object-oriented code)

**Learning Through Challenge**

The learning environment of 2020 made this project particularly formative. Without ChatGPT or AI assistants, I relied entirely on official documentation—meticulously studying Python's standard library references and SATWS's Swagger specifications. This constraint became my greatest teacher. Page by page, I extracted the knowledge needed to build a complete RESTful backend integration.

Choosing the right system for tracking information was a big decision.  I could have used a simple file, but I chose a database. This was better because the tools were already there, and it helped me learn new skills.  My goal was to use what I had and learn something new at the same time.

![synapse.webp](/assets/img/2025/synapse.webp)

**Key Insights**

The most valuable lesson? Tools are ephemeral, but concepts endure. When SATWS completely redesigned their backend 2-3 years later, requiring a full rewrite, I wasn't surprised—I'd learned that in software development, change is the only constant. By focusing on understanding abstract concepts rather than memorizing library-specific syntax, I built knowledge that transfers across technologies.

**The Result**

After two months of dedicated development, I delivered an ETL system that automated invoice extraction for dozens of companies, reducing manual processing time from hours to minutes. The system's clean, efficient code orchestrated the entire flow seamlessly, from initial request through asynchronous processing to final invoice delivery. 

FastAPI remains a powerful tool in my arsenal years later, validating my technology choices. Most importantly, I learned that the ability to learn—to read, understand, and implement from documentation alone—is perhaps the most valuable skill in our rapidly evolving field.