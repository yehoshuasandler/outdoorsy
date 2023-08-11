export type SearchRequest = {
  filterKeywords: string[],
  limit: number,
  offset: number,
}

/**
 * Not every property is accounted for,
 * but most needed properties types should
 * be defined here.
 */
export type SearchResponse = {
  data: SearchResponseDataElement[]
  included: SearchResponseIncludedPartial[]
}

export enum EntityTypes {
  IMAGES = 'images',
  USAGE_BASED_ITEM = 'usage_based_item',
  USERS = 'users',
  RENTALS = 'rentals'
}

export type BaseEntity = {
  id: string,
  type: EntityTypes
}

export type SearchResponseRelationshipsPartial = {
  images: { data: BaseEntity[]},
  milage_usage_item: { data: BaseEntity }
  owner: BaseEntity
  primary_image: BaseEntity
} & Record<string, unknown>

export type SearchResponseAttributesPartial = {
  name: string,
  description: string,
  primary_image_url: string,
} & Record<string, unknown>

export type SearchResponseDataElement = BaseEntity & {
  type: EntityTypes.RENTALS
  attributes: SearchResponseAttributesPartial,
  relationships: SearchResponseRelationshipsPartial
}

export type SearchResponseIncludedAttributesPartial = {
  rentalId: number,
  url: string,
  position: number,
} & Record<string, unknown>


/**
 * This type was initially created to create a relationship between
 * the rental and an associated primary image url. The primary image
 * url was found to be defined in `SearchResponseAttributesPartial`.
 * 
 * This type and its children were kept for their future use cases.
 */
export type SearchResponseIncludedPartial = BaseEntity & {
  attributes: SearchResponseIncludedAttributesPartial,
}