import React, { useRef } from 'react'
import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { addKeyword } from './searchSlice'

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

  return <form ref={formRef} onSubmit={handleSubmit}>
    <input type='text' ref={keywordRef} onKeyDown={handleKeyDown} />
  </form>
}