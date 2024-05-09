import React from 'react'
import * as Yup from 'yup'

const SignupValidation = Yup.object({
    email:Yup.string().email("Please enter the email").required("please enter the email"),
    password:Yup.string().min(5).required('please enter the password')

})

export default SignupValidation