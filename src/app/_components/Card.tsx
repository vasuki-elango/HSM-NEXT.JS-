import Link from 'next/link'
import Image from 'next/image'

interface Doctor {
  _id: string;
  image: string;
  name: string;
  degree: string;
  about: string;
  experience: number;
  speciallist: string[];
}

interface CardProps {
  doctor: Doctor;
}

export default function Card({ doctor }: CardProps) {
  return (
    <Link href={'/doctors/'+ doctor._id} >
      <div className="card bg-white rounded-lg p-3 h-full">
        <div className="w-full h-64  object-cover">
          <Image width="100" height="100" src={doctor.image} alt="" className="rounded-lg w-full h-full object-cover" />
        </div>
        <div className="flex gap-1 flex-col mt-3">
          <h1 className="text-2xl font-bold">{doctor.name}</h1>
          <p className='text-md'>{doctor.degree}</p>
          <p className="text-gray-500 text-sm">{doctor.about}</p>
          <p className="text-sm">Experiences</p>
          <p >
            <span className="bg-blue-200 text-blue-600 rounded-full px-2 py-0.5">+{doctor.experience} of Experience</span>
          </p>
          <p className="text-sm mt-2">Speciallist</p>
          <ul className="flex gap-2 mt-2 flex-wrap">
            {
              doctor.speciallist.map((item,index) =>(
                <li key={index} className="bg-blue-200 text-blue-500 rounded-full px-2">{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </Link>
  )
}