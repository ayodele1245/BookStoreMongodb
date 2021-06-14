const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const bookSchema=new Schema({
    title:{type:String, required:true},
    author:{type:String, required:true},
    publisher:{type:String, required:true},
    no_Of_Pages:{type:Number, required:true},
    checked:{type:Date, default:Date.now}
});


module.exports=mongoose.model('book', bookSchema);