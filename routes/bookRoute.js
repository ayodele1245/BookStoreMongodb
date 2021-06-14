const express= require('express');
const router=express.Router();

const bookController= require('../controllers/bookController');

router.route('/')
.get(bookController.getAllBooks)
.post(bookController.postBook);

router.route('/:bookId')
.get(bookController.getBookById)
.put(bookController.updateBook)
.delete(bookController.deleteBook)

module.exports=router;