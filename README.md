# Product Information Microservice

> This is a stand-alone full-stack listing-info microservice modeled after Airbnb's listing-info component. This was created using microservice oriented architecture and is optimized for reads from a PostgreSQL database with 10 million records.

## Microservice Components

  - https://github.com/vacay-io/Reviews-Service
  - https://github.com/vacay-io/Calendar-Service
  - https://github.com/vacay-io/Photo-Carousel-Service
  - https://github.com/vacay-io/Product-Info-Service
  - https://github.com/vacay-io/Booking-Service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [CRUD](#CRUD)

## Usage

> Adjust the final number after ...rooms/ to any room number up to 10,000,000 to retrieve the appropriate listing's information.
> For Example: To retrieve room # 342548 information => http://localhost:3003/rooms/342548

## Technology stack

  - React.js
  - Webpack
  - CSS
  - HTML
  - PostgreSQL
  - Express
  - Node.js
  - Jest
  - Enzyme
  - CircleCI
  - Redis
  - New Relic
  - Siege

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Setup Instructions

From within the root directory:

```sh
1. Clone repo locally
2. Install dependencies: `npm install`
3. To compile: `npm run react-dev`
5. To start your server: `npm start`
6. To run tests: `npm test`
7. Open browser: http://localhost:3003
```

## CRUD

- Create: To add new room info, send post request to endpoint: 'api/rooms/:id/roomInfo', where ':id' is the room number for the listing and the data being sent is in JSON format.

- Read: To retrieve room info, send get request to endpoint: 'api/rooms/:id/roomInfo', where ':id' is the room number for the listing.

- Update: To update a current entry, send patch request to endpoint: 'api/rooms/:id/roomInfo', where ':id' is the room number for the listing and the data being being updated is in JSON format.

- Delete: To delete a room info entry, send delete request to endpoint: 'api/rooms/:id/roomInfo', where ':id' is the room number for the listing.
