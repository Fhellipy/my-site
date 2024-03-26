import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer className="flex min-h-[5rem] w-full flex-col-reverse flex-wrap items-center justify-center gap-2 bg-background bg-black p-2 px-6 text-sm text-white sm:flex-row sm:flex-nowrap sm:justify-between">
      <span className="text-center">
        © 2024 Fhellipy Conceição, Inc. Todos os direitos reservados.
      </span>

      <div className="mt-1 flex items-center gap-4">
        <Link href="">
          <BsInstagram size={20} className="cursor-pointer" />
        </Link>

        <Link href="" className="cursor-pointer text-[1.2rem]">
          <BsLinkedin />
        </Link>

        <Link href="" className="cursor-pointer text-[1.2rem]">
          <BsGithub />
        </Link>

        <Link href="" className="cursor-pointer text-[1.2rem]">
          <MdEmail size={20} className="cursor-pointer" />
        </Link>
      </div>
    </footer>
  );

  return (
    <footer className="flex w-full items-center justify-between gap-4 border-t bg-secondary p-2">
      <h1 className="text-2xl text-white">Footer</h1>
    </footer>
  );
}
