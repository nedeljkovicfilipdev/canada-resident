import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Program {
  title: string;
  content: string;
}

export const ResidentPrograms = () => {
  const { t } = useTranslation();
  const [program, setProgram] = useState<Program | null>(null);

  const programs: Program[] = [
    {
      title: t('programs.skilledWorkers.title'),
      content: t('programs.skilledWorkers.content')
    },
    {
      title: t('programs.businessAndEntrepreneurs.title'),
      content: t('programs.businessAndEntrepreneurs.content')
    },
    {
      title: t('programs.familySponsorship.title'),
      content: t('programs.familySponsorship.content')
    },
    {
      title: t('programs.caregivers.title'),
      content: t('programs.caregivers.content')
    },
    {
      title: t('programs.temporary.title'),
      content: t('programs.temporary.content')
    },
    {
      title: t('programs.humanitarian.title'),
      content: t('programs.humanitarian.content')
    },
    {
      title: t('programs.studentsAndGraduates.title'),
      content: t('programs.studentsAndGraduates.content')
    },
    {
      title: t('programs.refugees.title'),
      content: t('programs.refugees.content')
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
                <div className="mb-6 tracking-tighter font-bold text-white sm:text-3xl xl:text-5xl">{t('ourPrograms')}</div>
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
                  {t('close')}
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
