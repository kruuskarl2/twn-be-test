## Setup and running the project

Install dependencies:

```
npm install
```

Add .env file to root directory and define a mongoDB connection string, for example:

```
CONNECTION_STRING="mongodb+srv://<username>:<password>@cluster0.zwi9q4y.mongodb.net/?retryWrites=true&w=majority"
```

Run it:

```
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
