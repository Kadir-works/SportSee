# SportSee – Dashboard Analytics (P12 OpenClassrooms)

SportSee est une application de coaching sportif permettant de visualiser les données d'activité physique d'un utilisateur via un tableau de bord d'analytics interactif.

Ce projet correspond au **Projet 12** du parcours  
**Développeur d'application JavaScript React** chez OpenClassrooms.

---

## 🛠 Technologies utilisées

### Front-end

- React (avec Vite)
- React Router DOM
- Recharts
- Axios
- SCSS

### Back-end

- Node.js (fourni par OpenClassrooms)

---

## 📦 Prérequis

- Node.js (version LTS recommandée)
- npm ou yarn

---

## 🚀 Installation du projet

### Front-end

```bash
git clone https://github.com/Kadir-works/SportSee.git
cd SportSee
npm install
npm run dev
```

L'application front-end est accessible à l'adresse :  
http://localhost:5173

### Backend (API)

```bash
git clone https://github.com/OpenClassrooms-Student-Center/SportSee.git
cd SportSee
npm install
npm start
```

Le backend est accessible à l'adresse :  
http://localhost:3000

---

## 📊 Données

- Le projet fonctionne d'abord avec des données mockées
- Une couche de services permet de basculer entre données mock et API
- Les données sont standardisées avant utilisation

---

## 🏗 Architecture

```
src/
├── components/
│   ├── cards/          # Cartes de données clés
│   ├── charts/         # Graphiques Recharts
│   └── layout/         # Header, Sidebar, Layout
├── data/
│   └── mock.js         # Données mockées
├── models/             # Standardisation des données
├── pages/              # Pages (Home, Profile, Error)
├── services/
│   └── sportsee.service.js
└── styles/
    └── variables.scss
```

---

## 📈 Graphiques

- Activité quotidienne (BarChart)
- Durée moyenne des sessions (LineChart)
- Performance (RadarChart)
- Score (RadialBarChart)

---

## 🎯 Fonctionnalités

- Affichage du profil utilisateur
- Tableau de bord analytics
- Routing avec React Router
- Desktop first
- Données mockées / API

---

## 👤 Auteur

Projet réalisé par **Kadir** dans le cadre de la formation OpenClassrooms.

---

## 📝 Licence

Projet pédagogique – non destiné à un usage commercial.
