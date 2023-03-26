const express = require("express");
const cors = require("cors")
const path = require("path");
const bodyParser = require("body-parser");
const User = require("./model/user.js")
const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

const connectDB = require("./db/mongoose.js");
connectDB();


app.post("/user/create", async(req,res)=>{
    const {
        name,
        email,
        contact,
        date
      } = req.body;
      console.log(req.body);
      const user = new User({
        name,
        email,
        contact,
        date
      });
      try{
        await user.save();
        res.status(201).json({message: "new user created" });
      }
      catch(e){
        res.send(e);
      }
})

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on ${port}`))
