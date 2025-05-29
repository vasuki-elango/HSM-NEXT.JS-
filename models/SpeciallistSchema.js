import { model, models, Schema } from "mongoose";

const SpeciallistSchema = new Schema({
    name:String
})

const SpeciallistModel = models.User || model('Speciallist',SpeciallistSchema)

export default SpeciallistModel