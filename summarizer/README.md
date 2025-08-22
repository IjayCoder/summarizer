# ✨ Summarizer App (Frontend + Backend)

A complete application that lets you paste a text (150–5000 words),  
choose a summary length (e.g., 50/100/150/200/300) — **always shorter than the original text** — and get a summary generated via **Hugging Face**.

## 🧩 Tech

- **Frontend**: Next.js / React, Tailwind, shadcn/ui
- **Backend**: Node.js, Express, TypeScript, Zod, Hugging Face Inference API

## 📂 Folder Structure (example)

.
├─ front/  
│ ├─ (Next.js app)  
│ └─ .env  
└─ back/  
 ├─ (Express/TS app)  
 └─ .env

## ⚙️ Environment Variables

### Backend `/back/.env`

```env
PORT=5000
HUGGINGFACE_API_KEY=hf_xxx_your_token
CORS_ORIGIN=http://localhost:3000
```
