import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import './Style/App.css'
import './Style/reset.css'
// Toast message
import { toast } from 'react-toastify';
// Validation
import { Formik } from 'formik'
import * as yup from "yup"
// Bootstrap
import { Button, Container, Form } from 'react-bootstrap';


function App() {

  const validationSchema = yup.object().shape({
    name: yup.string().typeError("Must be string").required("required line"),
    lastName: yup.string().typeError("Must be string").required("required line"),
    password: yup.string().typeError("Must be string").required("required line"),
    confirmPassword: yup.string().oneOf([yup.ref("password")],"passwords do not match").required("required line"),
    email: yup.string().email("email is not valid").required("required line"),
    confirmEmail: yup.string().email("email is not valid").oneOf([yup.ref("email")],"email do not match").required("required line"),
  });
  
  return (
    <div className="App">

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Formik
        initialValues={{
          name: "",
          lastName: "",
          password: "",
          confirmPassword: "",
          email: "",
          confirmEmail: ""
        }}
        validationSchema={validationSchema}
        validateOnBlur
        onSubmit={(val) => console.log(val)}
      >
        {
          ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => {
            return (
              <>
                <Container>
                <div className='h3'>Create account</div>
                <p className='text-muted'>Lorem ipsum, dolor sit amet consectetur.</p>
                  <Form className="form">
                    
                        {/* Input Name */}
                    <Form.Group className="mb-3" >
                      <Form.Control 
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.name}
                      / >
                    </Form.Group>
                        <p className="error--message">
                          {touched.name && errors.name && errors.name }
                        </p>

                       {/* Input last name */}
                    <Form.Group className="mb-3" >
                      <Form.Control 
                        type="text" 
                        placeholder="Last name" 
                        name="lastName" 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.lastName}
                      />
                    </Form.Group>
                        <p className="error--message">
                          {touched.lastName && errors.lastName && errors.lastName }
                        </p>

                       {/* Input password */}
                    <Form.Group className="mb-3" >
                      <Form.Control 
                        type="password"
                        placeholder="Password" 
                        name="password" 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                        <p className="error--message">
                          {touched.password && errors.password && errors.password }
                        </p>

                        {/* Input confirm password */}
                    <Form.Group className="mb-3" >
                      <Form.Control 
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                        <p className="error--message">
                          {touched.confirmPassword && errors.confirmPassword && errors.confirmPassword }
                        </p>

                        {/* Input email */}
                    <Form.Group className="mb-3" >
                      <Form.Control 
                        type="email"
                        name="email" 
                        placeholder="Enter email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                        <p className="error--message">
                          {touched.email && errors.email && errors.email }
                        </p>

                        {/* Input email */}
                    <Form.Group className="mb-3" >
                      <Form.Control 
                        type="email"
                        placeholder="Confirm email"
                        name="confirmEmail"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                          <p className="error--message">
                            {touched.confirmEmail && errors.confirmEmail && errors.confirmEmail }
                          </p>
                    </Form.Group>
                        {/* Checkbox */}
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={!isValid && !dirty} onClick={handleSubmit}>
                      Submit
                    </Button>
                  </Form>
                </Container>
              </>
            )

          }
        }
      </Formik>
    </div>
  )
}

export default App
