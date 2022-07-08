import { Formik, Form, ErrorMessage } from 'formik';
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox'
import RadioButton from './components/RadioButton'
import Select from './components/Select'

const validate = (values) => {
  const errors = {}
    if(!values.name) {
      errors.name = 'El nombre es requerido'
    } else if (values.name.length < 5) {
      errors.name = 'El nombre es muy corto'
    }
    if(!values.lastName) {
      errors.lastName = 'El apellido es requerido'
    } else if (values.lastName.length < 5) {
      errors.lastName = 'El apellido es muy corto'
    }
    if(!values.email) {
      errors.email = 'El email es requerido'
    } else if (values.email.length < 5) {
      errors.email = 'El email es muy corto'
    }
    if(!values.radio) {
      errors.radio = 'Seleccione un Puerco'
    }
  return errors
}

function App() {
  return (
    <Formik
      initialValues={ { name: '', lastName: '', email: '', puerco:'', radio:'' } }
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form> 
        <TextInput name='name' label='Nombre '/>
        <br />
        <TextInput name='lastName' label='Apellido '/>
        <br />
        <TextInput name='email' label='Email '/>
        <br />
        <Select label='Tipo de Puerco' name='puerco'>
          <option name='select' value=''>Seleccione el puerco que eres</option>
          <option name='select' value='feliz'>Puerco Alegre *,*</option>
          <option name='select' value='triste'>Puerco Tiste u,u</option>
          <option name='select' value='enojado'>Puerco Enojaoo 0.o</option>
        </Select>
        <br />
        <RadioButton name='radio' value='Puerco1' label='Puerco Alegre' />
        <RadioButton name='radio' value='Puerco2' label='Puerco Triste' />
        <RadioButton name='radio' value='Puerco3' label='Puerco Enojado' />
        <ErrorMessage name='radio' />
        <br />
        <Checkbox name='accept'>
          Aceptar terminos y condiciones
        </Checkbox>
        <br />
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
