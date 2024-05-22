import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SignInForm from "../_components/SignInForm";
import { Shell } from "@/components/shell";
import Link from "next/link";
import getCurrentUser from "@/lib/queries/getCurrentUser";

//iniciar sesión
export default async function SigninPage() {
  const user = await getCurrentUser();
  if (user) {

  }
  return (
    <Shell className="max-w-xl">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SignInForm/>
        </CardContent>
      </Card>
      <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 hidden sm:inline-block">
              ¿No tienes una cuenta?
            </span>
            <Link
              aria-label="Sign up"
              href="/signup"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Regístrate
            </Link>
          </div>
          <Link
            aria-label="Reset password"
            href="/signin/reset-password"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Restablecer la contraseña
          </Link>
      </CardFooter>
    </Shell>
  )
}

