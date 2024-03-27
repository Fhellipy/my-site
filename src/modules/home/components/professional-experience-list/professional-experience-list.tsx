import { BackgroundGradient } from "@shared/components/common";

export function ProfessionalExperienceList() {
  return (
    <section className="flex flex-col gap-4 p-4">
      <h2>Experiência Profissional</h2>

      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
        <BackgroundGradient
          className="h-[500px] rounded-xl bg-zinc-900 p-4"
          containerClassName="p-2"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Serviços</h1>
            <p className="text-xl font-semibold">
              Desenvolvedor Fullstack, apaixonado por tecnologia e inovação.
            </p>
          </div>
        </BackgroundGradient>

        <BackgroundGradient
          className="h-[500px] rounded-xl bg-zinc-900 p-4"
          containerClassName="p-2"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Serviços</h1>
            <p className="text-xl font-semibold">
              Desenvolvedor Fullstack, apaixonado por tecnologia e inovação.
            </p>
          </div>
        </BackgroundGradient>

        <BackgroundGradient
          className="h-[500px] rounded-xl bg-zinc-900 p-4"
          containerClassName="p-2"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Serviços</h1>
            <p className="text-xl font-semibold">
              Desenvolvedor Fullstack, apaixonado por tecnologia e inovação.
            </p>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
}
