import './Page2.css'
import jsonQuestions from '../questions.json'
import { useState } from 'react'

export function Page2({ changePage, changeData }) {
  const listQuestions = jsonQuestions.questions
  const letters = ["a", "b", "c", "d"]
  const [error, setError] = useState('')

  const showError = ({ msg }) => {
    setError(msg)
  }

  return (
    <form className='form' action="" onSubmit={(e) => {
      e.preventDefault()
      const questions = document.querySelectorAll(".question")
      let isAllData = true
      let info = {}
      for (const q of questions) {
        try {
          const input = q.querySelector('input[type="radio"]:checked')
          if (input) {
            const inputId = input.id.split('-')[1]
            info[q.id] = parseInt(inputId)
          } else isAllData = false
        } catch {
          isAllData = false
        }
      }

      if (isAllData) {
        changeData({ info })
        changePage()
      } else {
        showError({ msg: 'Elige una respuesta para todas las preguntas' })
      }
    }}>
      {
        listQuestions.map(q => {
          return (
            <div className="question" key={q.id} id={`response${q.id}`}>
              <p>{q.question}</p>
              {q.options.map(o => {
                return (
                  <div className='option'>
                    <input type="radio" name={`question${letters[q.id]}`} id={`${letters[q.id]}-${o.value}`} />
                    <label htmlFor={`${letters[q.id]}-${o.value}`}>{o.value}) {o.text}</label>
                  </div>
                )
              })}
            </div>
          )
        })
      }
      <span className='error'>{error}</span>
      <input type="submit" name="send" id="send" />
    </form>
  )
}