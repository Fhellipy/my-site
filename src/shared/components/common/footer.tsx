import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-black px-2 py-4">
      <div className="mt-1 flex items-center gap-2 sm:gap-4">
        <Link
          target="_blank"
          href="https://instagram.com/_fhellipy"
          className="cursor-pointer rounded-full border p-4 hover:bg-muted"
        >
          <BsInstagram size={24} />
        </Link>

        <Link
          target="_blank"
          href="https://www.linkedin.com/in/fhellipy-c-santana"
          className="cursor-pointer rounded-full border p-4 hover:bg-muted"
        >
          <BsLinkedin size={24} />
        </Link>

        <Link
          target="_blank"
          href="https://github.com/Fhellipy"
          className="cursor-pointer rounded-full border p-4 hover:bg-muted"
        >
          <BsGithub size={24} />
        </Link>

        <Link
          target="_blank"
          href="mailto:ffhellipyc.santana@gmail.com"
          className="cursor-pointer rounded-full border p-4 hover:bg-muted"
        >
          <MdEmail size={24} />
        </Link>
      </div>

      <span className="text-center text-sm">
        © 2024. Fhellipy Conceição, Inc. Todos os direitos reservados.
      </span>
    </footer>
  );
}
