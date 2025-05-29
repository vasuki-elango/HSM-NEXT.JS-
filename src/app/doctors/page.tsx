"use client"

import { FiPhoneCall } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import Image from "next/image";
import Card from "@/app/_components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Speciallist() {
    const [data, Setdata] = useState([])
    useEffect(() => {
        const res = axios.get(process.env.NEXT_PUBLIC_API_URL + '/doctors')
        res.then((res) => {
            Setdata(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div className="container my-10 mx-auto px-4 ">
            <div className="h-auto">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-2xl shadow-lg p-2 col-span-2">
                        <div className="flex gap-4">
                            <Image src='/doctor1.jpg' alt='' width={100} height={100} className="rounded-xl h-26 w-26" />
                            <div className="flex flex-col gap-0.5">
                                <h1 className="font-semibold text-2xl">Dr.Md.Zahidul Islam</h1>
                                <p>MBBS|BSC(Health)|M.phil(Pathology)</p>
                                <p>Specialist in Pathology</p>
                                <p className="my-3">
                                    <span className="bg-blue-200 text-blue-600 rounded-full px-2 py-0.5">+3 years of Experience overall</span>
                                </p>
                                <hr className="text-gray-300" />
                                <div className="grid grid-cols-2 gap-4 mt-4 text-stone-500">
                                    <div>
                                        <p className="flex items-center gap-1 text-stone-900">
                                            <IoIosHome /><span>Location</span>
                                        </p>
                                        <p className="my-2">House #25,Road 7,Sector #4,Jashim, uddin Nagar, DhakaChennai</p>
                                    </div>
                                    <div>
                                        <p className="flex items-center gap-1 text-stone-900">
                                            <MdOutlineWork /><span>Working In</span>
                                        </p >
                                        <p className="my-2">Shathys Mediacal College Hospital,Chennai</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 pl-2">
                            <p className="flex items-center gap-1 text-grey-500">
                                <FaUserDoctor /><span>Spciallist</span>
                            </p>
                            <ul className="flex gap-2 mt-2 flex-wrap">
                                <li className="bg-blue-200 text-blue-500 rounded-full px-2">Endoscopy</li>
                                <li className="bg-blue-200 text-blue-500 rounded-full px-2">Infertility</li>
                                <li className="bg-blue-200 text-blue-500 rounded-full px-2">Ultrasound</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-col justify-center items-center col-span-2 lg:col-span-1">
                        <p className="p-5 text-blue-400 rounded-full my-3 bg-blue-900">
                            <FiPhoneCall className="text-2xl" />
                        </p>
                        <p>Cheif Doctor</p>
                        <p>Contact for Appointments</p>
                        <p>+9189031XXXXX</p>
                        <div className="flex gap-3 my-3">
                            <p className="flex items-center gap-1 border border-blue-400 px-2 rounded-md text-blue-400">
                                <MdCall />
                                <span>Call Now</span>
                            </p>
                            <p className="flex items-center gap-1 border border-blue-400 px-2 rounded-md text-blue-400">
                                <MdContentCopy />
                                <span>Copy Number</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 mt-4">
                    <p>About Doctor</p>
                    <p className="text-sm mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus distinctio quos voluptatibus laborum earum doloribus quasi quidem sequi nobis officiis, vitae asperiores itaque, quaerat esse! Quos aliquid reiciendis vel sed expedita fuga numquam? Nobis quidem possimus mollitia qui ipsa dolor repellendus molestias rerum earum laudantium saepe quos dignissimos blanditiis impedit recusandae minus totam magnam asperiores perspiciatis, dolorum, eius cupiditate fugit? Eligendi quae at molestias aut reiciendis nisi adipisci eum dignissimosquid reiciendis vel sed expedita fuga numquam? Nobis quidem possimus mollitia qui ipsa dolor repellendus molestias rerum earum laudantium saepe quos dignissimos blanditiis impedit recusandae minus totam magnam asperiores perspiciatis, dolorum, eius cupiditate fugit? Eligendi quae at molestias aut reiciendis nisi adipisci eum dignissimos </p>
                </div>
            </div>

            {/* specialist1 */}
            <section className="my-10">
                <h1 className="text-4xl my-6 font-bold">Top Speciallist</h1>
                <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        data.length > 0 ? data.map((doctor, item) => (
                            <Card key={item} doctor={doctor} />
                        )) : [1, 2, 3, 4, 5, 6, 0, 7, 8].map((item,index) =>
                            <div key={index} className="bg-slate-100 h-90 w-[300px] card rounded-lg p-3 animate-pulse">
                            </div>
                        )
                    }
                </div>
            </section>
        </div>
    )
}