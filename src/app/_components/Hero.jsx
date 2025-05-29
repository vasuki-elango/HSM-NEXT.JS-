
export default function Hero() {
  return (
    <div>
        <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-96 lg:order-last lg:h-full">
              <img
                src="/Hero.jpg"
                className="rounded absolute inset-0 h-full w-full object-cover object-center"
                alt=""
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Find & Book Your <span className="text-blue-600">Appointment</span>  with your Fav <span className="text-blue-600">Doctor</span>
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                sequi.
              </p>
              <button className='bg-indigo-700 px-6 py-2 rounded-lg text-white cursor-pointer mt-6'>Explore Now</button>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}
