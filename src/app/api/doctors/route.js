import connectDatabase from "../../../../config/db";
import DoctorModel from "../../../../models/DoctorSchema";

export async function GET(){
    try{
        connectDatabase();
        const PostData = await DoctorModel.find({})
        return Response.json(PostData)
    }
    catch(err){
        return Response.json({message:err.message})
    }
}