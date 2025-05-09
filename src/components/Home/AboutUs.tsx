import React from 'react'

export default function AboutUs() {
  return (
    <section className="max-w-[100%] flex bg-white mb justify-center items-center pb-20   ">
      <section className="bg-[#0B52B8] w-[90vw] md:w-[80vw] flex justify-center  items-center h-[20vh] md:min-h-[40vh] rounded-md">
        <section className="text-white flex w-full flex-col justify-center items-center h-full">
          <h1 className="w-[80%] md:w-[60%] font-bold text-sm md:text-3xl text-5xl text-center">
            Gbese is built for You. Over 50k Persons have ended the vicious
            cycle of Debts
          </h1>
          <section className='my-4'>
            <button className="bg-[#1A73E8] px-10 py-2 rounded-md">Get Started</button>
          </section>
        </section>
      </section>
    </section>
  );
}
