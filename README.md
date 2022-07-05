# Agent Bank

## Explication of work practice

### Build an analytics dashboard with React

-   Realization of an app with React and React-router
-   Slicing into modular and reusable components
-   Using an libraire to generate chart
-   Create documentation of the project

## Project architecture :

This project, called frontend, is to be cloned and launched locally.
You could use the backend, or the mock see instruction below

## Installation

I recommand you to use VS Code

## Prerequisite

    NodeJS
    yarn
    NPM
    Docker (recommanded)

## Dependencies:

    fortawesome/fontawesome-svg-core: 6.1.1
    fortawesome/free-regular-svg-icons: 6.1.1
    fortawesome/free-solid-svg-icons: 6.1.1
    fortawesome/react-fontawesome: 0.1.18
    reduxjs/toolkit: 1.8.2
    testing-library/jest-dom: 5.16.4",
    testing-library/react: 13.3.0",
    testing-library/user-event: 13.5.0",
    axios: 0.27.2,
    babel-plugin-macros: 3.1.0,
    immer: 9.0.15,
    react: 18.1.0,
    react-dom: 18.1.0,
    react-redux: 8.0.2,
    react-router-dom: 6.3.0,
    react-scripts: 5.0.1,
    redux: 4.2.0,
    redux-thunk: 2.4.1,
    web-vitals: 2.1.4

## How to launched it locally ?

### Docker Method (Recommanded)

Go to the cloned repository on your computer with bash :

```
$ cd JonathanChosson_13_13062022-
```

Launch the docker compose :

```
$ docker-compose up --build -d
```

The project is on this adress : http://localhost:8080/

## Launch Manually (not-recommanded)

### FrontEnd :

Launch the front-End like previously
go to the back-end directory :

```
$ cd JonathanChosson_13_13062022-
```

install the package (describe in `package.json`) :

```
$ npm install
 OR
$ yarn install
```

Start your local server :

```
$ yarn dev
```

The project is on this adress : http://localhost:8080/

### BackEnd :

Launch the front-End like previously
go to the back-end directory :

```
$ cd JonathanChosson_13_13062022-/server
```

# Install dependencies

npm install

# Start local dev server

npm run dev:server

# Populate database with two users

npm run populate-db

```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs


<img src='https://img.shields.io/badge/Autor-Chosson Jonathan-blue' />

## Licence

<img src='https://forthebadge.com/images/badges/open-source.svg' />

## Build with

<img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
<img alt="Docker" src="https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white"/>
```
