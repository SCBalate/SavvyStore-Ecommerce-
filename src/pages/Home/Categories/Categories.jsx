import React from 'react';
import{Mens_Banner,Womens_Banner,Kids_Banner,Beauty_Card} from "../../../utils/assetImports/imageConstants";
import { NavLink } from 'react-router-dom';

const Categories = () => {
    const callouts = [
        {
          name: 'Men`s fashion',
          description: 'Work from home accessories',
          imageSrc: Mens_Banner,
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '/product',
          para : 'Men`s fashion'
        },
        {
          name: 'Women`s fashion',
          description: 'Journals and note-taking',
          imageSrc: Womens_Banner,
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '/product',
          para: 'Women`s fashion'
        },
        {
          name: 'Kids` fashion',
          description: 'Daily commute essentials',
          imageSrc: Kids_Banner,
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '/product',
          para: 'Kid`s fashion'
        },
        {
            name: 'Beauty',
            description: 'Daily commute essentials',
            imageSrc: Beauty_Card,
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '/product',
            para: 'beauty'
          },
      ]


  return (
    <div className="bg-gray-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-10">
   

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full  object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <NavLink to={callout.href} 
                // onClick={() => navigatetoProductPage(callout.para)}
                >
                  <span className="absolute inset-0" />
                  {callout.name}
                </NavLink>
              </h3>
              <p className="text-base font-semibold text-gray-900">{callout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Categories