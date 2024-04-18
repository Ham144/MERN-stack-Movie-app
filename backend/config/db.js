import mongoose from "mongoose";

const connnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Successfully connected to db")
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

export default connnectDB