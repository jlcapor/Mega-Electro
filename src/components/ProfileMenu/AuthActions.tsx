"use client"

import { useModalStore } from "@/stores/modalStore"
import { Button } from "../ui/button"

export default function AuthActions() {
  const openModal = useModalStore((s) => s.openModal)
  return (
    <div className="flex items-center space-x-4">
      <Button size="sm" onClick={() => openModal("login")}>
        Iniciar sesión
        <span className="sr-only">Iniciar sesión</span>
      </Button>
      <Button size="sm" variant="outline"  onClick={() => openModal("signup")}>
        Registrarse
      </Button>
    </div>
  )
}
