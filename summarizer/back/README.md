# 🧠 Summarizer API (Backend)

Express/TypeScript API that generates text summaries using  
**Hugging Face Inference API** (`facebook/bart-large-cnn` model).

## 🚀 Stack

- Node.js + Express
- TypeScript
- Zod (validation)
- dotenv (environment variables)
- CORS (frontend on http://localhost:3000)
- Hugging Face Inference API

## 📁 Structure (example)

.
.
├─ src/
│ ├─ app.ts # Main Express app
│ ├─ server.ts # Server bootstrap
│ ├─ routes/
│ │ └─ summarize.route.ts # API routes
│ ├─ controllers/
│ │ └─ summarize.controller.ts # Request handling logic
│ ├─ config/
│ │ └─ huggingface.ts # Hugging Face API config
│ ├─ schema/
│ │ └─ summarizer.schema.ts # Zod validation schemas
│ ├─ middleware/
│ │ ├─ validate.ts # Request validation middleware
│ │ └─ errorHandler.ts # Centralized error handling
│ └─ utils/
│ └─ sanitize.ts # Sanitize and clean user input
└─ .env

## ⚙️ Configuration

Create a `.env` file at the root of the backend:

```env
PORT=5000
HUGGINGFACE_API_KEY=hf_xxx_your_token
CORS_ORIGIN=http://localhost:3000
```
