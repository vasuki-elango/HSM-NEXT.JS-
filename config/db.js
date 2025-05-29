import mongoose from "mongoose";

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('Database Connected')
        })
        .catch((err)=>{
            console.log('Connect failed'+err);
        })
}

export default connectDatabase;