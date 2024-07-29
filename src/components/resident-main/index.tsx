import { useTranslation } from 'react-i18next';
import { Suspense, lazy } from 'react';

const ResidentPoster = lazy(() => import('../resident-poster'));
const ResidentStoryline = lazy(() => import('../resident-storyline'));
const ResidentAbout = lazy(() => import('../resident-about'));
const ResidentServices = lazy(() => import('../resident-services'));
const ResidentPrograms = lazy(() => import('../resident-programs'));
const ResidentNetwork = lazy(() => import('../resident-network'));
// const ResidentPortfolio = lazy(() => import('../resident-portfolio'));

export const ResidentMain = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={<div>Loading...</div>}>
        <ResidentPoster />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ResidentStoryline />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ResidentAbout />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ResidentServices />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ResidentPrograms />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ResidentNetwork />
      </Suspense>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <ResidentPortfolio />
      </Suspense> */}
    </div>
  );
};
