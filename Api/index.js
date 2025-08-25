const express = require("express");
const connect = require("./utils/db");
const dotenv = require("dotenv")

dotenv.config()
app = express()
const cors = require("cors");
const bookrouter = require("./router/book.router");

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use("/api/bookroutes",bookrouter)

app.listen(process.env.PORT,()=>{
    try {
        connect();
        console.log("server is running")
    } catch (error) {
        console.error("internal error",error)
    }
})