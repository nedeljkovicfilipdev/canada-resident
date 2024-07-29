import React from 'react';
import Marquee from 'react-fast-marquee';

interface Partner {
  title: string;
  description: string;
}

const partners: Partner[] = [
  {
    title: 'Immigration Professionals',
    description:
      'Certified immigration experts offering tailored visa and immigration consulting services to help you navigate the complexities of visa applications and achieve successful outcomes.',
  },
  {
    title: 'Recruiters',
    description:
      'Specialized recruiters connecting you with employment opportunities abroad, ensuring you find the best job placements to match your skills and career goals.',
  },
  {
    title: 'Business Brokers',
    description:
      'Experienced business brokers assisting clients with business investments and acquisitions, helping you explore and secure profitable business opportunities internationally.',
  },
  {
    title: 'Government Agencies',
    description:
      'Official government agencies providing guidance and support to ensure compliance with immigration regulations, making your visa application process smooth and hassle-free.',
  },
  {
    title: 'Educational Institutions',
    description:
      'Partnered schools and universities offering a wide range of educational pathways and programs for international students, helping you achieve your academic and career aspirations.',
  },
  {
    title: 'Business Incubators',
    description:
      'Business incubators supporting start-ups and entrepreneurs with resources, mentorship, and guidance, fostering innovation and success in your business ventures.',
  },
  {
    title: 'Community Organizations',
    description:
      'Local community organizations dedicated to offering support and integration services to newcomers, helping you settle and thrive in your new environment.',
  },
];

export const ResidentNetwork = () => {
  return (
    <section id="our-network">
      <div className="mt-[50px] w-full bg-white py-16">
        <h2 className="mb-6 text-3xl font-bold text-center">Network of Partners</h2>
        <Marquee gradient={false} speed={30} className="overflow-hidden px-4">
          <div className="flex space-x-12 items-center min-w-max px-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-[500px] h-[200px] p-4 rounded-lg border border-gray-200 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-semibold">{partner.title}</h3>
                <p className="text-gray-700 text-lg">{partner.description}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ResidentNetwork;
