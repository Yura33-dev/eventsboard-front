import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Full name should have 2 letters at least')
    .max(25, 'Full name should have 25 letters max')
    .required('Full name is a required field'),

  email: Yup.string()
    .email('Please, specify email in correct way')
    .min(5, 'Please, specify email in correct way')
    .max(30, 'Please, specify email in correct way')
    .required('Email is a required field'),

  birthDate: Yup.date().required('Birth date is a required field'),

  heardFrom: Yup.string().required(
    'Plase, specify how did you hear about event',
  ),
});
