'use client'

import type { RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { PropertyListing } from '../../redux/features/propertyList/types'
import { useGetRentalsByKeywordsQuery } from '../../redux/features/search/searchApi'
import { SearchResponse } from '../../redux/features/search/types'
import { setProperties } from '../../redux/features/propertyList/propertyListSlice'
import { useEffect } from 'react'
import NoResults from './NoResults'
import LoadingResults from './LoadingResults'
import ErrorDisplay from './Error'

const processSearchResponse = (response: SearchResponse): PropertyListing[] => {
  const rentals = response.data

  const propertyListings: PropertyListing[] = rentals.map(r => ({
    id: r.id,
    name: r.attributes.name,
    description: r.attributes.description,
    imageSrc: r.attributes.primary_image_url
  }))

  return propertyListings
}

export const Property = (props: PropertyListing) => <li className="px-6 py-4">
  <div className="flex">
    <div className="mr-4 flex-shrink-0 self-center">
      <img
        src={props.imageSrc}
        alt={props.name}
        className=" object-cover rounded h-16 w-16 border border-gray-300 bg-white text-gray-300"
        aria-hidden="true"
      />
    </div>
    <div>
      <h4 className="text-md font-bold text-gray-700">{props.name}</h4>
      <p className="mt-1 truncate">
        {props.description}
      </p>
    </div>
  </div>
</li>

export const PropertyListings = () => {
  const { properties } = useSelector((state: RootState) => state)
  const { search } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const { data, error, isLoading } = useGetRentalsByKeywordsQuery(search)
  useEffect(() => {
    if (data && !isLoading && !error) {
      const updatedListings = processSearchResponse(data)
      dispatch(setProperties(updatedListings))
    }
  }, [data, isLoading, error, dispatch])

  if (error) return <ErrorDisplay />
  else if (isLoading) return <LoadingResults />
  else if (!properties.listings.length && search.filterKeywords.length) {
    return <NoResults />
  }

  return <div className="overflow-hidden rounded-md bg-white mt-2 mb-2 shadow-md">
    <ul className="divide-y divide-gray-200">
      {properties.listings.map((property) => <Property key={property.id} {...property} />)}
    </ul>
  </div>
}