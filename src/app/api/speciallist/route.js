import connectDatabase from "../../../../config/db"
import SpecialListModel from "../../../../models/SpeciallistSchema";

export async function GET() {
    try{
        connectDatabase();
        const list = await SpecialListModel.find({});
        return Response.json(list);
    }
    catch(err){
        return Response.json({message: err.message});
    }
}