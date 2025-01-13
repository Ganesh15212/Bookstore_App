
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
// const dotenv=require("dotenv")
const connectDB=require("./config/db.js")

const bookRoute=require("./route/book.route.js")
const userRoute=require("./route/user.route.js")


const app = express();

app.use(cors());
app.use(express.json());

app.use(bookRoute);
app.use(userRoute);

// dotenv.config();
connectDB();
const PORT=4000;
// const PORT = process.env.PORT || 4000;
;



// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});