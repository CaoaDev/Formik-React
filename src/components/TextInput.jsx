import { useField } from "formik"

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return(
    <div className='control'>
      <label className='label'>{label}</label>
      <input className='input' {...field} {...props}/>  {/* se agrega props por si quieres tener un onChange */}
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </div>
  )
}

export default TextInput
