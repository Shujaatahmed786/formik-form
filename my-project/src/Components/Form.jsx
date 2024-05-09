import React from "react";
import { useFormik, Formik, Form, Field } from "formik";
import SignupValidation from "./SignupValidation";
import { string, array, number, object } from 'yup'


const SignupFormSchema = object({

  email: string().email().required("please enter the email"),
  password: string().min(5).required('please enter the password')

})

const initialValues = {
  email: "",
  password: "",
};




const SignupForm = () => 
  {
  const { values, handleSubmit, handleBlur, handleChange, errors, touched } = useFormik({
    initialValues: initialValues,
    onSubmit: (val) => {
console.log(val)
    },
    validationSchema: SignupFormSchema


  })
console.log(errors)


  return (
    <div className="flex flex-col gap-2 h-64 justify-center items-center">
      {/* <Formik
        initialValues={initialValues}
        validationSchema={SignupValidation}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors }) => (
          <Form>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input type="text" value={values.email} onChange={on} />
           
              {errors.email && <small>{errors.email}</small>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              {errors.password && <small>{errors.password}</small>}
            </div>
            <div>
              <button type="submit" className="p-4 border-2 border-solid ">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik> */}

      <form onSubmit={handleSubmit}>


        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input type="text" value={values.email} onChange={handleChange} onBlur={ handleBlur} name="email" />

          {errors.email && <small>{errors.email}</small>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input type="password" value={values.password} onChange={handleChange} onBlur={ handleBlur} name="password" />

          {errors.password && <small>{errors.password}</small>}
        </div>
        <div>
          <button type="submit" className="p-4 border-2 border-solid ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
