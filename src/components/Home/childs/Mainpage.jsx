import React from 'react';
import Animation from './Animation';


const Mainpage = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="relative mt-12">
        <img src="/images/logo2.svg" alt="Your Image" className="mx-auto" />
      </div>
      <div>
        <img
          src="/images/red.svg"
          alt="red-image"
          className="absolute top-0 left-0"
        />
        <img
          src="/images/blue.svg"
          alt="blue-image"
          className="absolute top-0 right-0"
        />
      </div>
      <div className="text-5xl font-[700] text-center justify-center mt-6">
        <h1>Google Developer Student Club</h1>
      </div>
      <div className="text-3xl font-[#141718] mt-2">
        <h2>Jaypee Institute Of Information Technology 62</h2>
      </div>
      <div className="text-xl font-[#141718] mt-2">
        <h4>Jaypee Institute Of Information Technology 62</h4>
      </div>
      <div className="text-2xl font-[#141718] mt-2 font-semibold">
        <h2>An electrifying hub of innovation, created by students, fueled </h2>
        <h2>By students</h2>
        <h2>a dynamic developers' community!</h2>
      </div>
      <div className="text-xl font-[#141718] mt-2 w-2/3">
        <h4>At GDSC JIIT 62, we aspire to ignite the flames of innovation within young developers, guiding them to unearth </h4>
        <h4 className='mt-2'>their hidden talents and embark on a transformative journey of <span className='border-2 rounded-3xl py-1 px-2 bg-blue-300 border-blue-500'>self-discovery</span></h4>
        </div>
        <div className='pt-20 me-auto'>
        <Animation />
      </div>
    </div>
  );
};

export default Mainpage;
