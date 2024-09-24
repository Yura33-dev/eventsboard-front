import { useId, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { FormikHelpers, useFormik } from 'formik';
import { Dayjs } from 'dayjs';
import { registerSchema } from '../validation/eventRegistrationFormValidation';
import { useCreateRegistrationMutation } from '../redux/api';

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Snackbar,
  SnackbarCloseReason,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

interface IFormikValues {
  fullName: string;
  email: string;
  birthDate: Dayjs | null;
  heardFrom: string;
}

interface ISnackbar {
  open: boolean;
  message: string;
  severity: 'success' | 'error';
}

const EventRegistrationForm = () => {
  const [snackbar, setSnackbar] = useState<ISnackbar>({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar((state) => ({ ...state, open: false, message: '' }));
  };

  const [createRegistration, { isLoading }] = useCreateRegistrationMutation();
  const { eventId } = useParams();

  const fullNameFieldId = useId();
  const emailFieldId = useId();

  const initValues: IFormikValues = {
    fullName: '',
    email: '',
    birthDate: null,
    heardFrom: '',
  };

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: registerSchema,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(
    values: IFormikValues,
    actions: FormikHelpers<IFormikValues>,
  ) {
    if (eventId) {
      const prepeareBody = {
        ...values,
        eventId,
      };
      const response = await createRegistration(prepeareBody);
      if (response.data) {
        actions.resetForm();
        setSnackbar({
          open: true,
          message: 'You have been register on event successfully',
          severity: 'success',
        });
      } else if (response.error) {
        if ('data' in response.error) {
          const errorData = response.error as FetchBaseQueryError & {
            data: { data: { message: string } };
          };
          setSnackbar({
            open: true,
            message:
              errorData.data?.data?.message ??
              'Some error occured. Please, reload the page and try again',
            severity: 'error',
          });
        }
      }
    }
  }

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <TextField
        id={fullNameFieldId}
        name="fullName"
        label="Full Name"
        type="text"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
        helperText={formik.touched.fullName && formik.errors.fullName}
        required
        fullWidth
      />

      <TextField
        id={emailFieldId}
        name="email"
        label="Email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        fullWidth
        required
      />

      <DatePicker
        label="Date of birth"
        value={formik.values.birthDate}
        onChange={(newValue) => formik.setFieldValue('birthDate', newValue)}
        slotProps={{
          textField: {
            fullWidth: true,
            margin: 'normal',
            error: formik.touched.birthDate && Boolean(formik.errors.birthDate),
            helperText: formik.touched.birthDate && formik.errors.birthDate,
          },
        }}
      />

      <FormControl component="fieldset">
        <FormLabel id="heardFrom">
          Where did you hear about this event?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="row-radio-buttons-group-heard-from"
          name="heardFrom"
          value={formik.values.heardFrom}
          onChange={formik.handleChange}
          sx={{ flexDirection: 'column' }}
        >
          <FormControlLabel
            value="social media"
            control={<Radio />}
            label="Social Media"
          />
          <FormControlLabel
            value="friends"
            control={<Radio />}
            label="Friends"
          />
          <FormControlLabel
            value="found myself"
            control={<Radio />}
            label="Found myself"
          />
        </RadioGroup>

        {formik.touched.heardFrom && formik.errors.heardFrom ? (
          <FormHelperText error>{formik.errors.heardFrom}</FormHelperText>
        ) : null}
      </FormControl>

      <Button
        color="primary"
        variant="contained"
        type="submit"
        disabled={isLoading}
        sx={{ margin: '0 auto', padding: '8px 32px' }}
      >
        {isLoading ? (
          <CircularProgress sx={{ color: 'secondary.main' }} />
        ) : (
          'Register'
        )}
      </Button>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%', color: 'white' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EventRegistrationForm;
