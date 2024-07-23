import React, { useState } from 'react';
import { Globe2, Rocket, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const Card: React.FC<{ title: string, content: string }> = ({ title, content }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-full h-64">
      <div
        className={clsx(
          "relative w-full h-full transform transition-transform duration-500",
          flipped ? "rotate-y-180" : ""
        )}
        onClick={() => setFlipped(!flipped)}
      >
        <div className={clsx(
          "absolute inset-0 p-8 rounded-lg bg-white shadow-md flex items-center justify-center backface-hidden cursor-pointer",
          flipped ? "hidden" : ""
        )}>
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        </div>
        <div className={clsx(
          "absolute inset-0 p-8 rounded-lg bg-white shadow-md flex items-center justify-center backface-hidden transform rotate-y-180 cursor-pointer",
          flipped ? "" : "hidden"
        )}>
          <p className="text-lg text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

export const ResidentServices: React.FC = () => {
  const { t } = useTranslation();

  return (
<section id="services">
  <div className="mt-[50px] w-full bg-gray-50 py-16">
    <div className="container px-4 md:px-6">
      <div className="mx-auto w-full max-w-6xl space-y-20">
        <h2 className="text-center text-4xl font-bold text-gray-800">{t('how-can-we-help')}</h2>
        
        {/* What Sets Us Apart */}
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">{t('what-sets-us-apart')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title={t('holistic-approach')} content={t('holistic-approach-text')} />
            <Card title={t('understanding-unique-journeys')} content={t('understanding-unique-journeys-text')} />
          </div>
        </div>

        {/* Our Services */}
        <div className="rounded-lg bg-white p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-3 border-b border-gray-300 p-4 text-center flex items-center justify-center">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">{t('our-services')}</h3>
            </div>
            <div className="border-b border-gray-300 p-4 text-center flex items-center justify-center">
              <Rocket size={32} className="text-gray-600" />
              <h4 className="text-xl font-bold text-gray-800 ml-2">{t('immigration-consulting-experts')}</h4>
            </div>
            <div className="border-b border-gray-300 p-4 text-center flex items-center justify-center">
              <Globe2 size={32} className="text-gray-600" />
              <h4 className="text-xl font-bold text-gray-800 ml-2">{t('recruiters-job-placements')}</h4>
            </div>
            <div className="border-b border-gray-300 p-4 text-center flex items-center justify-center">
              <Wrench size={32} className="text-gray-600" />
              <h4 className="text-xl font-bold text-gray-800 ml-2">{t('business-brokers')}</h4>
            </div>
            <div className="border-b border-gray-300 p-4 text-center flex items-center justify-center">
              <Rocket size={32} className="text-gray-600" />
              <h4 className="text-xl font-bold text-gray-800 ml-2">{t('educational-institutions')}</h4>
            </div>
            <div className="border-b border-gray-300 p-4 text-center flex items-center justify-center">
              <Globe2 size={32} className="text-gray-600" />
              <h4 className="text-xl font-bold text-gray-800 ml-2">{t('legal-compliance-advisors')}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};
