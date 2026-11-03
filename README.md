# 🚐 VanLife – React Router Campervan Marketplace

Hello there! 👋

**VanLife** is a responsive campervan marketplace and host dashboard built while following Scrimba's **React Router** guided project.

Visitors can browse campervans, filter the catalogue by type, and view individual listings. A simple authentication flow unlocks a protected host area with a dashboard, income, reviews, and nested views for managing listed vans.

---

## 🚀 Project Overview

This project began with Scrimba's guided React Router material, but I completed each challenge independently before comparing my approach with the course solution. I also adapted and extended the codebase instead of treating the scrims as a final blueprint.

My focus was to turn the course exercise into a coherent small application while reinforcing routing, data flow, component composition, and UI-state decisions in React.

---

## ✨ Features

- Browse a catalogue of campervan listings
- Filter vans by **simple**, **rugged**, or **luxury** using URL search parameters
- Clear active filters and keep the chosen filter when returning from a van detail page
- View individual van details, including type, price, description, and image
- Sign in to access a protected host area
- Redirect unauthenticated visitors to login, then return them to their intended host route
- View a host dashboard with earnings, review score, and listed vans
- Navigate nested host-van views for details, pricing, and photos
- View income transactions and customer-review summaries
- Show a dedicated 404 page for unknown routes
- Responsive layout with reusable navigation, card, filter-chip, and layout components

---

## 🧭 Routing Structure

The app uses nested routes to keep public pages and the host experience organised:

```text
/
├── about
├── vans
│   └── :id
├── login
└── host (protected)
    ├── dashboard
    ├── income
    ├── vans
    │   └── :id
    │       ├── details
    │       ├── pricing
    │       └── photos
    └── reviews
```

The host section is protected by an `AuthRequired` route wrapper. When a visitor is not signed in, the app preserves the intended destination and returns them there after a successful login.

---

## 🧠 What I Practised

- Nested routes and layout routes
- Route parameters with `useParams`
- URL search parameters with `useSearchParams`
- Navigation state and return paths with `useLocation`
- Programmatic navigation with `useNavigate`
- Protected routes using `Navigate` and `Outlet`
- Active navigation styles with `NavLink`
- Sharing selected van data with nested routes via outlet context
- Fetching data, loading states, and error handling with `useEffect` and `useState`
- Reusable React components and clear component responsibilities

---

## 🛠️ Technologies Used

- React
- React Router
- JavaScript (ES6+)
- Vite
- CSS3
- MirageJS for an in-browser mock API
- React Icons

---
