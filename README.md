# Request Bucket

This is a Node.js + React web application for debugging webhooks.

## Running server

Create a .env file with the following:

```
PORT=<server_port>
PSQL_HOST=<pg_host_url>
PSQL_PORT=<pg_port>
PSQL_DBNAME=<pg_database_name>
PSQL_USER=<pg_database_user>
PSQL_PWD=<pg_database_password>
MONGODB_URI=<mongodb_url>
```

#### replace anything that has <> with your own credentials:

- `PORT` is the port the server will be running on
- `PSQL_HOST` and `PSQL_PORT` port and hostname for PostgreSQL
- `PSQL_DBNAME` should be the name of the database created on PostgreSQL
- `PSQL_USER` and `PSQL_PWD` - credentials for accessing the PostgreSQL database
- `MONGODB_URI` - URL to connect to MongoDB database

To spin up the Request Bucket server, run `npm run start`.

## Running frontend

`./frontend` contains a React frontend app created with Vite `v4.4.9`.
To spin it up fast locally, use `npm run dev`.
