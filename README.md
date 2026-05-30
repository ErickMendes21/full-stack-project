# 🔐 Authentication System

Projeto full stack de autenticação com frontend e backend separados, desenvolvido utilizando React + TypeScript no frontend e Node.js com Fastify no backend.

Atualmente o projeto possui apenas a **tela de login**, mas novas funcionalidades serão implementadas futuramente.

## 🚀 Tecnologias Utilizadas

### Frontend
- :contentReference[oaicite:0]{index=0} + TypeScript
- Responsividade com :contentReference[oaicite:1]{index=1}

### Backend
- Node.js
- Fastify
- Nodemon
- JWT (JSON Web Token)
- Bcrypt
- CORS

### Banco de Dados & Deploy
- PostgreSQL
- :contentReference[oaicite:2]{index=2} (NeonDB)
- :contentReference[oaicite:3]{index=3} (Hospedagem do backend)

---

## 📂 Estrutura do Projeto

```txt
project/
│
├── frontend/    # Aplicação React + TypeScript
│
└── backend/     # API com Fastify + PostgreSQL
```

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
```

Entre na pasta do projeto:

```bash
cd nome-do-projeto
```

---

## 💻 Rodando o Frontend

Entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

O frontend será iniciado localmente.

---

## 🌐 Backend

O backend está hospedado no Render e é consumido pelo frontend.

Tecnologias utilizadas no backend:

- Node.js
- Fastify
- JWT para autenticação
- Bcrypt para criptografia de senha
- PostgreSQL com NeonDB

---

## 🔒 Funcionalidades Atuais

- Tela de login
- Integração frontend ↔ backend
- Autenticação utilizando JWT
- Hash de senha utilizando Bcrypt

---

## 📌 Próximas Implementações

- Cadastro de usuário
- Recuperação de senha
- Dashboard do sistema
- Controle de autenticação
- Persistência de sessão
- Melhorias de UI/UX
- Responsividade completa

---

## 🛠️ Ambiente de Desenvolvimento

Ferramentas utilizadas durante o desenvolvimento:

- :contentReference[oaicite:4]{index=4}
- :contentReference[oaicite:5]{index=5}
- PostgreSQL
- Render

---

## 📄 Licença

Este projeto está sendo desenvolvido para fins de estudo e portfólio.