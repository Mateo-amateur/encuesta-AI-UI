import './Page1.css'
import { useState } from 'react'
import { checkData } from '../logic/checkDataFromForm.js'
import { TailSpin } from 'react-loader-spinner'
import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
export function Page1({ changePage, changeData }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const showError = ({ msg }) => {
    setError(msg)
  }

  useEffect(() => {
    if (error) {
      setLoading(false)
    }
  }, [error])

  const handleChange = async (e) => {
    setLoading(true)
    e.preventDefault()
    const info = Object.fromEntries(
      new FormData(e.target)
    )

    const isNameUnique = await checkData({ name: info.name, lastName: info.last_name })

    const isValidEdge = 5 < info.edge && info.edge < 120

    if (isNameUnique && isValidEdge) {
      changeData({ info })
      changePage()
      setLoading(true)
    } else {
      if (!isNameUnique) showError({ msg: 'Este nombre y apellido están registrados' })
      if (!isValidEdge) showError({ msg: 'No es una edad válida' })
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
      <h3>Información personal</h3>
      <label className="question">
        Nombre y Apellido:
        <input autoComplete='false' type="text" name="name" placeholder="Juan" required />
        <input autoComplete='false' type="text" name="last_name" placeholder="Perez" required />
        <span className='error'>{error}</span>
      </label>
      <label className='question'>
        Edad
        <input autoComplete='false' type="number" name="edge" placeholder="34 años" required />
      </label>
      <input type="submit" value="Siguiente" />
    </form>
  )
}