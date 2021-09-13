
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/posts.js"

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())


app.use(cors());
app.use('/posts', router);

const CONNECTION_URL = 'mongodb+srv://ENithesh:LG5uPVaQ6FNZXtSr@cluster0.murwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';










const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);

// app.use('/posts', router)

