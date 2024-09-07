import React from "react";


const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          Whether you're a job seeker or an employer looking to fill positions, 
          [Your Job Portal Name] is here to simplify the process and connect talented 
          individuals with exciting opportunities. Take the next step in your career journey or find the
           perfect candidate – JobGuru is where career dreams come to life.
          </p>
        </div>
        <img src="/images/job.jpg" alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
          Microsoft Corporation and its contributors are available at
          http://www.microsoft.com and at http://www.microsoft.com for more
          information about the contributors and contributors to the Microsoft
          Corporation and its contributors to the Microsoft Corporation and its
          contributors to the Microsoft Corporation Microsoft Corporation and
          its contributors are available at http://www.microsoft.com and at
          http://www.microsoft.com for more information about the contributors
          and contributors to the Microsoft Corporation and its contributors to
          the Microsoft Corporation and its contributors to the Microsoft
          Corporation Microsoft Corporation and its contributors are available
          at http://www.microsoft.com and at http://www.microsoft.com for more
          information about the contributors and contributors to the Microsoft
          Corporation and its contributors to the Microsoft Corporation and its
          contributors to the Microsoft Corporation Microsoft Corporation and
          its contributors are available at http://www.microsoft.com and at
          http://www.microsoft.com for more information about the contributors
          and contributors to the Microsoft Corporation and its contributors to
          the Microsoft Corporation and its contributors to the Microsoft
          Corporation Microsoft Corporation and its contributors are available
          at http://www.microsoft.com and at http://www.microsoft.com for more
        </p>
      </div>
    </div>
  );
};

export default About;