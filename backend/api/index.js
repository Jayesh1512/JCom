import express from 'express';
import cors from 'cors';
import { java } from '../compiler.js';
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

app.post('/compile', async(req, res) => {
    if(req.body.lang === 'java'){
        const output = await java(req.body);
        console.log(output);
        res.status(200).send(output)
    }

});

app.options('/compile', cors(corsOptions)); // Enable pre-flight request for /compile
