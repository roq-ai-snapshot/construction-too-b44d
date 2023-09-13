import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().nullable(),
  brand: yup.string().nullable(),
  model: yup.string().nullable(),
  availability_status: yup.boolean().nullable(),
  outlet_id: yup.string().nullable().required(),
});
