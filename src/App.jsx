import './App.css'
import { usePages } from "./hooks/usePages"

function App() {
  const { choosePage } = usePages()
  return (
    <main>
      {choosePage({ info: '' })}
    </main>
  )
}

export default App
