import mongoose from "mongoose";

const ConnectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log("MongoDB Connection Error : ", error);
        process.exit(1);
    }
};

export {ConnectDB};

