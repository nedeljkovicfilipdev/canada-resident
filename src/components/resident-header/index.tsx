import React, { ReactNode } from 'react'
import { LanguageSelector } from '../language-selector'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'
import { Github } from 'lucide-react'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

interface IProps {
  leftNode?: ReactNode
}

export function Header(props: IProps) {
  const { t } = useTranslation()

  const navigate = useNavigate()

  const handleClick = () => {
    // Navigate to the blog page
    navigate('/blog')
  }

  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border bg-slate-50 px-4 py-4 md:px-12">
      <Link
        to="poster"
        smooth={true}
        duration={500}
        className="cursor-pointer font-eventbuk text-xl text-slate-700 hover:text-white dark:text-white"
      >
        RESIDENT
      </Link>
      <div className="flex flex-grow items-center justify-center gap-4">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          {t('about-nav')}
        </Link>
        <Link to="services" smooth={true} duration={500} className="cursor-pointer">
          {t('services-nav')}
        </Link>
        <Link to="our-programs" smooth={true} duration={500} className="cursor-pointer">
          {t('our-programs-nav')}
        </Link>
        <Link to="our-network" smooth={true} duration={500} className="cursor-pointer">
          {t('our-network-nav')}
        </Link>
        <Link to="contact-us" smooth={true} duration={500} className="cursor-pointer">
          {t('contact-nav')}
        </Link>
        <Button onClick={handleClick} className="cursor-pointer">
          {t('blog-nav')}
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <LanguageSelector />
        {/* <Button size={'icon'} asChild className="rounded-full">
          <a href="/login" target="_blank" rel="noreferrer">
            Login
          </a>
        </Button> */}
      </div>
    </div>
  )
}
