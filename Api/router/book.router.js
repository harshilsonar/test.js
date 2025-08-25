const bookcontroller = require("../controller/book.controller")
const express = require("express")


const bookrouter = express.Router()

bookrouter.get("/test",bookcontroller.test)
bookrouter.post("/createbooks",bookcontroller.create)
bookrouter.get("/getallbooks",bookcontroller.getallBooks)
bookrouter.get("/bookbyid/:bookid",bookcontroller.getbyid)
bookrouter.delete("/deletebook/:bookid",bookcontroller.delete)
bookrouter.patch("/updates",bookcontroller.updatestatus)

module.exports = bookrouter
