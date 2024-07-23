import { useState } from 'react'

interface Partner {
  title: string
  description: string
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
]

export const ResidentNetwork = () => {
  return (
    <section id="our-network" className='container'>
      <div className="mt-[50px] w-full bg-white py-16">
        <h2 className="mb-6 text-3xl font-bold">Network of Partners</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold">{partner.title}</h3>
              <p className="text-gray-700">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
