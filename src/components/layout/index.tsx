import React from 'react'
import { Header } from '../resident-header'
import { HeaderBlog } from '../resident-header/blog'
import { Footer } from '../resident-footer'

export const getNoneLayout = (page: React.ReactElement) => page

export const getDefaultLayout = (page: React.ReactElement) => {
  return (
    <div className="h-min-screen">
      <Header />
      {page}
      <Footer />
    </div>
  )
}

export const getBlogLayout = (page: React.ReactElement) => {
  return (
    <div className="h-min-screen">
      <HeaderBlog />
      {page}
      <Footer />
    </div>
  )
}
