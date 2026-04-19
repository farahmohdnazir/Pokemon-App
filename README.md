# Pokemon Explorer (Next.js)

A full-stack Pokémon web application built with Next.js and Express.js.  
Users can browse Pokémon and search Pokémon data.

## Features
- Display Pokémon list
- Search and filter Pokémon
- Pagination via "Load more"
- Backend API integration (Express.js)

## Tech Stack
- Next.js (React Framework)
- Node.js + Express.js
- Bootstrap

## Installation

### 1. Clone the repository
git clone https://github.com/farahmohdnazir/Pokemon-App
cd PokeDex_App

### 2. Install dependencies
npm install

### 3. Run backend server
cd backend
npm install
npm run dev

### 4. Run frontend (Next.js)
cd frontend
npm install
npm run dev

## API Endpoints
- GET /api/pokemons → Get all Pokémon
- GET /api/pokemons?page=1&limit=10 → Pagination

## Folder Structure
/frontend
  /app
  /components

/backend
  /routes
  /controllers
