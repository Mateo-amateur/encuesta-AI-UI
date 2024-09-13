import './Page2.css'

export function Page2({ changePage, changeData }) {
  return (
    <form className='form' action="" onSubmit={(e) => {
      e.preventDefault()
      const questions = document.querySelectorAll(".question")
      let info = {}
      for (const q of questions) {
        const input = q.querySelector('input[type="radio"]:checked')
        if (input) {
          const inputId = input.id.split('-')[1]
          info[q.id] = inputId
        }
      }

      console.log(info);


      changeData({ info })

      changePage()
    }}>
      <div className="question" id='questionA'>
        <p>¿Qué efecto tendrá la Inteligencia artificial en tu vida?</p>
        <div className='option'>
          <input type="radio" name='questionA' id="a-1" />
          <label htmlFor="a-1">1) Muy positivo</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionA' id="a-2" />
          <label htmlFor="a-2">2) Positivo</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionA' id="a-3" />
          <label htmlFor="a-3">3) Sin ningún efecto</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionA' id="a-4" />
          <label htmlFor="a-4">4) Negativo</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionA' id="a-5" />
          <label htmlFor="a-5">5) Muy negativo</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionA' id="a-6" />
          <label htmlFor="a-6">6) No sé</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionA' id="a-7" />
          <label htmlFor="a-7">7)	Prefiero no contestar </label>
        </div>
      </div>
      <div className="question" id='questionB'>
        <p>¿Utilizas la Inteligencia artificial para realizar tareas/trabajos?</p>
        <div className='option'>
          <input type="radio" name='questionB' id="b-1" />
          <label htmlFor="b-1">1) Sí</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionB' id="b-2" />
          <label htmlFor="b-2">2) No, pero planeo hacerlo</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionB' id="b-3" />
          <label htmlFor="b-3">3) No y no planeo hacerlo</label>
        </div>
      </div>
      <div className="question" id='questionC'>
        <p>¿Cómo afectará a los empleos?</p>
        <div className='option'>
          <input type="radio" name='questionC' id="c-1" />
          <label htmlFor="c-1">1) Creará más empleos</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionC' id="c-2" />
          <label htmlFor="c-2">2)	No tendrá impacto en los empleos</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionC' id="c-3" />
          <label htmlFor="c-3">3)	Reducirá los empleos</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionC' id="c-4" />
          <label htmlFor="c-4">4)	No, sé</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionC' id="c-5" />
          <label htmlFor="c-5">5)	Prefiero no contestar</label>
        </div>
      </div>
      <div className="question" id='questionD'>
        <p>¿Cómo afectará a la seguridad social?</p>
        <div className='option'>
          <input type="radio" name='questionD' id="d-1" />
          <label htmlFor="d-1">1)	Aumentará la seguridad.</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionD' id="d-2" />
          <label htmlFor="d-2">2)	No tendrá impacto en la seguridad.</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionD' id="d-3" />
          <label htmlFor="d-3">3)	Disminuirá levemente la seguridad</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionD' id="d-3" />
          <label htmlFor="d-3">4)	Disminuirá gravemente la seguridad </label>
        </div>
        <div className='option'>
          <input type="radio" name='questionD' id="d-5" />
          <label htmlFor="d-5">5)	No, sé</label>
        </div>
        <div className='option'>
          <input type="radio" name='questionD' id="d-6" />
          <label htmlFor="d-6">6)	Prefiero no contestar</label>
        </div>
      </div>
      <input type="submit" name="send" id="send" />
    </form>
  )
}