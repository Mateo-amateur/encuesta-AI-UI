import { useState } from "react"
import { Page1 } from "../pages/page1"
import { Page2 } from "../pages/Page2"

export function usePages() {
  const [page, setPage] = useState(1)
  const changePage = () => setPage(page + 1)
  const choosePage = () => {
    if (page === 1) {
      return (
        <Page1 changePage={changePage} />
      )
    } else if (page === 2) {
      return (
        <Page2 changePage={changePage} />
      )
    }
  }
  return { choosePage }
}