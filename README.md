# 🚐 VanLife – React Router Campervan Marketplace

Hello there! 👋

**VanLife** is a responsive campervan marketplace and host dashboard built while following Scrimba's **React Router** guided project.

Visitors can browse campervans, filter the catalogue by type, and view individual listings. A simple authentication flow unlocks a protected host area with a dashboard, income, reviews, and nested views for managing listed vans.


👉 [**Live Demo**](https://vanlife-davsan.netlify.app/)

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

## 🔧 Beyond the Guided Project

Although the project follows Scrimba's React Router curriculum, the work in this repository is not a straight copy of the scrims. I worked through the challenges myself first, then used the course solution to review trade-offs and improve my implementation.

Meaningful customisations include:

- A reusable `VanCard` component with an accessible listing label
- Van-type filters generated from the available van data rather than hard-coded in the page
- Search-param state passed through listing links so the detail page can return visitors to the filtered catalogue they came from
- A dedicated API module for reusable van and login requests
- A protected host route that preserves the requested destination through the login flow
- Nested host-van detail, pricing, and photo views driven by outlet context

---

## ▶️ Running the Project Locally

1. Clone the repository:

```bash
git clone https://github.com/Davsan88/vanlife-react-router.git
```

2. Move into the project folder:

```bash
cd vanlife-react-router
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local address shown in your terminal.

### Demo login

Use the following mock credentials to explore the host area:

```text
Email: b@b.com
Password: p123
```

> This login is supplied by MirageJS for demonstration only. It is not production authentication.

---

## 🎯 What I Focused On

The main goal was not simply to make each route work, but to understand how a multi-page React application fits together:

- Keeping public and protected experiences clearly separated
- Choosing when state belongs in the URL, navigation state, or component state
- Making nested routes feel like one connected host workflow
- Preserving user context when moving between a filtered list and detail page
- Building reusable UI pieces without losing readability

This was especially useful for moving from isolated React components to an application where navigation, state, data, and layouts all need to cooperate.

---

## 💡 Possible Future Improvements

- Replace the mock API with a real backend and secure authentication
- Add loading skeletons and more complete error states across all data requests
- Let users rent a van and manage bookings
- Add sorting, price ranges, and multi-filter support
- Persist host listings, income, and review data
- Add user accounts and role-based permissions
- Improve test coverage for routing and authentication flows
- Add deployment configuration and a live demo link

---

## 🙌 Credits

This project is based on the **React Router** guided project from [Scrimba](https://scrimba.com/). The course provided the learning path and design direction; I completed the challenges independently, compared my work with the course material afterwards, and made my own implementation and customisation decisions throughout the codebase.

---

## 📫 Contact

Got feedback or questions?

📧 [david.sanchez.martinez@outlook.com](mailto:david.sanchez.martinez@outlook.com)
