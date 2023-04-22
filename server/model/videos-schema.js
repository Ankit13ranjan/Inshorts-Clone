import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    url:{
        type : String,
        require : true
    },
    title:{
        type : String,
        require : true
    },
    src:{
        type : String,
        require : true
    }
});

const videoData = mongoose.model('videoData', videoSchema);

export default videoData;