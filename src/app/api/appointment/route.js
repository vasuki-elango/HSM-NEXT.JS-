import connectDatabase from "../../../../config/db";
import AppointmentModel from "../../../../models/AppointmentSchema";

export async function POST(req){
    try{
        connectDatabase();
        const {firstName, lastName, email, phoneNumber, date, time, department, doctor, status, reason} = await req.json()
        const appointment = new AppointmentModel({
            firstName,
            lastName,
            email,
            phoneNumber,
            date,
            time,
            department,
            doctor,
            status,
            reason
        })
        await appointment.save()
        return Response.json({message:"Success"})

    }
    catch(err){
        return Response.json({message:err.message})
    }
}