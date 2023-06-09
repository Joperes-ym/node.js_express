This is a To Do Node API using Express with a MongoDB database and Jest for testing.

**Prerequisites:**

1. You must have node installed on your machine.
2. You must have MongoDb installed with a database named `todos` and a collection named `todos`.
3. Use the json data in `todos.json` to populate the `todos` collection.

**Get the API running:**

1. Clone this repo.
2. Run `npm install` in the terminal from the root of the project.
3. Run `nodemon start.js` in the terminal from the root of the project.
4. The API should now be running on [localhost:8000]('[http://localhost:8000/biscuits](http://localhost:8000/biscuits)').
5. Use any of the routes detailed below to test and use the API. The [Postman App]('[https://www.getpostman.com/](https://www.getpostman.com/)') is very useful for experimenting with API endpoints.

**Running the Tests**

Run `npm run test`

# API ENDPOINTS (ROUTES)

**Get all todos**
---
Returns json data detailing all of the todos in the `todos` collection.
* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
	  None

* **Data Params**

    None
    
* **Success Response:**

    **Content:**
    ```
    {
    "msg": "relevant tasks displayed",
    "data": [
        {
            "_id": "[OBJECT ID]",
            "task": "[TODO NAME]",
            "details": "[TODO DETAILS]",
            "completed": [BOOLEAN],
            "priority": "[HIGH / MEDIUM / LOW]"
        },
        {
            "_id": "[OBJECT ID]",
            "task": "[TODO NAME]",
            "details": "[TODO DETAILS]",
            "completed": [BOOLEAN],
            "priority": "[HIGH / MEDIUM / LOW]"
        }
      ],
    "status": 200
  }

**Get completed/uncompleted or high/medium/low priority todos**
---
Returns json data detailing all of the todos in the `todos` collection that are either completed/not completed/high, medium or low priority (and combinations of those).
* **URL**

/todos?completed=true

/todos?completed=false

/todos?priority=low

/todos?priority=medium

/todos?priority=high

* **Method:**

  `GET`
  
* **Success Response:**

    **Content:**
    ```
    {
    "msg": "relevant tasks displayed",
    "data": [
        {
            "_id": "[OBJECT ID]",
            "task": "[TODO NAME]",
            "details": "[TODO DETAILS]",
            "completed": [BOOLEAN],
            "priority": "[HIGH / MEDIUM / LOW]"
        },
        {
            "_id": "[OBJECT ID]",
            "task": "[TODO NAME]",
            "details": "[TODO DETAILS]",
            "completed": [BOOLEAN],
            "priority": "[HIGH / MEDIUM / LOW]"
        }
      ],
    "status": 200
  }


**Add new todo**
----
  Creates new document in the todos collection, returns json data with success message.Validates input via a bespoke REGEX via a 
  validate service.
 
* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
	  None

* **Data Params**

  `{"task":"take over the world","details":"world domination","priority":"high"}`
  
  "task": The task name (string which is validated via the validation service)
  
  "details": The task details (string which is validated via the validation service)
  
  "priority": Can be rated as high, medium or low priority.
  
  All new tasks are automatically assigned a completed status of false when instantiated. 

* **Success Response:** <br />
  **Content:** 
  ```
  {
    "msg": "task successfully added",
    "data": [],
    "status": 200
  }
  ```
  
 * **Error Response:** <br />
  **Content:** 
  ```
  {
    "msg": "did not pass validation, task not added",
    "data": [],
    "status": 406
    }
   ```

**Get todo by ID**
----
  Returns json data about a specific todo via the URL request

* **URL**

 /todos/:id
 
 * **Method:**

  `GET`
 
 *  **URL Params**

   **Required:**
 
 Object _id

* **Data Params**

  None
 
 * **Success Response:**
 
   **Content:** 
  ```
  {
    "msg": "task retrieved",
    "data": [
        {
            "_id": "[OBJET ID]",
            "task": "[TODO NAME]",
            "details": "[TODO DETAILS]",
            "priority": "[HIGH / MEDIUM / LOW]",
            "completed": [BOOLEAN]
        }
    ],
    "status": 200
  }
  ```
  * **Error Response:** <br />
  **Content:** 
  
  ```
  {
    "msg": "It has failed validation",
    "data": [],
    "status": 406
}
```

**Edit todo by ID**
----
  Gives the user the ablity to edit any property of the todo. Validates user input and success/error messages sent as appropriate
  
* **URL**

 /todos
 
 * **Method:**

  `POST`
  
 *  **URL Params**

   **Required:**
 
  None

* **Data Params**

  Task, details, priority, completed - all or some can be provided by the user
  
  * **Success Response:**
 
   **Content:** 
  ```
  {
    "msg": "its worked and updated your record",
    "data": [],
    "status": 200
	}
	```

**Delete todo by ID**
----
  Deletes document from databse via object id 

* **URL**

 /todos
 
 * **Method:**

  `DELETE`
 
 *  **URL Params**

   **Required:**
 
  None

* **Data Params**

  Object _id
 
 * **Success Response:**
 
   **Content:** 
  ```
  {
    "msg": "task deleted successfully",
    "data": [],
    "status": 200
}
```
