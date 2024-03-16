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
}
