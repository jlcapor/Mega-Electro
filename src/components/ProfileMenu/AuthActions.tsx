"use client"
import { Button } from "../ui/button"
import Link from "next/link"

export default function AuthActions() {
  return (
    <div className="flex items-center space-x-4">
      <Button size="sm">
        <Link href="/signin">
          Iniciar sesión
          <span className="sr-only">Iniciar sesión</span>
        </Link>
      </Button>
    </div>
  )
}
