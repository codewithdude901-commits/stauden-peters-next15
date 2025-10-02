'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { EnquiryFormSchemaEN, EnquiryFormSchemaDE, TEnquiryFormSchema } from '@/lib/validation'
import { toast } from 'sonner'

const EnquiryForm = ({ locale }: { locale: string }) => {
  const [isUploading, setIsUploading] = useState(false)

  const form = useForm<TEnquiryFormSchema>({
    resolver: zodResolver(locale === 'en' ? EnquiryFormSchemaEN : EnquiryFormSchemaDE),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      telephone: '',
    },
  })

  async function handleForm(data: TEnquiryFormSchema) {
    try {
      setIsUploading(true)

      const payload = {
        fullName: data.name ?? data.name ?? '',
        email: data.email,
        phone: data.telephone ?? '',
        notes: data.message ?? '',
        locale,
        hp: '', // honeypot must be empty
      }

      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error || 'Submission failed')
      }

      form.reset()
      toast.success(locale === 'en' ? 'Form submitted — thank you!' : 'Formular gesendet — danke!')
    } catch (err: any) {
      console.error(err)
      toast.error(locale === 'en' ? `Error: ${err?.message}` : `Fehler: ${err?.message}`)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleForm)}>
          <div className=" flex flex-col gap-4 m-auto">
            {/*  Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground text-sm xl:text-base">
                    {locale === 'en' ? 'Full Name' : 'Vollständiger Name'}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="placeholder:text-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground text-sm xl:text-base">
                    {locale === 'en' ? 'Email' : 'E-mail'}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="hello@123.com" {...field} className="placeholder:text-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Telephone */}
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground text-sm xl:text-base">
                    {locale === 'en' ? 'Telephone' : 'Telefon'}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={locale === 'en' ? 'contact number here' : 'Kontaktnummer hier'}
                      type="number"
                      {...field}
                      className="placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground text-sm xl:text-base">
                    {locale === 'en' ? 'Message' : 'Nachricht'}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={
                        locale === 'en'
                          ? 'Feel free to write your comments, doubts, suggestions etc.'
                          : 'Sie können uns gerne Ihre Kommentare, Zweifel, Vorschläge usw. mitteilen.'
                      }
                      {...field}
                      className="placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="bg-priColor hover:bg-blue-600 cursor-pointer xl:text-base"
              type="submit"
              disabled={isUploading}
            >
              {locale === 'en' ? 'Submit' : 'Einreichen'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default EnquiryForm
