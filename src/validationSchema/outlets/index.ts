import * as yup from 'yup';

export const outletValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().nullable(),
  opening_hours: yup.string().nullable(),
  closing_hours: yup.string().nullable(),
  day_of_operation: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
