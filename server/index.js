import express from "express";
import dotenv from "dotenv"
import Connection from "./database/db.js"
import routes from "./router/router";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())



app.use("/",routes);





dotenv.config();

const PORT = 5000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);
app.listen(PORT,() => console.log(`Server successfully connect port on ${PORT}`))