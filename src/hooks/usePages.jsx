import { useState } from "react"
import { Page1 } from "../pages/page1"
import { Page2 } from "../pages/Page2"
import { useRef } from "react"

export function usePages() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState({})
  const changeData = ({ info }) => {
    setData(Object.assign({}, data, info))
  }
  const changePage = () => setPage(page + 1)
  const choosePage = () => {
    if (page === 1) {
      return (
        <Page1 changePage={changePage} changeData={changeData} />
      )
    } else if (page === 2) {
      return (
        <Page2 changePage={changePage} changeData={changeData} />
      )
    } else {
      return (
        <h1>Registro realizado exitosamente</h1>
      )
    }
  }
  return { choosePage }
}