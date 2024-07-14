import React from 'react'

// Assuming you have imported all your images correctly
import canadaPortfolioImg1 from '/images/canada-portfolio1.jpg'
import canadaPortfolioImg2 from '/images/canada-portfolio2.jpg'
import canadaPortfolioImg3 from '/images/canada-img2.jpg'
import canadaPortfolioImg4 from '/images/canada-img3.jpg'

export const ResidentPortfolio = () => {
  // Array of image file names
  const images = [canadaPortfolioImg1, canadaPortfolioImg2, canadaPortfolioImg3, canadaPortfolioImg4]

  return (
    <div>
      <div className="flex flex-wrap bg-gray-200 p-4">
        {images.map((image, index) => (
          <div key={index} className="w-1/2 p-2 sm:w-1/3 md:w-1/4 lg:w-1/4">
            <img
              src={image}
              alt={`Canada Image ${index + 1}`}
              className="h-auto w-full rounded-lg object-cover shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
