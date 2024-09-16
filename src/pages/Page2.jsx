import './Page2.css'
import jsonQuestions from '../questions.json'
import { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useEffect } from 'react'
import { postRegister } from '../logic/postRegister.js'

export function Page2({ changePage, getData }) {
  const listQuestions = jsonQuestions.questions
  const letters = ["a", "b", "c", "d"]
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [indexQuestion, setIndexQuestion] = useState(1)

  useEffect(() => {
    if (error) setLoading(false)
  }, [error])

  const showError = ({ msg }) => {
    setError(msg)
  }

  useEffect(() => {
    const formerQuestion = document.getElementById(`response${indexQuestion - 1}`)
    const question = document.getElementById(`response${indexQuestion}`)
    if (question) {
      if (formerQuestion) formerQuestion.style.display = 'none'
      question.style.display = 'flex'
    }
  }, [indexQuestion])

  const handleChange = async (e) => {
    e.preventDefault()
    const newIndex = indexQuestion + 1
    if (document.querySelector(`#response${indexQuestion} input[type="radio"]:checked`)) {
      setIndexQuestion(newIndex)
    }
    if (indexQuestion === listQuestions.length) {
      setLoading(true)
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
        let data = getData()
        data = Object.assign({}, data, info)
        await postRegister({ data })
        setLoading(false)
        changePage()
      } else {
        showError({ msg: 'Elige una respuesta para todas las preguntas' })
      }
    }
  }

  return (
    <form className='form' action="" onSubmit={handleChange}>
      <div style={{ display: loading ? 'flex' : 'none' }} className='spinner__wrapper'>
        <TailSpin
          className="spinner"
          visible={true}
          color="#ffb300"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          wrapperClass=""
        />
      </div>
      {
        listQuestions.map(q => {
          return (
            <div style={{ display: 'none' }} className="question" key={q.id} id={`response${q.id}`}>
              <p>{q.question}</p>
              {q.options.map(o => {
                return (
                  <div key={`${letters[q.id]}-${o.value}`} className='option'>
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