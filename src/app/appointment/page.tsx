"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function AppointmentForm() {
  type Department = { name: string };
  type Doctor = { name: string; department: string };

  const [data, setData] = useState<Doctor[]>([]);
  const [department, setdepartment] = useState<Department[]>([]);
  const [doctor, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/speciallist")
      .then((res) => {
        setdepartment(res.data);
      }).catch((err) => {
        console.log(err);
      })

    const res = axios.get(process.env.NEXT_PUBLIC_API_URL + '/doctors')
    res.then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    date: '',
    time: '',
    department: '',
    doctor: '',
    reason: ''
  })

  const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "department") {
    const filteredDoctors = data.filter((doc) => doc.department === value);
    setDoctors(filteredDoctors);

    setFormData({
      ...formData,
      department: value,
      doctor: "" // reset selected doctor
    });
  } else {
    setFormData({
      ...formData,
      [name]: value
    });
  }
    // setFormData({
    //   ...formData,
    //   [name]: value
    // });
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    axios.post(process.env.NEXT_PUBLIC_API_URL + "/appointment", formData)
      .then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      })

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      date: '',
      time: '',
      department: '',
      doctor: '',
      reason: ''
    })
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6">Book an Appointment</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Row 1: First Name, Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-1 font-medium">First Name</label>
              <input type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handlechange}
                placeholder="Enter first name"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1 font-medium">Last Name</label>
              <input type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handlechange}
                placeholder="Enter last name" className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>

          {/* Row 2: Email, Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handlechange} placeholder="Enter email" className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block mb-1 font-medium">Phone Number</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handlechange} placeholder="Enter phone number" className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>

          {/* Row 3: Date, Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block mb-1 font-medium">Date</label>
              <input type="date" name="date" 
              min={new Date().toISOString().split("T")[0]} 
              value={formData.date} onChange={handlechange} className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label htmlFor="time" className="block mb-1 font-medium">Time</label>
              <input type="time" name="time" value={formData.time} onChange={handlechange} className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>

          {/* Row 4: Department, Doctors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="department" className="block mb-1 font-medium">Department</label>
              <select value={formData.department} onChange={handlechange} name="department"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                {
                  department.map((dept, index) => {
                    return <option key={index} value={dept.name}>{dept.name}</option>
                  })
                }
              </select>
            </div>
            <div>
              <label htmlFor="doctor" className="block mb-1 font-medium">Doctor</label>
              <select value={formData.doctor} onChange={handlechange} name="doctor"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                <option value="">Select doctor</option>
                {
                  doctor.map((doc, index) => {
                    return <option key={index} value={doc.name}>{doc.name}</option>
                  })
                }
              </select>
            </div>
          </div>

          {/* Row 5: Reason */}
          <div>
            <label className="block mb-1 font-medium">Reason for Visit</label>
            <textarea name="reason" value={formData.reason} onChange={handlechange}
              placeholder="Describe your reason for visit..."
              rows={4}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200">
              Submit Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
