This is a Node API using Express with a MongoDB database and Jest for testing.

Prerequisites:

- You must have node installed on your machine.
- You must have MongoDb installed with a database named todos and two collections named todos and visitorsCounter.
- Use the json data in todos.json to populate the todos collection.
- Use the json data in visitorsCounter.json to populate the visitorsCounter collection.

Get the API running:

- Clone this repo.
- Run npm install in the terminal from the root of the project.
- Run nodemon start.js in the terminal from the root of the project.
- The API should now be running on localhost:3000.
- Use any of the routes detailed below to test and use the API. The Postman App is very useful for experimenting with API endpoints.# node.js_express


Running the Tests

Run npm run test


API ENDPOINTS (ROUTES)
Get all todos
Returns json data about all of the todos in the todos collection.

URL

/todos

Method:

GET

URL Params

Required:

None

Data Params

None

Success Response:

Code: 200
Content:
{
    "msg": "worked",
    "data": [
        [
            {
                "_id": "64367673f2d39995234b2a34",
                "name": "buy cookies",
                "completed": true
            },
            {
                "_id": "64367948f2d39995234b2a35",
                "name": "buy bread",
                "completed": true
            },
            {
                "_id": "64367964f2d39995234b2a36",
                "name": "clean house",
                "completed": true
            },
            {
                "_id": "6436797ef2d39995234b2a37",
                "name": "meditate",
                "completed": false
            },
            {
                "_id": "643679aaf2d39995234b2a38",
                "name": "take vitamins",
                "completed": true
            }
        ]
    ],
    "status": 200
}


(to be continued)
