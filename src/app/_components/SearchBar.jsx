"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchBar() {
    const [doctors, setDoctors] = useState([]);
    const [dept, setdept] = useState([])
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API_URL + "/speciallist")
            .then((res) => {
                setdept(res.data);
            }).catch((err) => {
                console.log(err);
            })

        const res = axios.get(process.env.NEXT_PUBLIC_API_URL + '/doctors')
        res.then((res) => {
            setDoctors(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handlebutton = (e) => {
        const data = e.currentTarget.value;
        const filteredDoctors = doctors.filter((doctor) => doctor.department === data);
        setFilteredDoctors(filteredDoctors);
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-4xl font-bold">Search
                <span className="text-blue-600"> Doctors</span>
            </h2>
            <p className="text-gray-600">Search your doctor and Book appointment in  one click</p>

            <div className="flex  flex-wrap gap-2 justify-center text-xs item-center">
                {
                    dept.length > 0 ? dept.map((item, index) => (
                        <button key={index} value={item.name} className={`p-2 flex flex-col justify-center items-center rounded-md gap-2 hover:bg-blue-200`} onClick={handlebutton}>
                            <img src={item.icon} alt={item.name} className="w-8 h-8" />
                            <span className="text-gray-600">{item.name}</span>
                        </button>
                    )) :
                        [1, 2, 3, 4, 5, 6].map((item, index) => <button key={index} className="bg-slate-300 p-8  flex flex-col justify-center items-center rounded-md mr-5 animate-pulse">
                        </button>)
                }
            </div>

            {
                filteredDoctors.length > 0 &&
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-20 sm:mx-0">
                    {filteredDoctors.map(doctor => (
                        <div key={doctor._id} className=" card p-3 bg-white flex flex-col  gap-5 rounded-xl">
                            <img src={doctor.image} alt="Doctor" className="rounded-xl w-70 h-64 object-cover" />
                            <div>
                                <p className="bg-blue-200 text-blue-500 rounded-full px-2 w-fit text-sm">{doctor.department}</p>
                                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                                <p className="text-blue-500">{doctor.experience}</p>
                                <p className="text-gray-400">65/7, Near Govt Office, {doctor.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}