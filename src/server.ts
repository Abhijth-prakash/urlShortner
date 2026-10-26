
import express from "express";
import urlRoutes from '../src/routes/url.js'
import connect from '../src/db/db.js'

const app = express();
app.use(express.json());
app.use('/url',urlRoutes)

const MONGO_URI = "mongodb://127.0.0.1:27017/urlshortener";



await connect(MONGO_URI)

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
