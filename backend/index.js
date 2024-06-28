import express from 'express';
import cors from 'cors';
import { java } from './compiler.js';

const app = express();

const corsOptions = {
    origin: "https://compilerpro.vercel.app",
    methods: ["POST", "GET"],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.listen(8000, (err) => {
    if (!err) {
        console.log("Server initiated at PORT=8000");
    } else {
        console.error("Error starting server:", err);
    }
});

app.get("/", (req, res) => {
    res.json("Hello");
})

app.post('/compile', cors(corsOptions), async(req, res) => {
    if(req.body.lang === 'java'){
        const output = await java(req.body);
        console.log(output);
        res.status(200).send(output);
    }
    // else if(req.body.lang === 'cpp'){
    //     cpp(req.body);
    // } else if(req.body.lang === 'python'){
    //     python(req.body);
    // }
});
