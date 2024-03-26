"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shared/components/ui";
import { cn } from "@shared/utils";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function LinksHeader() {
  return (
    <div className="flex flex-col gap-2 p-1 sm:mt-0 sm:flex-row sm:items-center sm:justify-end">
      <Link
        href="#quem-sou"
        className="rounded-md p-2 font-black text-secondary-foreground hover:bg-muted-foreground"
      >
        Quem sou
      </Link>
      <Link
        href="#sobre"
        className="rounded-md p-2 font-black text-secondary-foreground hover:bg-muted-foreground"
      >
        Sobre mim
      </Link>
      <Link
        href="#servicos"
        className="rounded-md p-2 font-black text-secondary-foreground hover:bg-muted-foreground"
      >
        Serviços
      </Link>
      <Link
        href="#projetos"
        className="rounded-md p-2 font-black text-secondary-foreground hover:bg-muted-foreground"
      >
        Projetos
      </Link>
      <Link
        href="#contato"
        className="rounded-md p-2 font-black text-secondary-foreground hover:bg-muted-foreground"
      >
        Contato
      </Link>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50 flex min-h-[--header-height] w-full flex-wrap border-b bg-background text-sm sm:flex-nowrap sm:justify-start">
      <nav className="relative w-full bg-secondary px-4 py-2 md:flex md:items-center md:justify-between xl:mx-auto">
        <div className="w-full items-center justify-between sm:flex">
          <Link
            href="/"
            className="hidden flex-none object-cover py-1 pl-1 text-xl font-black sm:flex"
          >
            Fhellipy
          </Link>

          <Accordion type="single" collapsible className="w-full sm:hidden">
            <AccordionItem value="collapsible" className="w-full">
              <div className="flex w-full items-center justify-between">
                <Link href="/" className="flex-none pl-2 text-xl font-black">
                  Fhellipy
                </Link>

                <AccordionTrigger
                  className="flex justify-end p-4 text-secondary-foreground"
                  onClick={e => {
                    setOpen(
                      !(e.currentTarget.getAttribute("data-state") === "open"),
                    );
                  }}
                >
                  <MenuIcon
                    size={20}
                    className={cn({ hidden: open, block: !open })}
                  />

                  <XIcon
                    size={20}
                    className={cn({ hidden: !open, block: open })}
                  />
                </AccordionTrigger>
              </div>

              <AccordionContent className="w-full">
                <LinksHeader />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="hidden sm:flex">
            <LinksHeader />
          </div>
        </div>
      </nav>
    </header>
  );

  return (
    <header className="flex w-full items-center justify-between gap-4 border bg-background p-2">
      <h1 className="text-2xl text-white">Header</h1>

      <nav className="flex gap-2 border p-2">
        <Link href="#quem-sou">Quem sou</Link>
        <Link href="#sobre">Sobre mim</Link>
        <Link href="#servicos">Serviços</Link>
        <Link href="#projetos">Projetos</Link>
        <Link href="#contato">Contato</Link>
      </nav>
    </header>
  );
}
