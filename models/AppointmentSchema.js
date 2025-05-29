import {Schema, model, models} from 'mongoose'

const AppointmentSchema = new Schema({
    firstName:String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    date:Date,
    time: String,
    department: String,
    doctor: String,
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    },
    reason: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const AppointmentModel = models.Appointment || model('Appointment', AppointmentSchema)

export default AppointmentModel;