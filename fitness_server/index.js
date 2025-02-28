const express = require('express');

const cors = require('cors');

const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser')

require('dotenv').config()

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const port = process.env.PORT || 5000;

const app = express()


app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

app.use(express.json())

app.use(cookieParser())





const varifyToken = (req, res, next) => {
    const token = req?.cookies?.token
    console.log('inside varify middlewre tokne');

    if (!token) {
        return res.status(401).send({ message: 'Unauthorized access' })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized access' })
        }
        req.user = decoded
        next()
    })

}





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.b7lw2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!")




        const newsletterSubscribeCollection = client.db('last_assignment').collection('newsletter_subscribe')
        const userCollection = client.db('last_assignment').collection('users')
        const reviewCollection = client.db('last_assignment').collection('review')
        const trainerCollection = client.db('last_assignment').collection('trainer')
        const packagesCollection = client.db('last_assignment').collection('subscription')



        // PACKAGES DATA

        app.post('/packages', async (req, res) => {
            const data = req.body
            const result = await packagesCollection.insertOne(data)
            res.send(result)
        })




        app.get('/packages', async (req, res) => {
            const result = packagesCollection.find()
            const result2 = await result.toArray()
            console.log(result2);
            res.send(result2)
        })




        // NEWS LETTER SEBSCRIBE DATA
        app.post('/newsletter-subscribe', async (req, res) => {
            const data = req.body
            const result = await newsletterSubscribeCollection.insertOne(data)
            res.send(result)
        })



        app.get('/newsletter-subscribe', async (req, res) => {
            const result = await newsletterSubscribeCollection.find().toArray()
            res.send(result)
        })




        // USERS DATA
        app.post('/users', async (req, res) => {
            const user = req.body

            const query = { email: user.email }
            const existingUser = await userCollection.findOne(query)
            if (existingUser) {
                return res.send({ message: 'user already taken', insertedId: null })
            }

            const result = await userCollection.insertOne({ user, role: 'member', timestamp: Date.now() })
            res.send(result)
        })



        app.get('/users', async (req, res) => {
            const result = await userCollection.find().toArray()
            res.send(result)
        })



        app.get('/user/role/:email', async (req, res) => {
            const email = req.params.email
            const query = { email: email };
            const result = await userCollection.findOne(query)
            res.send({ role: result?.role })
        })





        // REVIEW DATA
        app.post('/review', async (req, res) => {
            const review = req.body
            const result = await reviewCollection.insertOne(review)
            res.send(result)
        })


        app.get('/review', async (req, res) => {
            const result = await reviewCollection.find().toArray()
            res.send(result)
        })








        // TRAINER DATA
        app.post('/trainer', async (req, res) => {
            const data = req.body
            const result = await trainerCollection.insertOne(data)
            res.send(result)
        })



        app.get('/trainer', async (req, res) => {
            const result = await trainerCollection.find().toArray()
            res.send(result)
        })



        app.get('/trainer/:id', async (req, res) => {
            const id = req.params
            const query = { _id: new ObjectId(id) }
            const result = await trainerCollection.findOne(query)
            res.send(result)
        })



        app.delete('/trainer/:id', async (req, res) => {
            const id = req.params
            const query = { _id: new ObjectId(id) }
            const result = await trainerCollection.deleteOne(query)
            res.send(result)
        })












        // AUTH RELATED API
        app.post('/jwt', async (req, res) => {
            const user = req.body
            const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' })
            res
                .cookie('token', token, {
                    httpOnly: true,
                    secure: false
                })
                .send({ success: true })
        })




    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);





app.get('/', async (req, res) => {
    res.send('fitness server ins running')
})


app.listen(port, () => {
    console.log(`FITNESS SERVER IS RUNNING ON PORT ${port}`);
})