import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, Form, Container, Row , Col } from 'react-bootstrap';
// Formik and yup  validation
import { useFormik } from 'formik';
import * as Yup from "yup";

function App() {

  const {values, handleChange, handleSubmit, errors, handleBlur, touched} = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(10, "Must be 10 characters or less").required("Required"),
      lastName: Yup.string().max(10, "Must be 10 characters or less").required("Required"),
      email: Yup.string().email("email is not valid").required("Required"),
      password: Yup.string().max(10, "Must be 10 characters or less").required("Required"),
      confirmPassword: Yup.string().oneOf([Yup.ref("password")],"passwords do not match").required("required line"),

    }),
    onSubmit: (values) => {
      console.log("Sent data", values);
    }
  })
  console.log("🚀 ~ file: App.jsx ~ line 25 ~ App ~ errors", errors)


  return (
    <>
      <Container>
        <Row>
          <Col md={{span: 4, offset: 4}} className="mt-2">
            <div className='h3'>Create account</div>
            <p className='text-muted'>Lorem ipsum, dolor sit amet consectetur.</p>
              <form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                <Form.Label htmlFor="firstName">Name</Form.Label>
                    <Form.Control  
                      type="text" 
                      id="firstName" 
                      name="firstName"
                      value={values.firstName} 
                      onChange={handleChange}
                      onBlur={handleBlur} 
                    />
                    {
                      (errors.firstName && touched.firstName) ? 
                        <p className=' text-danger font-weight-bold' variant="danger" >{errors.firstName}</p> :
                          null
                    }
                </Form.Group>

                <Form.Group className="mb-3" >
                <Form.Label htmlFor="lastName">Last Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      id="lastName" 
                      name="lastName"
                      value={values.lastName} 
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                    />
                    {
                    (errors.lastName && touched.lastName) ?
                      <p className=' text-danger font-weight-bold' variant="danger" >{errors.lastName}</p> :
                        null
                    }
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control 
                  type="email" 
                  id="email" 
                  name="email"
                  value={values.email} 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                />
                  {
                  (errors.email && touched.email) ?
                    <p className=' text-danger font-weight-bold' variant="danger" >{errors.email}</p> :
                      null
                  }

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control 
                  type="password" 
                  id="password" 
                  name="password"
                  value={values.password} 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                />
                {
                  (touched.password && errors.password) ? 
                    <p className=' text-danger font-weight-bold' variant="danger" >{errors.password}</p> :
                      null
                }
                </Form.Group>    

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="password">Confirm Password</Form.Label>
                <Form.Control 
                  type="confirmPassword" 
                  id="confirmPassword" 
                  name="confirmPassword"
                  value={values.confirmPassword} 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                />
                {
                  (touched.confirmPassword && errors.confirmPassword) ? 
                    <p className=' text-danger font-weight-bold' variant="danger" >{errors.confirmPassword}</p> :
                      null
                }
                </Form.Group>    

                <Button variant="primary" type="submit">
                  Sign up
                </Button>
                <p className='mt-3'>
                    <small className='text-muted'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, esse.
                    </small>
                </p>
              </form>
          </Col>
            
        </Row>
    </Container>
    </>
  )
}

export default App
