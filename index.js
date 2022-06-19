import cors from "cors";
import express, {json} from "express";

const app = express();
app.use(json());
app.use(cors());

const tweets = [];
const users = [];

app.post("/sign-up", (request, response) => {
    const body = request.body;
    users.push(body);
    response.send("Ok");
})

app.listen(5000)
