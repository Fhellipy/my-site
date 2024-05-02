import { BackgroundGradient } from "@shared/components/common";

export function AboutMe() {
  return (
    <BackgroundGradient
      style={{
        backgroundImage: "url(/wolf.jpeg)",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="rounded-xl bg-zinc-900 sm:h-[450px]"
      containerClassName="p-2"
    >
      <div
        id="sobre"
        className="flex h-full w-full flex-col gap-2 overflow-auto bg-[rgba(0,0,0,0.5)] p-4"
      >
        <h2 className="text-center text-2xl font-black uppercase">Sobre mim</h2>

        <p className="text-center text-sm font-black text-secondary-foreground sm:text-justify sm:text-base">
          Sou um desenvolvedor web FullStack apaixonado por tecnologia e
          inovação. Minha formação como Técnico em Informática pelo IFBA e minha
          atual graduação em Engenharia de Software pela Unicesumar me
          proporcionaram uma base sólida para buscar constantemente
          aperfeiçoamento em meus conhecimentos e habilidades técnicas.
        </p>

        <p className="text-center text-sm font-black text-secondary-foreground sm:text-justify sm:text-base">
          Estou sempre em busca de novos desafios e oportunidades para aplicar
          as melhores práticas e tecnologias no desenvolvimento de soluções web
          excepcionais e dessa forma me tornar um desenvolvedor cada vez melhor.
        </p>

        <p className="text-center text-sm font-black text-secondary-foreground sm:text-justify sm:text-base">
          Atualmente trabalho como desenvolvedor web usando ferramentas e
          tecnologias como JavaScript, React.js, Next.js, Node.js, TypeScript,
          PHP, Golang, TailwindCss, Stitches, Styled Components, Prisma,
          PostgreSQL e Docker. Estou sempre disposto a aprender novas
          tecnologias e ferramentas, e a compartilhar meus conhecimentos com a
          comunidade.
        </p>
      </div>
    </BackgroundGradient>
  );
}
