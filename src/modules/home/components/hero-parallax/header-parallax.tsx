import Image from "next/image";

export function HeaderParallax() {
  return (
    <section className="relative left-0 top-0 mx-auto flex h-[--view-height] w-full items-center gap-4 bg-black p-6">
      <div className="h-40 w-96 sm:h-96">
        <Image
          src="/fhellipy.png"
          width={300}
          height={300}
          alt="Fhellipy Conceição"
          className="h-full w-full rounded-full"
        />
      </div>

      <div>
        <h1 className="text-2xl font-black md:text-7xl">
          Olá! Meu nome é Fhellipy Conceição
        </h1>
        <p className="mt-8 max-w-2xl text-base font-bold md:text-xl">
          Sou desenvolvedor web Fullstack, apaixonado por tecnologia e inovação
          que busca constantemente aperfeiçoamento em seus conhecimentos e
          habilidades técnicas.
        </p>
      </div>
    </section>
  );
}
