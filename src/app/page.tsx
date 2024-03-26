"use client";

import { Footer, Header } from "@shared/components/common";
import { motion } from "framer-motion";
import { TriangleAlertIcon } from "lucide-react";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex h-svh flex-col items-center justify-center gap-6 bg-muted p-24 text-muted-foreground">
      <div className="flex flex-col gap-2 rounded border px-6 py-4 text-center shadow">
        <h1 className="text-2xl font-bold uppercase">Contato</h1>

        <div className="flex flex-col gap-2 p-2">
          <Link
            target="_blank"
            href="https://instagram.com/_fhellipy"
            className="flex items-center gap-1 whitespace-nowrap hover:underline"
          >
            <BsInstagram size={22} /> @_fhellipy
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/fhellipy-c-santana"
            className="flex items-center gap-1 whitespace-nowrap hover:underline"
          >
            <BsLinkedin size={22} /> @fhellipy-c-santana
          </Link>

          <Link
            target="_blank"
            href="https://github.com/Fhellipy"
            className="flex items-center gap-1 whitespace-nowrap hover:underline"
          >
            <BsGithub size={22} /> @Fhellipy
          </Link>

          <span className="flex items-center gap-1 whitespace-nowrap">
            <p className="font-semibold">Email:</p>
            <p>ffhellipyc.santana@gmail.com</p>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <TriangleAlertIcon className="h-24 w-24 text-yellow-500" />
        <h1 className="text-3xl font-bold italic text-yellow-500">
          Site em construção
        </h1>
      </div>

      <p className="text-center text-xl font-semibold">
        Tente novamente em breve!
      </p>
    </main>
  );

  return (
    <main className="flex  flex-col items-center justify-between gap-2 bg-background text-muted-foreground">
      <Header />

      <div className="flex min-h-[--view-height] w-full flex-col gap-6 p-2">
        <motion.div
          className="min-h-96 w-full bg-blue-400"
          initial={{ opacity: 0, x: 360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          className="min-h-96 w-full bg-secondary"
          initial={{ opacity: 0, x: -360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          className="min-h-96 w-full bg-secondary"
          initial={{ opacity: 0, x: -360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          className="min-h-96 w-full bg-secondary"
          initial={{ opacity: 0, x: -360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          className="min-h-96 w-full bg-secondary"
          initial={{ opacity: 0, x: -360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          className="min-h-96 w-full bg-secondary"
          initial={{ opacity: 0, x: -360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          className="min-h-96 w-full bg-secondary"
          initial={{ opacity: 0, x: -360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          className="min-h-96 w-full bg-secondary"
          initial={{ opacity: 0, x: -360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          className="min-h-96 w-full bg-secondary"
          initial={{ opacity: 0, x: -360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          className="min-h-96 w-full bg-secondary"
          initial={{ opacity: 0, x: -360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          className="min-h-96 w-full bg-secondary"
          initial={{ opacity: 0, x: -360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          className="min-h-96 w-full bg-secondary"
          initial={{ opacity: 0, x: -360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          id="about"
          className="min-h-96 w-full bg-green-800"
          initial={{ opacity: 0, x: -360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          className="min-h-96 w-full bg-secondary"
          initial={{ opacity: 0, x: -360 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>

      <Footer />
    </main>
  );
}
