import './App.css'
import { Header } from './components/Header'
import { usePages } from "./hooks/usePages"

function App() {
  const { choosePage } = usePages()
  return (
    <>
      <Header />
      <main>
        {choosePage({ info: '' })}
      </main>
    </>
  )
}

export default App
