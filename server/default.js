import { data } from "./constants/data.js"
import News from './model/news-schema.js'

const NewsData = async () => {
    try {
        await News.insertMany(data);
        console.log("Data inserted successfully");
    }
    catch (error) {
        console.log('Error', error.message)
    }
}
export default NewsData;

