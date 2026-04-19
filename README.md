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

### 2. Run backend server
cd backend
npm install
npm run dev

### 3. Run frontend setup
cd frontend
npm install
npm run dev

## API Documentation

### Base URL
http://localhost:5000/api

---

### Get All Pokémon
GET /api/pokemons

#### Description:
Retrieve a list of all Pokémon.

#### Response:
```json
[
  {
    "name": "Bulbasaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "types": [
      "grass",
      "poison"
    ],
    "height": 7,
    "weight": 56
  }
]

**### Get Pokémon with Pagination**
GET /api/pokemons?page=1&limit=10

#### Description
Retrieve Pokémon with pagination.

#### Query Parameters:
page (number): Page number
limit (number): Number of items per page

## Folder Structure
/frontend
  /app
  /components

/backend
  /routes
  /controllers
