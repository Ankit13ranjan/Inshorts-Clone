import news from "../model/news-schema.js"
import videoData from "../model/videos-schema.js";

export const getNews = async (request, response) => {
    let data;
    try {
        let data = await news.find({});
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json({ message: data.message });
    }
}


export const getVideos = async (request, response) => {
    let data;
    try {
        let data = await videoData.find({});
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json({ message: data.message });
    }
}