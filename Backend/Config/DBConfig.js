import mongoose from "mongoose";

const DBconfig=async()=>{
    try {
        await mongoose.connect('mongodb+srv://Jas-13:123@jasper.cclnzjl.mongodb.net/?retryWrites=true&w=majority')
        console.log("DB connected");
    } catch (error) {
        console.log("couldn't connect DB",error);
    }
}

export default DBconfig;