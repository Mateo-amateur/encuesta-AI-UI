import { useState } from "react"
import { Page1 } from "../pages/Page1.jsx"
import { Page2 } from "../pages/Page2.jsx"
import { Page3 } from "../pages/Page3.jsx"

export function usePages() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState({})

  const getData = () => {
    return data
  }

  const resetSurvey = () => {
    setData({})
    setPage(1)
  }

  const changePage = () => setPage(page + 1)

  const changeData = ({ info }) => {
    setData(Object.assign({}, data, info))
  }

  const choosePage = () => {
    if (page === 1) {
      return (
        <Page1 changePage={changePage} changeData={changeData} />
      )
    } else if (page === 2) {
      return (
        <Page2 changePage={changePage} changeData={changeData} getData={getData} />
      )
    } else {
      return (
        <Page3 resetSurvey={resetSurvey} />
      )
    }
  }
  return { choosePage }
}