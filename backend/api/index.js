import express from 'express';
import cors from 'cors';
import { java } from '../compiler.js';
const app = express();

app.use(cors());
app.use(express.json());

app.listen(8000, (err) => {
    if (!err) {
        console.log("Server initiated at PORT=8000");
    } else {
        console.error("Error starting server:", err);
    }
});

app.post('/api/compile', async(req, res) => {
    if(req.body.lang === 'java'){
        const output = await java(req.body);
        console.log(output);
        res.status(200).send(output)
    }

});


app.get('/yo' , (req,res)=>{
    res.send('YO');
})


app.options('/compile', cors()); // Enable pre-flight request for /compile
