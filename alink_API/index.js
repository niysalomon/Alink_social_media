const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/Users");
const authRoute = require("./routes/Auth");
const postsRoute = require("./routes/Posts");

dotenv.config();


mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},() =>{
console.log("Database connected")
});


// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postsRoute)

app.get("/",(req,res) => {
res.send("data has sent to home page")
});

app.listen(8800,()=>{
    console.log("server is running!!")
})