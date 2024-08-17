import React from 'react';
import { useTranslation } from 'react-i18next';

const Blog3: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="p-2 md:p-4">
            <div className="max-w-3xl mx-auto">
                <img 
                    src="images/blog/blogimg1.jpg" 
                    alt={t('startup.blog-image1-alt')} 
                    className="mb-4 w-full h-auto rounded-xl"
                />

                <h1 className="mb-8 text-center sm:text-2xl xl:text-4xl p-4 text-black rounded-t-lg font-bold text-3xl">
                    {t('startup.blog-title')}
                </h1>

                <p className="mb-4 text-lg">
                    {t('startup.intro')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">
                    {t('startup.what-is-title')}
                </h2>
                <p className="mb-4 text-lg">
                    {t('startup.what-is-description')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">
                    {t('startup.eligibility-requirements-title')}
                </h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    {t('startup.eligibility-requirements', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}><strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}</li>
                    ))}
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">
                    {t('startup.application-process-title')}
                </h2>
                <ol className="list-decimal list-inside mb-4 text-lg">
                    {t('startup.application-process', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}><strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}</li>
                    ))}
                </ol>

                <h2 className="text-3xl font-bold mb-4 text-center">
                    {t('startup.advantages-title')}
                </h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    {t('startup.advantages', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}><strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}</li>
                    ))}
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">
                    {t('startup.success-stories-title')}
                </h2>
                <p className="mb-4 text-lg">
                    {t('startup.success-stories-description')}
                </p>

                <p className="mb-4 text-lg">
                    {t('startup.closing')}
                </p>
            </div>
        </section>
    );
};

export default Blog3;
