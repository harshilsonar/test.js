const Bookmodel = require('../models/book.model')


const bookcontroller={
     test: (req, res) => {
    res.status(201).json({ message: "Test routes Working" });
  },
    create: async(req, res)=>{
        const {title, author, category, content} =req.body
        if(!title || !author|| !category || ! content)
        {
            return   res.status(404).json("fill up all fields")
        }

        try {
            await Bookmodel.create({...req.body})
            res.status(201).json("book is created")
            
        } catch (error) {
            res.status(404).json({message:error.message||"books is not create due to some err"})
        }
  },
 getallBooks: async(req,res)=>{
      
      try {
        const isExistbook = await Bookmodel.find()  
      res.status(200).json({message:"book fetched",isExistbook});
      } catch (error) {
      console.error("Error Fetching Note", error);
      res.status(500).json({ message: error.message || "Internal server Error" });
    }
  },
  getbyid: async(req,res)=>{
    const {bookid} = req.params
   const isExistbook = await Bookmodel.find({bookid})
   if(!isExistbook)
   {
    res.status(200).json({message:"book not found"})
   }
   try {
    const book = await Bookmodel.findById({bookid})
  res.status(200).json({message:"book is found",book})
   } catch (error) {
        res.status(500).json({message:"book not found by id"})
   }


  },
  delete: async(req,res)=>{
    const {bookid} = req.params
   const isExistbook = await Bookmodel.find({bookid})
   if(!isExistbook)
   {
    res.status(200).json({message:"book not found"})
   }
   try {
    const book = await Bookmodel.findById(bookid)
    res.status(200).json({message:"book is delete",book})
   } catch (error) {
        res.status(500).json({message:"book is not delete"})
   }
  },

  updatestatus:async(req, res)=>{
       const{bookid}=req.params
       const{status}=req.body

       if(!status){
        return res.status(404).json({message:"status is not find"})
       }
       const isExistbook = await Bookmodel.find({bookid})
       if(!isExistbook){
        res.status(501).json({message:"book is not found"})
       }
       try {
        const updatebook = await Bookmodel.findByIdAndUpdate(id,{status},{new:true})
       res.status(404).json({message:"book update successfully"},updatebook)
       } catch (error) {
        res.status(501).json({message:"book is not update"})
       }
  },

  

  
}

module.exports=bookcontroller