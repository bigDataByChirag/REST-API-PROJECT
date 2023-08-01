const express = require("express");
const connectDb  = require("./db/conn");
const router = require("./routers/men");


const app = express();

connectDb();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);


app.listen(port, ()=> {
    console.log(`Connection established succesfully on port ${port}`);
});