# Express Simple Server

This is a simple server using Express.js. It has a single route that returns a JSON object.

## Installation

1. Clone the repository
2. Duplicate the `.env.example` file and rename it to `.env`
3. Run `npm install` to install the dependencies
4. Run `npm start` to start the server

## Usage

The server will be running on `http://localhost:3000`.
Get a valid token:

```bash
curl --request POST \
  --url https://xpto.us.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"supersecret","client_secret":"supersecret","audience":"https://xpto","grant_type":"client_credentials"}'
```

Use the token to access the server:

```bash
curl --request GET \
  --url http://localhost:3000/countries \
  --header 'authorization Bearer <TOKEN>'
```

Or in a single command:

```bash
curl --request GET \
  --url http://localhost:3000/countries \
  --header 'authorization Bearer $(curl --request POST --url https://xpto.us.auth0.com/oauth/token --header 'content-type: application/json' --data '{"client_id":"supersecret","client_secret":"supersecret","audience":"https://xpto","grant_type":"client_credentials"}' | jq -r '.access_token')'
```
