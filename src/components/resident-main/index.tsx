import { Suspense, lazy } from 'react';

const PosterAndStoryline = lazy(() => import('../posterstoryline'));

const ResidentAbout = lazy(() => import('../resident-about'));
const ResidentServices = lazy(() => import('../resident-services'));
const ResidentPrograms = lazy(() => import('../resident-programs'));
const ResidentJourney = lazy(() => import('../resident-consultations'));
const ResidentLatest = lazy(() => import('../resident-latest'));
const ResidentStories = lazy(() => import('../_stories'));
const ResidentNetwork = lazy(() => import('../resident-network'));

export const ResidentMain = () => {

  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={<div>Loading...</div>}>
        <PosterAndStoryline />
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
      <Suspense fallback={<div>Loading...</div>}>
        <ResidentLatest />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ResidentStories />
      </Suspense>
    </div>
  );
};
