import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export function HeaderParallax() {
  return (
    <section className="bg-custom-background relative left-0 top-0 mx-auto flex h-[48rem] w-full flex-col items-center justify-center gap-8 bg-cover bg-no-repeat object-cover p-6">
      <span className="h-60 w-60 sm:h-80 sm:w-80">
        <Image
          src="/fhellipy.png"
          width={500}
          height={500}
          alt="Fhellipy Conceição"
          className="h-full w-full rounded-full object-cover"
        />
      </span>

      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-black md:text-5xl">Fhellipy Conceição</h1>
        <p className="max-w-2xl border-b pb-4 text-xl font-bold md:text-2xl">
          Desenvolvedor Web Fullstack
        </p>

        <div id="contatos" className="mt-1 flex items-center gap-2 sm:gap-4">
          <Link
            target="_blank"
            title="Instagram: @_fhellipy"
            href="https://instagram.com/_fhellipy"
            className="animate-bounce cursor-pointer rounded-full border p-4 hover:bg-muted"
          >
            <BsInstagram size={24} />
          </Link>

          <Link
            target="_blank"
            title="Linkedin: @fhellipy-c-santana"
            href="https://www.linkedin.com/in/fhellipy-c-santana"
            className="animate-bounce cursor-pointer rounded-full border p-4 hover:bg-muted"
          >
            <BsLinkedin size={24} />
          </Link>

          <Link
            target="_blank"
            title="Github: @fhellipy"
            href="https://github.com/Fhellipy"
            className="animate-bounce cursor-pointer rounded-full border p-4 hover:bg-muted"
          >
            <BsGithub size={24} />
          </Link>

          <Link
            target="_blank"
            title="Email: ffhellipyc.santana@gmail.com"
            href="mailto:ffhellipyc.santana@gmail.com"
            className="animate-bounce cursor-pointer rounded-full border p-4 hover:bg-muted"
          >
            <MdEmail size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
