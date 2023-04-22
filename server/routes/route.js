import express from 'express';


import { getNews, getVideos } from '../controller/news-controller.js';
const route = express.Router();

route.get('/news', getNews);
route.get('/videos',getVideos);

export default route;