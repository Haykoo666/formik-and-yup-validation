import { useState } from 'react'
import { Button, Form, Container, Row , Col } from 'react-bootstrap';
  // Formik and yup  validation
import { useFormik } from 'formik';
import * as Yup from "yup";

import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Name must be at least 2 characters long')
      .max(40, 'Name cannot be longer than 40 characters')
      .required('Name is required'),
    lastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters long')
      .max(50, 'Last name cannot be longer than 50 characters')
      .required('Last name is required'),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])/,
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
      ),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")],"passwords do not match").required("required line"),
  })

  const {values, handleChange, handleSubmit, errors, handleBlur, touched} = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema,
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
                  type="password" 
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
