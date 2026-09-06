# 📇 Contact Manager

A modern, full-stack contact management application built with React and Tailwind CSS — designed to make organizing, searching, and managing your contacts effortless.

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status" />
  <img src="https://img.shields.io/badge/deployed%20on-Vercel-black?logo=vercel" alt="Vercel Deployment" />
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" />
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</p>

---

## 📖 Description

**Contact Manager** is a full-stack web application that lets users effortlessly **add, view, edit, and delete** contacts through a clean, intuitive interface. Built on a React frontend with a structured JSON-based data layer, it demonstrates a practical, real-world approach to full-stack architecture — combining fast, real-time UI interactions with reliable data handling.

Whether you're managing a handful of contacts or building on top of this as a foundation for a larger CRM-style tool, Contact Manager provides a **responsive, production-ready starting point** with modern UX patterns baked in.

---

## 🚀 Live Demo

**👉 [View the live application](https://aminedahou.runs-on.dev)**

Deployed and hosted on **Vercel** for fast, reliable global access.

---

## ✨ Key Features

- 📝 **Full CRUD Functionality** — Add, view, edit, and delete contacts seamlessly.
- 🧩 **Multi-Step Contact Management Architecture** — Contact workflows are structured across **2, 3, and 4-step views**, guiding users through progressively detailed forms and interactions (e.g., basic info → contact details → confirmation) for a smoother, less overwhelming data-entry experience.
- 🔍 **Real-Time Search & Filtering** — Instantly find contacts as you type, with live-updating results.
- 📱 **Fully Responsive Design** — A pixel-perfect experience across mobile, tablet, and desktop devices.
- 🎨 **Modern, Clean UI/UX** — Thoughtfully designed interface built with Tailwind CSS for a minimal, intuitive feel.
- ⚡ **Fast & Lightweight** — Optimized React components for a snappy user experience.

---

## 🛠️ Tech Stack

| Layer                  | Technology                     |
|-------------------------|---------------------------------|
| **Frontend**            | React                          |
| **Backend / Data**      | JSON Data / API-based handling |
| **Styling**             | Tailwind CSS                   |
| **Deployment**          | Vercel                         |

---

## ⚙️ Getting Started Locally

Follow these steps to run Contact Manager on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes bundled with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/amineedahou/contact-manager.git
```

### 2. Navigate into the project directory

```bash
cd contact-manager
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

### 5. Open the app

Visit `http://localhost:5173` (or the port shown in your terminal) to view the app in your browser.

---

## 📁 Project Structure

```
contact-manager/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components (ContactCard, Modal, SearchBar, etc.)
│   ├── api/                # JSON data source / mock API
│   ├── pages/               # Page-level views (e.g., multi-step forms)
│   ├── hooks/                # Custom React hooks
│   ├── utils/                 # Helper functions
│   ├── App.jsx               # Root application component
│   └── main.jsx               # Application entry point
├── package.json
└── README.md
```

---

## 👤 Author

**Mohamed Amine Dahou**

- GitHub: [@amineedahou](https://github.com/amineedahou)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with ❤️ by Mohamed Amine Dahou</p>
