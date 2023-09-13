import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rental_start_date: yup.date().nullable(),
  rental_end_date: yup.date().nullable(),
  rental_status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  tool_id: yup.string().nullable().required(),
});
