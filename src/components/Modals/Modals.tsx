"use client"

import dynamic from "next/dynamic"
import React from "react"
import { type Modal, useModalStore } from "@/stores/modalStore"

const LoginModal = dynamic(() => import("./LoginModal").then((m) => m.LoginModal))
const SignupModal = dynamic(() => import("./SignupModal").then((m) => m.SignupModal))

export function Modals() {
    const modals = useModalStore((s) => s.modals)
    return (
      <>
        {Object.entries(modals).map(([key, value]) => {
          return <React.Fragment key={key}>{value && <ModalsFactory key={key} type={key as Modal} />}</React.Fragment>
        })}
      </>
    )
}

function ModalsFactory({ type }: { type: Modal }) {
    switch (type) {
      case "login":
        return <LoginModal />
      case "signup":
        return <SignupModal />
      default:
        return null
    }
  }

