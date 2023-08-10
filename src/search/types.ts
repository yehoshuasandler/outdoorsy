export type SearchRequest = {
  filterKeywords: string[],
  limit: number,
  offset: number,
}

export type SearchResponse = {
  data: unknown[]
}