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

### `GET /subjects/`

Returns all available subjects

Example:
```json
[
  {
    "id": 1,
    "name": "Computer Engr & Computer Sci",
    "code": "CECS",
    "createdAt": "2016-01-18T01:53:03.567Z",
    "updatedAt": "2016-01-18T01:53:03.567Z"
  }, {
    "id": 2,
    "name": "Accountancy",
    "code": "ACCT",
    "createdAt": "2016-01-19T03:30:42.888Z",
    "updatedAt": "2016-01-19T03:30:42.888Z"
  }
]
```

### `GET /terms`

Returns all available terms

Example:
```json
[
  {
    "id": 1,
    "name": "Spring 2016",
    "createdAt": "2016-01-18T01:53:03.555Z",
    "updatedAt": "2016-01-18T01:53:03.555Z"
  }
]
```

### `GET /subjects/:subjectid/classes?term=:termId`

Returns all available classes for the given subject/term

Example:
`GET /subjects/1/classes?term=1`
```json
[
  {
    "id": 265,
    "name": "Microprocessors and Controllers I",
    "code": "346",
    "slot": "8447",
    "room": "ECS  Room 411",
    "section": "04-LAB",
    "time": [
      {
        "day": "Mon",
        "start": "18:30",
        "end": "19:45"
      },
      {
        "day": "Wed",
        "start": "18:30",
        "end": "19:45"
      }
    ],
    "description": "Prerequisites: CECS 211 and 262 all with a grade of \"C\" or better. Introduction to microprocessor, micro controller and embedded system programming and design. Basic computer organization and assembly language programming. Introduction to assemblers, linkage editors and loaders. In-depth study of the 8051 microprocessor. Design of microprocessor-based systems to solve practical problems. (Lecture 2 hours, laboratory 3 hours.) Letter grade only (A-F). Effective Fall 2012.",
    "enrollment": 1,
    "capacity": 1,
    "detailsUpdatedAt": "2016-01-20T02:37:25.807Z",
    "createdAt": "2016-01-19T01:52:25.112Z",
    "updatedAt": "2016-01-20T13:19:44.155Z",
    "subjectId": 1,
    "termId": 1,
    "teacherId": 52,
    "subject": {
      "id": 1,
      "name": "Computer Engr & Computer Sci",
      "code": "CECS",
      "createdAt": "2016-01-18T01:53:03.567Z",
      "updatedAt": "2016-01-18T01:53:03.567Z"
    },
    "term": {
      "id": 1,
      "name": "Spring 2016",
      "createdAt": "2016-01-18T01:53:03.555Z",
      "updatedAt": "2016-01-18T01:53:03.555Z"
    },
    "teacher": {
      "id": 52,
      "name": "Eric Hernandez",
      "rate": 4.2,
      "rateLink": "http://www.ratemyprofessors.com/ShowRatings.jsp?tid=837374",
      "rateLastUpdated": "2016-03-15T03:45:23.912Z",
      "createdAt": "2016-01-19T01:52:24.412Z",
      "updatedAt": "2016-03-15T03:45:23.912Z"
    }
  }
]
```

### `POST /auth/local`

Returns the user info and the JWT representing the current session

Example:

`POST /auth/local`
*Body:*
```json
{
  "email": "test@test.com",
  "password": "test"
}
```
*Response*
```json
{
  "authToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiaWF0IjoxNDU4MDY2MDQ3fQ.1zCSbOuVOc-GjL2J49MdO7V7M0ZYQGsQDN8xDzIp9BU"
}
```

### `POST /users`

Returns the newly created user info and the JWT representing the current session

Example:

`POST /users`
*Body*
```json
{
    "username": "test2",
    "email": "test2@test.com",
    "password": "test2"
}
```
*Response*
```json
{
  "authToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwiaWF0IjoxNDU4MDY2MTg0fQ.7iW9uaXmf0lI2D7gNCPEK2y-metp1Eup9XS7loTPzvM",
  "user": {
    "id": 6,
    "username": "test2",
    "email": "test2@test.com",
    "updatedAt": "2016-03-15T18:23:04.199Z",
    "createdAt": "2016-03-15T18:23:04.199Z"
  }
}
```

### `GET /users/me`

Return the info of the current connected user

Example:

`GET /users/me`
*HTTP Headers*
```
Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwiaWF0IjoxNDU4MDY2MTg0fQ.7iW9uaXmf0lI2D7gNCPEK2y-metp1Eup9XS7loTPzv
```
*Response*
```json
{
  "id": 6,
  "username": "test2",
  "email": "test2@test.com",
  "updatedAt": "2016-03-15T18:23:04.199Z",
  "createdAt": "2016-03-15T18:23:04.199Z"
}
```

## Auth

To authenticate a request to server, generate a JWT token by login in with `POST /auth/local` and set the `Authorization` header of your HTTP request to `JWT {TOKEN}`.

## Credits

Project created by [Jeremy Bernard](https://github.com/BernardJeremy), [Guillaume Besson](https://github.com/geekuillaume) and [Adrien Morel](https://github.com/Sevauk)
