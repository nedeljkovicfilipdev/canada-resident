import React, { ReactNode } from 'react'
import { LanguageSelector } from '../language-selector'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'
import { Github } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'
import { Link, useNavigate } from 'react-router-dom'

interface IProps {
  leftNode?: ReactNode
}

export function Header(props: IProps) {
  const { t } = useTranslation()

  const navigate = useNavigate()

  const handleBlog = () => {
    // Navigate to the blog page
    navigate('/blog')
  }

  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border bg-slate-50 px-4 py-4 md:px-12">
      <Link to="/" className="cursor-pointer font-eventbuk text-xl text-slate-700 hover:text-white dark:text-white">
        RESIDENT
      </Link>
      <div className="flex flex-grow items-center justify-center gap-4">
        <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">
          {t('about-nav')}
        </ScrollLink>
        <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer">
          {t('services-nav')}
        </ScrollLink>
        <ScrollLink to="our-programs" smooth={true} duration={500} className="cursor-pointer">
          {t('our-programs-nav')}
        </ScrollLink>
        <ScrollLink to="our-network" smooth={true} duration={500} className="cursor-pointer">
          {t('our-network-nav')}
        </ScrollLink>
        <ScrollLink to="contact-us" smooth={true} duration={500} className="cursor-pointer">
          {t('contact-nav')}
        </ScrollLink>
        <Button onClick={handleBlog} className="cursor-pointer bg-customblue hover:bg-custombluehover">
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
