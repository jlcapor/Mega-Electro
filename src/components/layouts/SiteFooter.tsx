import React from 'react'
import { Shell } from '../shell'
import { ModeToggle } from './mode-toggle'

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
        <Shell>
          <section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <ModeToggle />
          </section>
        </Shell>
    </footer>
  )
}
