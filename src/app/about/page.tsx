import { PlayCircle } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className='bg-blue-100'>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-stone-700 text-center pt-10">
          <span className='text-blue-700'>About</span> Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
          Welcome to our Hospital Management System. We are dedicated to providing exceptional healthcare services with a focus on patient care, efficiency, and innovation. Our platform streamlines hospital operations, making it easier for staff and patients to manage appointments, records, and more.
        </p>
        {/* section1 */}
        <section className="mx-auto max-w-[70rem] px-4 my-10">
          <div className="flex justify-center items-center gap-10 flex-wrap md:flex-nowrap">
            <div className="sectionbox w-full">
              <Image src='/section1.jpeg' width='500' height='300' alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">Provide the best service for you</h1>
              <p className="text-gray-500 text-justify max-w-3xl">Lorem ipsum dolor adipisicing elit. Quae, iure sint quis neque aspernatur non magni et earum! Aut maxime mollitia deseruntquis neque aspernatur non magni et earum! Aut maxime mollitia deserunt </p>
              <button className='bg-blue-300 px-8 py-2 rounded-full w-1/2 flex gap-3 items-center justify-center'>
              <PlayCircle  />
                Watch Video
              </button>
            </div>

          </div>
        </section>
        {/* section2 */}
        <section className="mx-auto max-w-[70rem] px-4 py-10">
          <div className="flex justify-center items-center gap-10 flex-wrap md:flex-nowrap">
            <div className="sectionbox2 w-full lg:order-last">
              <Image src='/about2.jpg' width='500' height='300' alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">Fastest Emergency Departments</h1>
              <p className="text-gray-500 text-justify max-w-3xl">Lorem ipsum dolor adipisicing elit. Quae, iure sint quis neque aspernatur non magni et earum! Aut maxime mollitia deserunt </p>
              <button className='bg-blue-300 px-8 py-2 rounded-full w-1/2 flex gap-3 justify-center items-center'>
              <PlayCircle />
                Watch Video
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutPage;