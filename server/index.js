import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import Route from './routes/route.js';
import NewsData from './default.js';
import VideosData from './videodefault.js';



const app = express();



app.use(cors());
app.use('/', Route);



const PORT = 8003;
Connection();
app.listen(PORT, () => console.log(`server started at port no ${PORT}`))

NewsData();
VideosData();