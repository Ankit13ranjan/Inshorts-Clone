import videoData from "./model/videos-schema.js"
import { videodata } from "./constants/videodata.js"


const VideosData = async () => {
    try {
        await videoData.insertMany(videodata);
        console.log("Data inserted successfully");
    }
    catch (error) {
        console.log('Error', error.message)
    }
}

export default VideosData;
