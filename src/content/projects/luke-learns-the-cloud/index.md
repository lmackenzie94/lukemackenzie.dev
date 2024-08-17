---
title: 'Luke Learns The Cloud ☁️'
publishDate: 2024-08-08
images: [{ src: './image-1.png', alt: 'Luke Learns The Cloud home page.' }]
tags: ['AWS S3', 'CloudFront', 'Route 53', 'Vite']
liveUrl: 'https://lukelearnsthe.cloud'
---

I recently got my **_AWS Certified Cloud Practitioner Certification_**. That said, I still have so much more to learn & explore so I figured I'd set up a site to showcase the AWS projects I build.

This site, although very basic (for now...), is leveraging a number of AWS services. The static site files are stored in an **S3 bucket** and I've enabled **CloudFront** for fast, global content delivery. Additionally, I'm using **Route 53** for domain management, AWS **Certification Manager** for SSL certification to ensure secure connections, and **Origin Access Control (OAC)** to restrict S3 bucket access exclusively to CloudFront, adding an extra layer of security.
