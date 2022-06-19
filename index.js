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

app.post("/tweets", (request, response) => {
    const body = request.body;
    const {username, tweet} = body;
    const {avatar} = users.find(user => user.username === username);
    tweets.push({
        username,
        avatar,
        tweet
    })
    response.send("Ok");
})

app.get("/tweets", (request, response) => {
    if(tweets.length <= 10){
        response.send([...tweets].reverse());
    } else {
        response.send([...tweets].reverse().splice(0, 10));
    }
})

app.listen(5000)
