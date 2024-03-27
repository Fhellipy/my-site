import { BackgroundGradient } from "@shared/components/common";

export function AboutMe() {
  return (
    <BackgroundGradient
      className="h-[450px] rounded-xl bg-zinc-900 p-4"
      containerClassName="p-2"
    >
      <div id="sobre" className="flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold uppercase">Sobre mim</h1>
        <p className="text-center text-xl font-semibold">
          Desenvolvedor Fullstack, apaixonado por tecnologia e inovação.
        </p>
      </div>
    </BackgroundGradient>
  );
}
