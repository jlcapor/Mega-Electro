"use client"

import { useModalStore } from "@/stores/modalStore"
import { Button } from "../ui/button"
import Link from "next/link"

export default function AuthActions() {
  const openModal = useModalStore((s) => s.openModal)
  return (
    <div className="flex items-center space-x-4">
      <Button size="sm">
        <Link href="/signin">
          Iniciar sesión
          <span className="sr-only">Iniciar sesión</span>
        </Link>
      </Button>
      <Button size="sm" variant="outline">
        <Link href="/signup">
          Registrarse
          <span className="sr-only">Registrarse</span>
        </Link>
      </Button>
    </div>
  )
}
