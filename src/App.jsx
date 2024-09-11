import './App.css'
import { usePages } from "./hooks/usePages"

function App() {
  const { choosePage } = usePages()
  return (
    <main>
      {choosePage()}
    </main>
  )
}

export default App
