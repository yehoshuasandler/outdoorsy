// import React from 'react'
import type { RootState } from '../store'
import { useSelector } from 'react-redux'
import { PropertyListing } from './types'

export const Property = (props: PropertyListing) => <li className="px-6 py-4">
  <div className="flex">
  <div className="mr-4 flex-shrink-0 self-center">
    <img
      src={props.imageSrc}
      alt={props.name}
      className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
      aria-hidden="true"
    />
  </div>
  <div>
    <h4 className="text-lg font-bold">{props.name}</h4>
    <p className="mt-1">
      {props.description}
    </p>
  </div>
</div>
</li>

export const PropertyListings = () => {
  const { properties } = useSelector((state: RootState) => state)

  return <div className="overflow-hidden rounded-md bg-white mt-2 mb-2 shadow-md">
      <ul className="divide-y divide-gray-200">
      {properties.map((property) => <Property key={property.id} {...property} />)}
      </ul>
    </div>
}