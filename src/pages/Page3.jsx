import './Page3.css'

export function Page3({ resetSurvey }) {
  return (
    <div className="lastPage">
      <h1>Registro realizado correctamente</h1>
      <p>Gracias por completar la encuesta.</p>
      <button onClick={resetSurvey}>Volver al inicio</button>
    </div>
  )
}