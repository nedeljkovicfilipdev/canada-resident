import React from 'react';
import Marquee from 'react-fast-marquee';

export const JourneyStart = () => {
  return (
    <section id="consultations" className="p-8 bg-white">
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/visa-application-canada.jpg')" }}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white p-6 bg-opacity-30 bg-slate-800 rounded-lg shadow-lg">
            <h2 className="sm:text-3xl xl:text-5xl font-bold mb-4">Consultations</h2>
          </div>
        </div>
      </section>

      <section className="py-8 tracking-tighter container">
        <div className="flex flex-col md:flex-row gap-8 text-[#333] ">
          <div className="md:w-1/2 bg-white-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-3xl mb-8 font-bold">What to Expect in the First Meeting</h4>
            <ul className="list-disc list-inside space-y-2 text-xl text-[#333]">
              <li>Assess your background, qualifications, and immigration goals.</li>
              <li>Discuss suitable immigration programs tailored to your needs.</li>
              <li>Outline the application process, timeline, and requirements.</li>
              <li>Provide answers to your questions about immigration.</li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-white-100 p-6 rounded-lg shadow-lg">
            <h4 className=" text-3xl mb-8 font-bold">How to Prepare</h4>
            <ul className="list-disc list-inside space-y-2 text-xl text-gray-900 ">
              <li>Your resume or CV.</li>
              <li>Relevant certificates or diplomas.</li>
              <li>Proof of language proficiency (if applicable).</li>
              <li>Personal identification documents.</li>
              <li>Any previous immigration application documents.</li>
              <li>A list of questions or concerns.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h3 className="text-3xl font-bold text-center mb-6">Success Stories</h3>
        <Marquee gradient={false} speed={30} className="overflow-hidden">
          <div className="flex space-x-4">
            {[
              {
                text: '"Diverse Visa made my immigration process seamless. Their expertise ensured my Express Entry success."',
                author: '- John D., Skilled Worker',
              },
              {
                text: '"Thanks to Diverse Visa, I successfully launched my business in Canada. Their support was invaluable."',
                author: '- Maria S., Entrepreneur',
              },
              {
                text: '"Diverse Visa helped me secure my Study Permit and guided me towards permanent residency."',
                author: '- Elena K., Student',
              },
              {
                text: '"Diverse Visa reunited us with our family. Their professionalism made all the difference."',
                author: '- Ahmed and Fatima A., Family Sponsorship',
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex-none flex flex-col justify-center mx-2"
              >
                <p className="text-gray-700 italic text-lg mb-2">{story.text}</p>
                <p className="text-gray-900 font-bold text-lg">{story.author}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </section>
  );
};
