# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
## CRUD

- Create: To add new room info, send post request to endpoint: 'api/rooms/:id/roomInfo', where ':id' is the room number for the listing and the data being sent is in JSON format.

- Read: To retrieve room info, send get request to endpoint: 'api/rooms/:id/roomInfo', where ':id' is the room number for the listing.

- Update: To update a current entry, send patch request to endpoint: 'api/rooms/:id/roomInfo', where ':id' is the room number for the listing and the data being being updated is in JSON format.

- Delete: To delete a room info entry, send delete request to endpoint: 'api/rooms/:id/roomInfo', where ':id' is the room number for the listing.
