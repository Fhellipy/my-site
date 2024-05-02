import { PROFESSIONAL_EXPERIENCE_DATA } from "@modules/home";
import { BackgroundGradient } from "@shared/components/common";
import { ProjectsCarousel } from "./projects-carousel";

export function ProfessionalExperienceList() {
  return (
    <section className="flex flex-col gap-6 px-6 py-8">
      <h2 className="text-2xl font-black">Experiência Profissional</h2>

      <div className="grid grid-cols-1 items-center justify-between gap-6 xl:grid-cols-2">
        {PROFESSIONAL_EXPERIENCE_DATA.map((project, index) => (
          <BackgroundGradient
            key={index}
            className="flex w-fit flex-col-reverse items-center gap-4 rounded-xl bg-black p-4 text-foreground shadow-custom md:flex-row lg:gap-6"
            containerClassName="w-fit"
          >
            <p className="h-full text-justify md:w-80">{project.resume}</p>

            <ProjectsCarousel projects={project.images} />
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
}
