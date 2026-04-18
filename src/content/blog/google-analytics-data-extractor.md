---
title: "Google Analytics data extractor"
description: "Automated critical business process significantly reducing workload of the analytics team"
employer: "FairPlay"
heroImage: "/assets/img/2025/google-analytics.webp"
pubDatetime: "Thu Feb 04 2021 05:33:00 GMT+0000 (Coordinated Universal Time)"
startDate: "Thu Feb 04 2021 05:33:00 GMT+0000 (Coordinated Universal Time)"
endDate: ""
lucidchartUrl: ""
tags: ["Python","ETL Automation","REST APIs","portfolio"]
lang: "en"
portfolio: true
translationKey: "google-analytics-data-extractor"
---

**The Mission**

Fairplay needs fresh, reliable data about our e-commerce clients to make quick lending decisions. I was tasked with developing a data extractor for Google Analytics, significantly reducing the analytics team's workload. The technical requirements included:

- Connecting to Google Analytics APIs (both V3 and later V4)
- Managing token authorization and pagination
- Implementing date-based query splitting and data segmentation
- Building strong error handling and retry mechanisms
- Following the team's OOP standards with CLI configuration
- Integrating with our existing Peewee ORM (Object-Relational Mapping) for PostgreSQL

**The Learning Curve**

In 2020's pre-ChatGPT world, I dove deep into Google's official documentation **dense**, technical specifications that required understanding not just APIs, but Google's entire data philosophy. Unlike today's Swagger documentation, Google Analytics V3 required mastering their unique dimensional model: understanding how dimensions and metrics worked together, configuring precise data retrieval parameters, and navigating complex pagination schemes.

![GA.webp](/assets/img/2025/GA.webp)

I felt comfortable following this formula:

1. **Rapid Prototyping**: Created simple Python scripts for quick API tests
2. **Debugging Mastery**: Used VS Code's debugger to trace through call stacks and inspect PyPI libraries' source code
3. **Step-by-Step Development**: Built a working proof-of-concept before integrating with the team's complex OOP framework

This debugging workflow allowed me to understand not just what the code did, but how external libraries processed our data internally.

**The Success**

Within a month, I delivered a fully functional ETL that:

- Automated daily data extraction for multiple clients
- Smoothly handled the transition from Google Analytics V3 to V4
- Included comprehensive PyTest unit tests with fixtures and mocking
- Integrated perfectly with our Docker-containerized infrastructure

---

---

---

**The Mistake That Taught Me Everything**

Then I made the classic developer error: premature optimization. Without being asked, I began refactoring and "improving" the working system. As the codebase grew, so did my need to perfect it. The results were terrible:

- Development speed dropped dramatically
- Bugs appeared in previously stable code
- I added unnecessary complexity for my teammates
- Communication suffered as I isolated myself trying to write "perfect" code

This experience contributed to my departure from the company—a humbling moment that became my most valuable teacher.

**The Transformation**

I learned that I was wrong because I focused on code perfection instead of **business needs**. This failure taught me to:

- **Improve Communication**: I realized that working alone was my biggest problem; I started prioritizing team collaboration
- **Think Practically:** I learned to balance code quality with what the business actually needed

> ###### 🧠 The impact was immediate. In my next technical interview at Next-e, extremely challenging, I solved it perfectly. I was blessed to be part of a startup as a Back-end leader, where I grew exponentially. More importantly, I approached them with new wisdom about when "good enough" truly is good enough.

- **Reading documentation is a superpower**: The ability to understand complex technical specifications remains invaluable
- **Debugging is thinking**: Understanding code execution in detail speeds up learning dramatically
- **Perfect is the enemy of done**: Business value beats architectural beauty every time
- **Failure is data**: My biggest mistake became my greatest teacher

Today, when mentoring junior developers, I share this story freely. Yes, I was dismissed. Yes, I over-engineered. But that experience shaped the practical, communicative, and business-focused engineer I am today.
