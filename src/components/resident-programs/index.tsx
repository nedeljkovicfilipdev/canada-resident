import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // If you're using i18next for translations

// Define an interface for the program
interface Program {
  title: string;
  content: string;
}

export const ResidentPrograms = () => {
  const { t } = useTranslation();
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
    <section id="our-programs" className="h-screen">
      <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: `url('/images/start-journey-niagara.jpg')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <div className="relative flex justify-center items-center ">
              <div className="absolute flex flex-wrap justify-center items-center ">
                {programs.map((prog, index) => (
                  <div
                    key={index}
                    className="absolute w-40 h-40 bg-white bg-opacity-95 flex items-center justify-center rounded-full shadow-lg cursor-pointer"
                    style={{
                      transform: `rotate(${index * 45}deg) translate(18rem) rotate(-${index * 45}deg)` // Adjusted translation for the image
                    }}
                    onClick={() => setProgram(prog)}
                  >
                    <h3 className="text-center sm:text-lg xl:text-xl text-[#333] font-bold">{prog.title}</h3>
                  </div>
                ))}
                <div className="mb-6 tracking-tighter font-bold text-white sm:text-3xl xl:text-5xl">OUR PROGRAMS</div>
              </div>
            </div>
          </div>
          {program && (
            <div
              className="absolute inset-0 flex items-center justify-center z-10"
              onClick={() => setProgram(null)} // Close overlay on click anywhere
            >
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl text-center" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
                <p className="text-xl text-left">{program.content}</p>
                <button
                  onClick={() => setProgram(null)}
                  className="mt-4 px-4 py-2 bg-customblue text-white rounded-md hover:bg-custombluehover tracking-tighter text-xl"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResidentPrograms;
