const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();  // Ensure .env is loaded for local testing

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Environment variables for DB credentials
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

if (!DB_USER || !DB_PASSWORD) {
  console.error('Missing DB_USER or DB_PASSWORD environment variables');
  process.exit(1);
}

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@jobdemo1.jw9veev.mongodb.net/?retryWrites=true&w=majority&appName=jobdemo1`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let jobsCollections;
let usersCollection;

async function run() {
  try {
    await client.connect();
    const db = client.db("mernJobPortal");
    jobsCollections = db.collection("demoJobs");
    usersCollection = db.collection("users");

    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

run().catch(console.dir);

// POST job
app.post("/post-job", async (req, res) => {
  try {
    if (!jobsCollections) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    const body = req.body;
    body.createAT = new Date();
    const result = await jobsCollections.insertOne(body);

    if (result.acknowledged) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json({ message: "Failed to insert job", status: false });
    }
  } catch (err) {
    console.error("Error in POST /post-job:", err);
    return res.status(500).json({ message: "An error occurred", status: false });
  }
});

// Register user
app.post("/register-user", async (req, res) => {
  try {
    if (!usersCollection) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    const user = req.body;
    const result = await usersCollection.insertOne(user);

    if (result.acknowledged) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json({ message: "Failed to register user", status: false });
    }
  } catch (err) {
    console.error("Error in POST /register-user:", err);
    return res.status(500).json({ message: "An error occurred", status: false });
  }
});

// Login user
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!usersCollection) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (password === user.password) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    console.error('Error in POST /login:', err);
    return res.status(500).json({ message: 'An error occurred', status: false });
  }
});

// GET all jobs
app.get("/all-jobs", async (req, res) => {
  try {
    if (!jobsCollections) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    const jobs = await jobsCollections.find().toArray();
    res.status(200).json(jobs);
  } catch (err) {
    console.error("Error in GET /all-jobs:", err);
    res.status(500).json({ message: "An error occurred", status: false });
  }
});

// Test MongoDB connection
app.get("/test-connection", async (req, res) => {
  try {
    await client.db("admin").command({ ping: 1 });
    res.status(200).send("MongoDB connection successful");
  } catch (err) {
    console.error("Error in /test-connection:", err);
    res.status(500).json({ message: "MongoDB connection failed", status: false });
  }
});

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log("Closing MongoDB client...");
  await client.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log("Closing MongoDB client...");
  await client.close();
  process.exit(0);
});
