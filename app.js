const express =require('express');
const mongoose =require('mongoose')
mongoose.set('useCreateIndex', true);

const app=express();
const port=process.env.port || 3000;
const {MONGODB} = require('./config.js');
const userRoutes=require('./routes/userRoute.js')
const bookRoutes=require('./routes/bookRoute.js')
const auth= require('./middleware/auth.js')

app.use(express.json());


app.use('/api/books', auth, bookRoutes);
app.use('/api/users', userRoutes);


//handle error for routes that are not defined
app.use((req, res, next)=>{
    const err=new Error('not found');
    error.status=404;
    next(err);
}) 

//error handling function for token
app.use((err, req, res, next)=>{
    const status =err.status || 500;
    res.status(status).json({error:{message:err.message}});
});

//app.get('/', (req, res, next)=>res.end('welcome!!!'));
 
//connect to mongoose
mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})

//to start server only after successful connection
.then(()=>{console.log('connected to mongoDB')
})
.then(()=>console.log(`server running at ${port}`))
.catch(err=>console.log(err.message))

app.listen(port, ()=>{
    console.log(`server connected at http://localhost:${port}`)
});