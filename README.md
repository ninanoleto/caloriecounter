# Calorie Counter

## About

Web application built with TypeScript, as a way to solidify learning experience.\
Developed to track and calculate user's daily calorie intake, with the possibility to create personal macronutrient goals that can be easily changed, and food database with personalized nutritional values.

## Tech Stack

RESTfull web API built with Node.js and Express.js. Used PostgreSQL as a database and Prisma as the ORM of choice.\
Frontend design conception with Figma, built with React.js and TypeScript - react-router-dom was used to manage web routing and styled-components to manage CSS styles.

## Architecture and Design

Atomic Design was used in the frontend, for ease of organization and reusability of components.\
Domain modelling was used to design the backend business logic, to help learning to develop software from a business-first approach.\
MVC was used to structure the backend, to help organize the code and keep the code more maintainable.

## Running the App

### API:

1. Make sure Postgres is running
2. Configure your databade url though the env var or add to `.env` file: DATABASE_URL="postgresql://`PGUser`:`PGPassword`@`PGHost`:`PGPort`/`PGDatabaseName`?schema=public"

```bash
# install dependencies
$ npm install
# run ORM migration
$ npx prisma migrate dev --name init
# run project
$ npm run dev
```

### UI:

```bash
# install dependencies
$ npm install
# run project
$ npm run start
```

App will be running on port `3000`
