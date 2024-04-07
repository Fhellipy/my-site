import { PROFESSIONAL_EXPERIENCE_DATA } from "@modules/home";
import { BackgroundGradient } from "@shared/components/common";
import Link from "next/link";
import { ProjectsCarousel } from "./projects-carousel";

export function ProfessionalExperienceList() {
  return (
    <section className="flex flex-col gap-4 px-6 py-8">
      <h2 className="text-2xl font-black">Experiência Profissional</h2>

      <div className="flex flex-col flex-wrap items-center justify-between gap-2 sm:flex-row sm:gap-6">
        {PROFESSIONAL_EXPERIENCE_DATA.map((project, index) => (
          <BackgroundGradient
            key={index}
            className="min-w-[250px] max-w-[400px] rounded-xl bg-zinc-900"
            containerClassName="w-fit"
          >
            <ProjectsCarousel projects={project.images} />

            <div className="flex h-[400px] flex-col items-end gap-2 p-4">
              <div className="w-full overflow-auto text-justify">
                {project.description}
              </div>

              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="w-fit whitespace-nowrap rounded border-primary bg-primary px-4 py-2 font-bold hover:opacity-80"
                >
                  Saiba mais
                </Link>
              )}
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
}
