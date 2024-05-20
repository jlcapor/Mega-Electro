"use client"
import { Icons } from '@/components/icons'
import { PasswordInput } from '@/components/password-input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signupSchema } from '@/lib/validations/auth'
import { api } from "@/trpc/react";
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

type Inputs = z.infer<typeof signupSchema>
export default function SignUpForm() {

  const form = useForm<Inputs>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      role: 'USER'
    }
  })
  const { handleSubmit, reset } = form

  const createUser = api.auth.create.useMutation({
    onSuccess: () => {
      reset();
      toast.success("Usuario creada con éxito!")
    },
    onError: (error) => {
      toast.error(error.message)
    }
  });

  async function onSubmit(data: Inputs) {
    createUser.mutate({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role
    })
  }
  return (
    <Form {...form}>
       <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tu nombre</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Nombres y apellidos"
                    {...field}
                    
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Email de Registro"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="**********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="password_confirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repetir Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="**********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <Button className="mt-2" disabled={createUser.isPending}>
          {createUser.isPending && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
            Registrarme
            <span className="sr-only">Continue to email verification page</span>
        </Button>
       </form>
    </Form>
  )
}
