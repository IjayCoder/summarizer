# AI Text Summarizer

**AI-powered web application that generates concise summaries 
from long-form text using the Hugging Face API.**

> Built with Node.js · TypeScript · Express.js · Next.js · Tailwind CSS

---

## Overview

Paste any text between 150 and 5000 words, choose your desired 
summary length, and get an accurate, structured summary instantly. 
The summary is always shorter than the original input.

---

## Features

- Adjustable summary length (50 / 100 / 150 / 200 / 300 words)
- Input validation with Zod — rejects texts outside the 150-5000 word range
- AI summarization powered by Hugging Face Inference API
- Clean, responsive UI with Shadcn/UI and Tailwind CSS
- Separate backend for secure API key management

---

## Tech Stack

**Backend**
- Node.js · TypeScript · Express.js
- Zod for input validation
- Hugging Face Inference API

**Frontend**
- Next.js · React · Tailwind CSS · Shadcn/UI

---

## Architecture

summarizer/
├── back/     # REST API — Node.js + TypeScript
│   └── .env
└── front/    # Frontend — Next.js + React
└── .env

---

## Installation

**Backend**
```bash
cd back
npm install
npm run dev
```

**Frontend**
```bash
cd front
npm install
npm run dev
```

---

## Environment Variables

**Backend `/back/.env`**
```env
PORT=5000
HUGGINGFACE_API_KEY=your_token_here
CORS_ORIGIN=http://localhost:3000
```

---

## Note

> Live demo currently unavailable — 
> Hugging Face API key not active.
> The source code is fully functional 
> and available for review.

---

## Author

**Yaji Nonfon** — Freelance Backend Developer
- Portfolio: [yajidev.intlineconnect.com](https://yajidev.intlineconnect.com)
- LinkedIn: [linkedin.com/in/yajinonfon](https://linkedin.com/in/yajinonfon)
- Email: sonagnonyaji@gmail.com
