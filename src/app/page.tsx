import Image from "next/image";

import  Hero  from "./_components/Hero";
import  SearchBar  from "./_components/SearchBar";

export default function Home() {
  const Test = [
    {
      id:1,
      name: "PCR Test",
      image: "/pcrtest.jpg",
    },
    {
      id:2,
      name: "Flu Vaccine",
      image: "/fluvaccine.jpg",
    },
    {
      id:3,
      name: "COVID-19 Test",
      image: "/covid19.jpeg",
    },
    {
      id:4,
      name: "Blood Test",
      image: "/bloodtest.jpg",
    },
    {
      id:5,
      name: "HKCTC Test",
      image: "/HKCTCtest.jpeg",
    },
    {
      id:6,
      name: "MRI Scan",
      image: "/Mritest.jpeg",
    }
  ]
  return (
    <main className="bg-blue-100">
      {/* Hero Section */}
      <Hero/>
      <section className="container mx-auto">
        <SearchBar/>
        
        {/* Test & Vaccination */}
        <section className="my-10 py-20 bg-blue-950 text-white">
          <section className="my-10 flex flex-col justify-around  gap-12 items-center ">
            <h1 className="text-4xl font-bold">Test & Vaccination</h1>
            <div className="flex gap-3.5 flex-wrap p-2 justify-center">
              {
                Test.map((item) => (
                  <div className="p-2 flex flex-col items-center text-white gap-6" key={item.id}>
                    <div className="w-30 h-30 object-cover rounded-full overflow-hidden" >
                      <Image src={item.image} width='300' height='300' alt="" className="object-cover w-full h-full" />
                    </div>
                    <h3>{item.name}</h3>
                  </div>
                ))
              }
            </div>
            <button className="bg-blue-500 px-7 py-3 rounded-sm text-xl">Register</button>
          </section>

        </section>
      </section>
      
    </main>
  );
}
