const DbService = require('../Services/DbService')
const { ObjectId } = require('mongodb')

const VisitCounterMiddleware = async (req,res, next) => {
    let collection = await DbService('visitorsCounter')
    let visitorObj = await collection.findOne({})


    //update that object that you retreived and set the value of count to one more than it already is
    const counterFunction = await collection.updateOne(visitorObj,{ $inc:  { count: 1 }})

    next()

}

module.exports = VisitCounterMiddleware