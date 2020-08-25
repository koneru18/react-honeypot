import * as Yup from 'yup';

// const schema = Yup.object().shape({
//     username: Yup.string()
//       .min(5, 'Minimum 5 characters are required')
//       .required('Username is required'),
//     password: Yup.string()
//       .min(6, 'Minimum 6 characters are required')
//       .matches(/(?=.*[a-zA-Z])/, 'Must contain atleast one letter')
//       .matches(/(?=.*[0-9])/, 'Must contain atleast one number')
//       .required('Password is required'),
//   });

export const InitialValues = {
  name: 'test',
  email: 'test@gmail.com',
  userName: 'test123',
  password: 'admin123',
  confirmPassword: 'admin123',
  honeypotEmail: '',
  honeypotUsername: 'username',
  honeypotPassword: '',
};

export const schema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'minimum 2 characters'),
  email: Yup.string().email()
    .required('Email is required'),
  userName: Yup.string()
    .min(5, 'minimum 5 characters')
    .required('User Name is required')
    .matches(/^[a-z0-9]+$/i, 'Special characters are not allowed'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters')
    .matches(/(?=.*[a-zA-Z])/, ' Must contain atleast one letter')
    .matches(/(?=.*[0-9])/, 'Must contain atleast one number')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  honeypotEmail: Yup.string().email(),
  honeypotUsername: Yup.string(),
  honeypotPassword: Yup.string(),
});

// export const InitialValues = schema.cast();


// export default schema;
