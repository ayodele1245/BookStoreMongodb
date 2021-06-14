const Book= require('../models/bookModel.js');

exports.getAllBooks=async(req, res, next)=>{
    const books= await Book.find({createdBy: req.user.id});
    res.status(200).json(books);
};

exports.postBook=async(req, res, next)=>{
    const newBook= new Book(req.body);
    newBook.createdBy=req.user.id;
    try{
        const book= await newBook.save();
        res.status(201).json(book);
    }catch(error){
        error.status=400;
        next(error);
    }
};


exports.getBookById=async(req, res, next)=>{
    const {bookId}= req.params;
    try{
    const book= await Book.findById(bookId);
    res.status(200).json(book)
    }catch(error){
        error.status=400;
        next(error);
    }
}




exports.updateBook=async(req, res, next)=>{
const {bookId}=req.params;
    try{
await Book.findByIdAndUpdate(bookId, req.body);
res.status(200).json({success:true});
    }catch(error){
        error.status=400;
        next(error);
    }
}


exports.deleteBook=async(req, res, next)=>{
    const {bookId}=req.params;
    try{
await Book.findByIdAndDelete(bookId);
res.status(200).json({success:true});
    }catch(error){
        error.status=400;
        next(error);
    }
}
