import React from 'react';
import { useTranslation } from 'react-i18next';

const Blog2: React.FC = () => {
    const { t } = useTranslation();

    // Define the type for the translation items
    type TranslationItem = string;

    return (
        <section className="p-2 md:p-4">
            <div className="max-w-3xl mx-auto">
                <img src="images/blog/blogimg2.jpg" alt={t('family.blog-image2-alt')} className="mb-4 w-full h-auto rounded-xl"/>

                <h1 className="mb-8 text-center sm:text-2xl xl:text-4xl p-4 text-black rounded-t-lg font-bold text-3xl">
                    {t('family.blog-title')}
                </h1>

                <p className="mb-4 text-lg">
                    {t('family.intro')}
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('family.who-can-sponsor-title')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    {(t('family.who-can-sponsor', { returnObjects: true }) as TranslationItem[]).map((item, index) => (
                        <li key={index}><strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}</li>
                    ))}
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('family.why-choose-title')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    {(t('family.why-choose', { returnObjects: true }) as TranslationItem[]).map((item, index) => (
                        <li key={index}><strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}</li>
                    ))}
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('family.how-it-works-title')}</h2>
                <ol className="list-decimal list-inside mb-4 text-lg">
                    {(t('family.how-it-works', { returnObjects: true }) as TranslationItem[]).map((item, index) => (
                        <li key={index}><strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}</li>
                    ))}
                </ol>

                <h2 className="text-3xl font-bold mb-4 text-center">{t('family.benefits-title')}</h2>
                <ul className="list-disc list-inside mb-4 text-lg">
                    {(t('family.benefits', { returnObjects: true }) as TranslationItem[]).map((item, index) => (
                        <li key={index}><strong>{item.split(':')[0]}</strong>: {item.split(':')[1]}</li>
                    ))}
                </ul>

                <p className="mb-4 text-lg">
                    {t('family.closing')}
                </p>                 

            </div>
        </section>
    );
};

export default Blog2;
