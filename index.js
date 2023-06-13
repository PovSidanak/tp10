const express = require('express')
const app = express()
const port =3000
const mongoose = require("mongoose")
const userRouter = require('./src/router/user')

//mongodb://localhost:27017/TP9
const connectDB = async()=>{
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/TP9');
    console.log("CONNECTED");
  } catch(error) {
      console.log("SOMETHING WRONG!");
      console.log(error);
    }

}


connectDB()
app.get('/', (req, res) => {
  res.sendFile("./src/template/index.html",{root:'./'})
})

app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Server run sucessfully on http://localhost:${port}`)
})