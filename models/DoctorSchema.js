import {Schema, model, models} from 'mongoose'

const DoctorSchema = new Schema({
    image:{
        type:String,
        default:'https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png',
    },
    name:String,
    degree:String,
    department:String,
    experience:String,
    speciallist:[String],
    location:String,
    phoneNumber:String,
    about:String,
    age:Number,
})

const DoctorModel = models.Doctor|| model('Doctor',DoctorSchema)

export default DoctorModel;