import { BackgroundGradient } from "@shared/components/common";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export function Contacts() {
  return (
    <BackgroundGradient
      style={{
        backgroundImage: "url(/wolf.jpeg)",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[450px] rounded-xl bg-zinc-900"
      containerClassName="p-2"
    >
      <div
        id="contatos"
        className="flex h-full w-full flex-col gap-4 bg-[rgba(0,0,0,0.5)] p-4"
      >
        <h1 className="text-center text-2xl font-black uppercase">Contatos</h1>
        <div className="mt-1 flex flex-col gap-2 sm:gap-4">
          <Link
            target="_blank"
            href="https://instagram.com/_fhellipy"
            className="flex cursor-pointer items-center gap-2 rounded-lg p-2 font-bold hover:bg-muted"
          >
            <p className="flex w-fit items-center justify-center rounded-full border p-4">
              <BsInstagram size={24} />
            </p>
            @_fhellipy
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/fhellipy-c-santana"
            className="flex cursor-pointer items-center gap-2 rounded-lg p-2 font-bold hover:bg-muted"
          >
            <p className="flex w-fit items-center justify-center rounded-full border p-4">
              <BsLinkedin size={24} />{" "}
            </p>
            @fhellipy-c-santana
          </Link>

          <Link
            target="_blank"
            href="https://github.com/Fhellipy"
            className="flex cursor-pointer items-center gap-2 rounded-lg p-2 font-bold hover:bg-muted"
          >
            <p className="flex w-fit items-center justify-center rounded-full border p-4">
              <BsGithub size={24} />
            </p>
            @fhellipy
          </Link>

          <Link
            target="_blank"
            href="mailto:ffhellipyc.santana@gmail.com"
            className="flex cursor-pointer items-center gap-2 rounded-lg p-2 font-bold hover:bg-muted"
          >
            <p className="flex w-fit items-center justify-center rounded-full border p-4">
              <MdEmail size={24} />
            </p>
            <p className="truncate">ffhellipyc.santana@gmail.com</p>
          </Link>
        </div>
      </div>
    </BackgroundGradient>
  );
}
