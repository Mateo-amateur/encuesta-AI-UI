import './Page1.css'

// eslint-disable-next-line react/prop-types
export function Page1({ changePage }) {
  return (
    <form className='form' action="" onSubmit={(e) => {
      e.preventDefault()
      changePage()
    }}>
      <h3>Información personal</h3>
      <label className="question">
        Nombre y Apellido:
        <input type="text" name="name" placeholder="Juan" required />
        <input type="text" name="last_name" placeholder="Perez" required />
      </label>
      <label className='question'>
        Edad
        <input type="number" name="edge" placeholder="34 años" required />
      </label>
      <input type="submit" value="Siguiente" />
    </form>
  )
}