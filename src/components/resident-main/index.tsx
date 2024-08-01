import { Suspense, lazy } from 'react';

const ResidentPoster = lazy(() => import('../resident-poster'));
const ResidentStoryline = lazy(() => import('../resident-storyline'));
const ResidentAbout = lazy(() => import('../resident-about'));
const ResidentServices = lazy(() => import('../resident-services'));
const ResidentPrograms = lazy(() => import('../resident-programs'));
const ResidentJourney = lazy(() => import('../resident-consultations'));
const ResidentNetwork = lazy(() => import('../resident-network'));

export const ResidentMain = () => {

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
        <ResidentPrograms />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ResidentServices />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ResidentNetwork />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ResidentJourney />
      </Suspense>



      
      {/* <Suspense fallback={<div>Loading...</div>}>
        <ResidentPortfolio />
      </Suspense> */}
    </div>
  );
};
