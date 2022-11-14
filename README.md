<div align="center">
    <img src="https://images.emojiterra.com/google/android-11/512px/1f3ac.png" alt="movieWishlist" width="100">
  </a>

  <h3 align="center">Movie Wishlist</h3>
  <div align="center">
    A PoC to prove full-stack development using TypeScript. It's a movie organizer.
    <br />
  </div>
</div> 
<div align="center">
  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px" />
  <img src="https://img.shields.io/badge/Express-333333?style=for-the-badge&logo=express&logoColor=#000000" height="30px" />
  <img src="https://img.shields.io/badge/Prisma-333333?style=for-the-badge&logo=prisma" height="30px" />
</div>

<!-- Table of Contents -->

<div align="center" style="margin-top: 50px">
    <h1> Project Guide</h1>
</div>

## Features

- Create a movie
- Get all movies
- Get a movie by its id
- Delete a movie
- Update status of the movie

</br>

<div align="center" >
    <h1> API Reference</h1>
</div>

<details style="margin-bottom: 10px">
<summary style="font-size: 20px; color: #7E7E7E">TL;DR</summary>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #9FE58A">POST</span>/movies</summary>

Body:

```json
{
    "title": string,
    "streamingService": string,
    "genre": string,
    "status": string
}

```

Response:

```json
Status: 201 Created
```

</details>
<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">GET</span>/movies</summary>

Response:

```json

Status: 200 OK

[
  {
    "id": 1,
    "title": "Life in a day",
    "streamingService": "Youtube",
    "genre": "Documentary",
    "status": "quero assistir"
  },
  {
    "id": 2,
    "title": "The Godfather",
    "streamingService": "Amazon Prime",
    "genre": "Mafia",
    "status": "assistido"
  },
  {
    "id": 3,
    "title": "Taxi Driver",
    "streamingService": "Netflix",
    "genre": "Drama",
    "status": "quero assistir"
  },
  {
    "id": 4,
    "title": "Ta",
    "streamingService": "Netflix",
    "genre": "Drama",
    "status": "quero assistir"
  },
  {
    "id": 5,
    "title": "Pitico",
    "streamingService": "Youtube Originals",
    "genre": "Cat drama",
    "status": "quero assistir"
  },
  {
    "id": 6,
    "title": "Eupedia",
    "streamingService": "Netflix",
    "genre": "Comedy",
    "status": "assistido"
  },
  {
    "id": 7,
    "title": "The Irishman",
    "streamingService": "Netflix",
    "genre": "Drama",
    "status": "vou assistir"
  }
]
```

</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">GET</span>/movies/:id</summary>

Response:

```json
Status: 200 OK
{
  "id": 7,
  "title": "The Irishman",
  "streamingService": "Netflix",
  "genre": "Drama",
  "status": "vou assistir"
}
```

</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #CC0000">DELETE</span>/movies/:id</summary>

Response:

```json
Status: 200 OK
OK
```

</details>
<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #9FE58A">POST</span>/movies/:id/update</summary>

Response:

```json
Status: 200 OK
OK
```

</details>

#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://YOUR-USER-NAME:YOUR-PASSWORD@Hostname:5432/DatabaseName`

`PORT = number `

#

## Run Locally

Clone the project

```bash
  git clone https://github.com/beldmoreira/moviesWishlist
```

Go to the project directory

```bash
  cd moviesWishlist/
```

Install dependencies

```bash
  npm install
```

Create database

```bash
  npx prisma migrate dev
```

Start the server

```bash
  npm run dev
```

</br>

#

## Author

- Isabela Moreira
