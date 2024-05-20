import { useModalStore } from '@/stores/modalStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from "sonner"
import { z } from 'zod'
import { GenericModal } from '../GenericModal'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Logo } from '../Logo/Logo'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { DialogFooter } from '../ui/dialog'

const passwordRegexp = new RegExp(/(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)

const formSchema = z.object({
  name: z.string().min(3).max(64),
  email: z.string().email().min(3).max(64),
  password: z.string().min(8).max(20).regex(passwordRegexp, "Password must have at least one number, one symbol, one uppercase letter, and be at least 8 characters"),
})

const formFields = [
  {label: "Nombre", name: "name", type:"text", placeholder: "Enter name..."},
  { label: "Correo electrónico", name: "email", type: "text", placeholder: "Enter email..." },
  { label: "Password", name: "password", type: "password", placeholder: "Enter password..." },
] as const


export function SignupModal() {
  const modals = useModalStore((s) => s.modals)
  const closeModal = useModalStore((s) => s.closeModal)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  async function onSubmit(payload: z.infer<typeof formSchema>) {
    const {name, email, password } = payload
    toast.error("No se pudo crear el usuario. Es posible que la dirección de correo electrónico ya esté en uso")
  }
  return (
    <GenericModal title="Signup" open={!!modals["signup"]} onOpenChange={() => closeModal("signup")}>
      <Form {...form}>
        <Logo className="mt-6 flex size-24 w-full justify-center" />
        {form.formState.errors.root?.message && <p className="mt-6 w-full text-[14px] leading-tight tracking-tight text-red-400">{form.formState.errors.root?.message}</p>}
        <form name="registerForm" id="registerForm" onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
          {formFields.map((singleField) => (
            <FormField
              key={singleField.name}
              control={form.control}
              name={singleField.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{singleField.label}</FormLabel>
                  <FormControl>
                    <Input type={singleField.type} className="text-sm" placeholder={singleField.placeholder} {...field} />
                  </FormControl>
                  <FormMessage className="text-xs font-normal text-red-400" />
                </FormItem>
              )}
            />
          ))}
        </form>
      </Form>
      <DialogFooter>
        <Button
          size="lg"
          form="registerForm"
          variant="default"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          Submit
        </Button>
      </DialogFooter>
    </GenericModal>
  )
}