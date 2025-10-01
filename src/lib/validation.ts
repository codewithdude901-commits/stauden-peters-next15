import { z } from 'zod'

// Define a schema for the EnquiryFormSchema
export const EnquiryFormSchemaEN = z.object({
  name: z.string().min(1, { error: 'this field is required' }),
  email: z.email({ error: 'invalid email address' }),
  message: z
    .string()
    .min(1, { message: 'this field is required' })
    .max(300, { message: 'you have reached characters limit.' }),
  telephone: z.string().refine((value) => /^\d{10,11}$/.test(value), {
    message: 'please check the contact number entered',
  }),
})

export const EnquiryFormSchemaDE = z.object({
  name: z.string().min(1, { message: 'Dieses Feld ist erforderlich' }),

  email: z.email({ error: 'Ungültige E-Mail-Adresse' }),
  message: z
    .string()
    .min(1, { message: 'Dieses Feld ist erforderlich' })
    .max(300, { message: 'you have reached characters limit.' }),
  telephone: z.string().refine((value) => /^\d{10,11}$/.test(value), {
    message: 'Ungültige Telefonnummer',
  }),
})

export type TEnquiryFormSchema = z.infer<typeof EnquiryFormSchemaEN>
// export type TEnquiryFormSchemaDE = z.infer<typeof EnquiryFormSchemaDE>
