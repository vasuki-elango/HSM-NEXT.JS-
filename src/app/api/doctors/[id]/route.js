import connectDatabase from "../../../../../config/db";
import DoctorModel from "../../../../../models/DoctorSchema";

export async function GET(req,{params}){
    try{
        connectDatabase();
        const PostData = await DoctorModel.findById({_id:params.id})
        return Response.json(PostData)
    }
    catch(err){
        return Response.json({message:err.message})
    }
}