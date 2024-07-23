import { useState } from 'react';

// Define an interface for the program
interface Program {
  title: string;
  content: string;
}

export const ResidentPrograms = () => {
  // Update the state type to Program | null
  const [program, setProgram] = useState<Program | null>(null);

  const programs: Program[] = [
    {
      title: 'Skilled Workers',
      content: 'Designed for individuals with specific skills and qualifications who can contribute to Canada’s economy. These programs include the Express Entry system and various Provincial Nominee Programs (PNPs). Successful applicants can gain permanent residency based on their skills, work experience, and ability to contribute to the Canadian labor market.'
    },
    {
      title: 'Business and Entrepreneurs',
      content: 'These programs cater to individuals looking to invest in or start a business in Canada. Key programs include the Start-Up Visa Program, Self-Employed Program, and Owners-Operators Program. They provide pathways to permanent residency for entrepreneurs, investors, and self-employed individuals who can drive economic growth and create jobs in Canada.'
    },
    {
      title: 'Family Sponsorship',
      content: 'Allows Canadian citizens and permanent residents to sponsor their relatives, including spouses, common-law partners, dependent children, parents, and grandparents, to come to Canada as permanent residents. This program focuses on family reunification, ensuring families can stay together and support each other.'
    },
    {
      title: 'Caregivers',
      content: 'Aimed at individuals who provide care for children, elderly persons, or those with medical needs in Canada. Caregivers can apply for permanent residency through pathways designed specifically for those who have gained work experience in Canada while providing essential caregiving services.'
    },
    {
      title: 'Temporary',
      content: 'These programs allow individuals to come to Canada for a limited period. They include Temporary Resident Visas (for visitors), Work Permits, and Study Permits. Temporary residents may have the opportunity to transition to permanent residency through various immigration pathways.'
    },
    {
      title: 'Humanitarian',
      content: 'Programs under this category cater to individuals who do not qualify under other immigration programs but have compelling reasons to seek residency in Canada. This includes applications on humanitarian and compassionate grounds, often considering factors like the best interest of children or individuals facing significant hardship.'
    },
    {
      title: 'Students and Graduates',
      content: 'Canada offers pathways for international students to study and eventually settle in Canada. Programs include Student Visas and Study Permits, as well as opportunities for graduates to transition to permanent residency through various immigration pathways.'
    },
    {
      title: 'Refugees',
      content: 'Canada provides protection to individuals who have fled their home countries due to persecution, war, or violence. Refugee programs offer pathways to safety and permanent residency for those who meet the criteria for refugee status, ensuring they can rebuild their lives in Canada.'
    }
  ];

  return (
    <section id="our-programs" className="relative w-full h-screen bg-white">
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="relative flex justify-center items-center">
          <img
            src="/images/canada-portfolio1.jpg"
            alt="Canada"
            className="w-96 h-96 rounded-full shadow-lg"
          />
          <div className="absolute flex flex-wrap justify-center items-center w-full h-full">
            {programs.map((prog, index) => (
              <div
                key={index}
                className="absolute w-36 h-36 bg-white flex items-center justify-center rounded-full shadow-lg cursor-pointer"
                style={{
                  transform: `rotate(${index * 45}deg) translate(14rem) rotate(-${index * 45}deg)`
                }}
                onClick={() => setProgram(prog)}
              >
                <h3 className="text-center text-sm font-semibold">{prog.title}</h3>
              </div>
            ))}
          </div>
        </div>
        {program && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl text-center">
              <h2 className="text-xl font-semibold mb-4">{program.title}</h2>
              <p className="text-lg">{program.content}</p>
              <button 
                onClick={() => setProgram(null)}
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
