import React from 'react'
import { useDispatch } from 'react-redux'
import { removeKeyword } from './searchSlice'

type Props = { value: string }

export const Keyword = (props: Props) => {
  const dispatch = useDispatch()

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log(props.value)
    dispatch(removeKeyword(props.value))
  }

  return <span className="inline-flex items-center gap-x-0.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
    {props.value}
    <button onClick={handleRemove} type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20">
      <span className="sr-only">Remove</span>
      <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-gray-700/50 group-hover:stroke-gray-700/75">
        <path d="M4 4l6 6m0-6l-6 6" />
      </svg>
      <span className="absolute -inset-1" />
    </button>
  </span>
}

export const Keywords = (props: { keywords: string[] }) => {
  const renderKeywords = () => props.keywords.map(w => <Keyword key={w} value={w} />)

  return <div className="flex flex-wrap gap-1 mt-1">
    {renderKeywords()}
  </div>
}