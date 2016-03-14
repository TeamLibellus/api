Libellus API
============

An API used by the libellus project to retrieve classes and teacher rating for CSULB.

## Features

* Retrieve all classes for a given subject and, optionally, the term (Spring, Winter ...).
* Retrieve all subjects available.
* Retrieve all term available.

## Installation

* Clone the present depot.
* Perform `npm install` to install dependencies.
* Perform `node server.js` to start the API server.

## Endpoints

* `GET /subjects/`: Return all available subjects
* `GET /terms/`: Return all available terms
* `GET /subjects/:subjectid/classes?term=:termId`: Return all available classes for the given subject/term
* `POST /auth/local` `{email, password}`: returns the user info and the JWT representing the current session
* `POST /users` `{username, email, password}`: returns the newly created user info and the JWT representing the current session
* `GET /users/me`: return the info of the current connected user


## Auth

To authenticate a request to server, generate a JWT token by login in with `POST /auth/local` and set the `Authorization` header of your HTTP request to `JWT {TOKEN}`.

## Credits

Project created by [Jeremy Bernard](https://github.com/BernardJeremy), [Guillaume Besson](https://github.com/geekuillaume) and [Adrien Morel](https://github.com/Sevauk)
