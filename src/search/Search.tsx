import React, { useRef } from 'react'
import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { addKeyword } from './searchSlice'
import { Keywords } from './Keyword'

export const Search = () => {
  const { filterKeywords } = useSelector((state: RootState) => state.search)
  const dispatch = useDispatch()

  const keywordRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const keyword = keywordRef?.current?.value
    if (!keyword) return

    dispatch(addKeyword(keyword))
    keywordRef.current.value = ''
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const keysMimickingSubmit = [" ", ","]

    if (keysMimickingSubmit.includes(e.key)) {
     formRef.current?.requestSubmit()
    }
  }
  

  return <form ref={formRef} onSubmit={handleSubmit} className='relative'>
    <label
        htmlFor="search"
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
      >
        Search
      </label>
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Relaxing, sun soaked, etc."
        onKeyDown={handleKeyDown}
        ref={keywordRef}
      />
    {/* <input type='text' ref={keywordRef} onKeyDown={handleKeyDown} className=' text-slate-950' /> */}
    <Keywords keywords={filterKeywords} />
  </form>
}