import './Page1.css'
import { useState } from 'react'
import { checkData } from '../logic/checkDataFromForm.js'

// eslint-disable-next-line react/prop-types
export function Page1({ changePage, changeData }) {
  const [error, setError] = useState('')

  const showError = ({ msg }) => {
    setError(msg)
  }
  return (
    <form className='form' action="" onSubmit={async (e) => {
      e.preventDefault()
      const info = Object.fromEntries(
        new FormData(e.target)
      )

      const isValid = await checkData({ name: info.name, lastName: info.last_name })

      if (isValid) {
        changeData({ info })
        changePage()
      } else {
        showError({ msg: 'Este nombre y apellido están registrados' })
      }
    }}>
      <h3>Información personal</h3>
      <label className="question">
        Nombre y Apellido:
        <input type="text" name="name" placeholder="Juan" required />
        <input type="text" name="last_name" placeholder="Perez" required />
        <span className='error'>{error}</span>
      </label>
      <label className='question'>
        Edad
        <input type="number" name="edge" placeholder="34 años" required />
      </label>
      <input type="submit" value="Siguiente" />
    </form>
  )
}