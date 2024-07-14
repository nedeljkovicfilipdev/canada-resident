import { Rocket, Globe2, Wrench, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { Link } from 'react-scroll'
import { useEffect, useState } from 'react'
import { ResidentPoster } from '../resident-poster'
import { ResidentStoryline } from '../resident-storyline'
import { ResidentPortfolio } from '../resident-portfolio'
import { ResidentRequest } from '../resident-request'
import { ResidentAbout } from '../resident-about'
import { ResidentServices } from '../resident-services'
import { ResidentPrograms } from '../resident-programs'
import { ResidentNetwork } from '../resident-network'

export const ResidentMain = () => {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen flex-col">
      <ResidentPoster />
      <ResidentStoryline />
      <ResidentAbout />
      <ResidentPrograms />
      <ResidentServices />
      <ResidentNetwork />
      {/* <ResidentPortfolio /> */}
    </div>
  )
}
