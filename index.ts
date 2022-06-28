import express from 'express';
import path from "path"

const app: express.Application = express();
const port: number = 3000;

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname+'/../pages/index.html'));
});

app.listen(port, () => {
    console.log(`TypeScript with Express http://localhost:${port}/`);
});