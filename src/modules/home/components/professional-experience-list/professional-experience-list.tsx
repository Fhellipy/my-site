import { BackgroundGradient } from "@shared/components/common";
import { ProjectsCarousel, type ImageType } from "./projects-carousel";

type Props = {
  projects: {
    description: string;
    images: ImageType[];
  }[];
};

export function ProfessionalExperienceList({ projects }: Props) {
  return (
    <section className="flex flex-col gap-4 p-4">
      <h2 className="text-2xl font-black">Experiência Profissional</h2>

      <div className="flex flex-col flex-wrap items-center justify-between gap-2 sm:flex-row sm:gap-6">
        {projects.map((project, index) => (
          <BackgroundGradient
            key={index}
            className="min-w-[250px] max-w-[350px] rounded-xl bg-zinc-900"
            containerClassName="w-fit hover:-translate-y-0"
          >
            <ProjectsCarousel projects={project.images} />

            <div className="p-4 text-justify">{project.description}</div>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
}
