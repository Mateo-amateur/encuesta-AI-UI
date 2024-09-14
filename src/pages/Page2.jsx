import './Page2.css'
import jsonQuestions from '../questions.json'

export function Page2({ changePage, changeData }) {
  const listQuestions = jsonQuestions.questions
  const letters = ["a", "b", "c", "d"]
  return (
    <form className='form' action="" onSubmit={(e) => {
      e.preventDefault()
      const questions = document.querySelectorAll(".question")
      let info = {}
      for (const q of questions) {
        const input = q.querySelector('input[type="radio"]:checked')
        if (input) {
          const inputId = input.id.split('-')[1]
          info[q.id] = parseInt(inputId)
        }
      }

      console.log(info);


      changeData({ info })

      changePage()
    }}>
      {
        listQuestions.map(q => {
          return (
            <div className="question" key={q.id} id={`response${q.id}`}>
              <p>{q.question}</p>
              {q.options.map(o => {
                return (
                  <div className='option'>
                    <input required type="radio" name={`question${letters[q.id]}`} id={`${letters[q.id]}-${o.value}`} />
                    <label htmlFor={`${letters[q.id]}-${o.value}`}>{o.value}) {o.text}</label>
                  </div>
                )
              })}
            </div>
          )
        })
      }
      <input type="submit" name="send" id="send" />
    </form>
  )
}