const mongoose = require("mongoose");

const bookschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "uncatgorized",
    },
    image: {
      type: String,
      default:
        "https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg",
    },
    status: {
      type:String,
    },
    dataofissue:{
      type:Date,
      default:Date.now()
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Bookmodel = mongoose.model("book", bookschema);

module.exports = Bookmodel;
