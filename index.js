const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')
const JsonResponseService = require('./Services/JsonResponseService')
const DbService = require('./Services/DbService')
const VisitCounterMiddleware = require('./Middleware/VisitCounterMiddleware')

const app = express()
const port = 3000

const url = "mongodb://root:password@localhost:27017"

app.use(express.json())
app.use(VisitCounterMiddleware)

app.get('/todos', async (req, res) => {

    let queryFilter = {}

    if('completed' in req.query) {
        queryFilter.completed = req.query.completed == 'true' ? true : false
    }

    const collection = await DbService('todos')
    let data = await collection.find(queryFilter).toArray()
    let response = JsonResponseService('worked', [data], 200)
    res.json(response)

})

// edit existing document task field and mark as completed based on objectId
app.put('/todos', async (req, res) => {
    let task = req.body.task
    let id = new ObjectId(req.body.id)

    let strRegex = /^[a-z ,.'-]+$/

    if(!strRegex.test(task)) {
        return res.json({msg: "it has failed validation"})
    }

    let editedTask = {completed: true}

    if('task' in req.body) {
        editedTask.task = req.body.task
    }

    const connection = await MongoClient.connect(url)
    const db = connection.db('todos')
    const collection = db.collection('todos')
    const data = await collection.updateOne({_id: id}, {$set: editedTask})
    if(data.modifiedCount !== null) {
        res.json({msg: "its worked and updated your record"})
    } else {
        res.json({msg: "its not worked and not updated your record"})
    }
})

//delete existing document (forever!!) based on objectId
app.delete('/todos', async (req, res) => {
    let id = new ObjectId(req.body.id)

    const connection = await MongoClient.connect(url)
    const db = connection.db('todos')
    const collection = db.collection('todos')
    const data = await collection.deleteOne({_id: id})
    res.json(data)
})

app.listen(port)

