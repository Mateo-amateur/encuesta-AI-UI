import { useState } from 'react'
import './App.css'
import { Page1 } from './pages/page1'

function App() {
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
  return (
    <main>
      {choosePage()}
    </main>
  )
}

export default App
