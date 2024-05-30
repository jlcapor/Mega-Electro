"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { z } from "zod"
import { signIn } from 'next-auth/react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/password-input"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { signinSchema } from "@/lib/validations/auth"
import { useRouter } from "next/navigation"
import { toast } from "sonner"


type Inputs = z.infer<typeof signinSchema>

export default function SignInForm() {
  const router= useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

 
   const form = useForm<Inputs>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const handleLogin = async (formData: Inputs) => { 
    setIsLoading(true)
    const callback = await signIn('credentials', {
      ...formData,
      redirect: false,
    });
    setIsLoading(false);
    if (callback?.ok) {
      router.push('/');
      router.refresh();
    }
    if (callback?.error) {
      toast.error(callback.error);
    }
  }
  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(handleLogin)}>
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="rodneymullen180@gmail.com"
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

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Iniciar Sesión
          <span className="sr-only">Iniciar Sesión</span>
        </Button>
      </form>
    </Form>
  )
}
