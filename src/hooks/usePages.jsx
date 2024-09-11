/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react"
import { Page1 } from "../pages/page1"

export function usePages() {
  const [page, setPage] = useState(1)
  const choosePage = () => {
    if (page === 1) {
      return (
        <Page1 changePage={() => setPage(page + 1)} />
      )
    } else if (page === 2) {
      return (
        <h1>Hola 2!!!</h1>
      )
    }
  }
  return { choosePage }
}