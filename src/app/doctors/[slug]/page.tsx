"use client"

import { MdOutlineWork } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function DoctorDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)

    type Doctor = {
        _id: string;
        name: string;
        degree: string;
        department: string;
        experience: number;
        image: string;
        speciallist: string[];
        location: string;
        // add other fields as needed
    };

    const [datas, setdata] = useState<Doctor | null>(null);

    useEffect(() => {
        const res = axios.get(process.env.NEXT_PUBLIC_API_URL + '/doctors/' + slug)
        res.then((res) => {
            setdata(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [slug])

    return (
        <div className="container mx-auto px-4 ">
            <div className="flex justify-center items-center w-full my-10">
            {
                datas ? <div className="h-auto" key={datas._id}>
                    <div className="bg-white rounded-2xl shadow-lg p-5 col-span-2 h-full">
                        <div className="flex flex-wrap lg:flex-nowrap gap-4">
                            <div className="rounded-xl overflow-hidden h-100 w-full">
                                <Image src={datas.image} alt='' className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h1 className="font-semibold text-2xl">{datas.name}</h1>
                                <p>{datas.degree}</p>
                                <p>{datas.department}</p>
                                <p className="my-3">
                                    <span className="bg-blue-200 text-blue-600 rounded-full px-2 py-0.5">+{datas.experience} of Experience overall</span>
                                </p>
                                <div className="py-2">
                                    <p className="flex items-center gap-1 text-grey-500">
                                        <FaUserDoctor /><span>Spciallist</span>
                                    </p>
                                    <ul className="flex gap-2 mt-2 flex-wrap">
                                        {
                                            datas.speciallist.map((item,index) => (
                                                <li key={index} className="bg-blue-200 text-blue-500 rounded-full px-2">{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold">About Doctor</p>
                                    <p className="text-sm my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus distinctio quos voluptatibus laborum earum doloribus quasi quidem sequi nobis officiis, vitae asperiores itaque, quaerat esse! Quos aliquid reiciendis vel sed expedita fuga numquam? Nobis quidem possimus mollitia qui ipsa dolor repellendus molestias rerundi quae at molestias aut reiciendis nisi adipisci eum dignissimos </p>
                                </div>
                                <hr className="text-gray-300" />
                                <div className="grid grid-cols-2 gap-4 mt-4 text-stone-500">
                                    <div>
                                        <p className="flex items-center gap-1 text-stone-900">
                                            <IoIosHome /><span>Location</span>
                                        </p>
                                        <p className="my-2">{datas.location}</p>
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
                    </div>
                </div> : <div className="bg-slate-100 animate-pulse rounded-2xl shadow-lg p-5 w-[80rem] h-100 col-span-2">

                </div>
            }
            </div>
        </div>
    )
}