---
title: 'For The Records'
publishDate: 2022-07-01
images:
  [
    { src: './image-1.jpeg', alt: 'For The Records home page.' },
    {
      src: './image-2.jpeg',
      alt: 'For The Records - Where The Light Is by John Mayer album page'
    }
  ]
tags: ['Astro', 'Payload CMS', 'Tailwind', 'DigitalOcean']
codeUrl: 'https://github.com/lmackenzie94/for-the-records-astro-payload'
liveUrl: 'https://for-the-records.com'
---

I'd been wanting to build this site for a while and finally decided to go for it using **Astro** on the front-end and **Payload** as the CMS. ﻿All parts of this project, including the database, live on a DigitalOcean droplet. I decided to setup the droplet from scratch which meant doing everything from installing & configuring NGINX and Node.js, to setting up Postgres and adding a basic firewall. It was definitely a learning experience and I'm sure it's not perfect but HEY, it works! 🤷🏻‍♂️

The site is automatically built & deployed on push to the repo via Buddy CI.
