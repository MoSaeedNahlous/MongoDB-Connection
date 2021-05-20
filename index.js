const express = require('express')

const mongoose = require('mongoose')

const bodyParser=require('body-parser');
const cors = require('cors')
const router = require('./routers/appRouter')
const personRouter = require('./routers/personRouter')



const app = express()



mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use('/app', router);
app.use('/persons', personRouter)


//get request on url : / 
app.get('/', (req,res) => {
    res.send("Hello World").status(200)
    console.log("Hello World")
    
})


var mongoDB = 'mongodb+srv://admin:admin@cluster0.bgl7c.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-w0wzsn-shard-0&w=majority&readPreference=primary&appname=mongodb-vscode%200.5.0&retryWrites=true&ssl=true';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected");
}).catch(err => {
    console.log(err)
})


app.listen(3000, () => {
    console.log("Listening to port 3000!")
})