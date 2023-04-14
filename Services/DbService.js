const {MongoClient} = require("mongodb")

const url = "mongodb://root:password@localhost:27017"

const DbService = async (collectionToConnectTo) => {
    const connection = await MongoClient.connect(url)
    const db = connection.db('todos')
    return db.collection(collectionToConnectTo)
}

module.exports = DbService