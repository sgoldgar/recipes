const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    console.log('found file')
    try {
        const database = (await clientPromise).db('PersonalSite');
        const collection = database.collection('Restaurants');
        const allRestaurants = await collection.find({}).toArray();
        return {
            body: JSON.stringify(allRestaurants),
            statusCode: 200
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }