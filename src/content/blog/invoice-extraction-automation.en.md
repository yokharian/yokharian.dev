---
title: "Invoice extractor"
description: "Significantly reduced workload of the finance team"
employer: "FairPlay"
heroImage: "/assets/img/2025/invoice-extraction.webp"
banner: "https://cdn.prod.website-files.com/67c3a771f50ee86278e081b8/67cbf293d19d256af5e0dccd_67cbd68c8ae8762187bf946d_photo-1551288049-bebda4e38f71.jpeg"
pubDatetime: "Sat Jun 05 2021 04:33:00 GMT+0000 (Coordinated Universal Time)"
lucidchartUrl: ""
tags: ["Python","Webhooks","FastAPI","Asynchronous","REST APIs"]
lang: "en"
translationKey: "invoice-extraction-automation"
featured: true
---

🔗 **Integration with **[**SAT.ws**]()** using Python and FastAPI**
‍

[**SAT.ws**]() is a cloud API that connects directly to the **Mexican Tax Administration Service (SAT)**, allowing you to automate the extraction of electronic invoices (CFDIs) without the need for manual access.

‍
⚙️ **Asynchronous Process**
‍

The process is **asynchronous**: first, you make an initial request to [**SAT.ws**]() to extract the invoices. The platform processes this request in the background and does not immediately deliver the invoices. To avoid repetitive queries about the status of the process, **webhooks** can be used. By registering a webhook URL on [**SAT.ws**](), you will receive an automatic notification when the invoices are ready to be downloaded.

‍

📥 **Final Request for Invoices**

**‍**‍

Once this notification is received, your application can make a second request to finally obtain the files (XML and PDF).

‍

‍

‍

‍
🚀 **Benefits of FastAPI**
‍

**FastAPI** is especially useful in this context, as it facilitates the handling of asynchronous operations between the SAT and your application. Its **SWAGGER** integration is very helpful and simplifies the configuration of endpoints to receive notifications via webhook. This integration makes the entire process **efficient** and **easy to implement**.

‍

‍
