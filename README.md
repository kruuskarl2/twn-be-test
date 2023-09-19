## Setup and Running the Project

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

## API Endpoints

### GET /resident-register

Returns all residents in the database. Not needed for exercise, but added it for testing purposes.

### GET /resident-register/industry-change-applications

Returns applications according to request. Expects two query parameters:

```
{
    residentSub: string;
    statuses:string[]
}
```

Statuses array derives from values separated by commas. For example:

```
/resident-register/industry-change-applications?residentSub=resident1&statuses=IN_REVIEW,APPROVED
```

### GET /resident-register/industry-change-applications/:id

Returns an application according to requested id. Id must be MongoDB objectID: https://www.mongodb.com/docs/manual/reference/method/ObjectId/

### POST /resident-register/industry-change-applications

Creates new industry change applications.

Body DTO:

```
{
    residentSub: string;
    willWorkInPhysicalJurisdiction: Boolean;
    industry: Industry;
    regulatoryElection: RegulatoryElection;
    regulatoryElectionSub: string;
}
```

### DELETE /resident-register/industry-change-applications/:id

Logically deletes an application according to requested id. Id must be MongoDB objectID: https://www.mongodb.com/docs/manual/reference/method/ObjectId/
