import React, { useState } from 'react';
import { Globe2, Rocket, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { JourneyStart } from './start';

export const Card: React.FC<{ title: string, content: string }> = ({ title, content }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-full h-64">
      <div
        className={clsx(
          "relative w-full h-full transform transition-transform duration-500",
          flipped ? " animate-flip" : "animate-unflip"
        )}
        onClick={() => setFlipped(!flipped)}
      >
        <div className={clsx(
          "absolute inset-0 p-8 rounded-lg bg-customblue shadow-md flex items-center justify-center backface-hidden cursor-pointer hover:bg-custombluehover",
          flipped ? "hidden" : ""
        )}>
          <h3 className="mb-6 text-2xl sm:text-2xl xl:text-3xl font-bold text-white">{title}</h3>
        </div>
        <div className={clsx(
          "absolute inset-0 p-8 rounded-lg bg-white shadow-md flex items-center justify-center backface-hidden cursor-pointer",
          flipped ? "" : "hidden"
        )}>
          <p className="text-xl text-gray-600 animate-flip tracking-tighter text-justify">{content}</p>
        </div>
      </div>
    </div>
  );
};

const AccordionItem: React.FC<{ title: string, content: React.ReactNode, isOpen: boolean, onToggle: () => void }> = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-300">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-100 focus:outline-none"
      >
        <span className="tracking-tighter sm:text-xl xl:text-2xl font-regular">{title}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && <div className="p-4 bg-gray-50">{content}</div>}
    </div>
  );
};

export const ResidentServices = () => {
  const { t } = useTranslation();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleAccordion = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  return (
    <section id="services" className="w-full">
      <div className="w-full py-16 bg-gray-50">
        <div className="px-4 md:px-6 container">
          <div className="mx-auto w-full max-w-full space-y-20">
            
            {/* Our Services */}
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h4 className="mb-8 text-center tracking-tighter sm:text-3xl xl:text-5xl p-4 text-black rounded-t-lg font-bold">{t('services')}</h4>
              <div className="space-y-4 mb-4">
                <AccordionItem
                  title={t('immigration-consulting-experts')}
                  content={<div className="text-xl"><p>{t('immigration-consulting-experts-description')}</p></div>}
                  isOpen={expandedItem === 'immigration-consulting-experts'}
                  onToggle={() => toggleAccordion('immigration-consulting-experts')}
                />
                <AccordionItem
                  title={t('recruiters-job-placements')}
                  content={<div className="text-xl"><p>{t('recruiters-job-placements-description')}</p></div>}
                  isOpen={expandedItem === 'recruiters-job-placements'}
                  onToggle={() => toggleAccordion('recruiters-job-placements')}
                />
                <AccordionItem
                  title={t('business-brokers')}
                  content={<div className="text-xl"><p>{t('business-brokers-description')}</p></div>}
                  isOpen={expandedItem === 'business-brokers'}
                  onToggle={() => toggleAccordion('business-brokers')}
                />
                <AccordionItem
                  title={t('educational-institutions')}
                  content={<div className="text-xl"><p>{t('educational-institutions-description')}</p></div>}
                  isOpen={expandedItem === 'educational-institutions'}
                  onToggle={() => toggleAccordion('educational-institutions')}
                />
                <AccordionItem
                  title={t('legal-compliance-advisors')}
                  content={<div className="text-xl"><p>{t('legal-compliance-advisors-description')}</p></div>}
                  isOpen={expandedItem === 'legal-compliance-advisors'}
                  onToggle={() => toggleAccordion('legal-compliance-advisors')}
                />
              </div>
              
              {/* What Sets Us Apart */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card title={t('holistic-approach')} content={t('holistic-approach-text')} />
                <Card title={t('understanding-unique-journeys')} content={t('understanding-unique-journeys-text')} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <JourneyStart />
    </section>
  );
};

export default ResidentServices;
