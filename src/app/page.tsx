"use client";

import {
  AboutMe,
  Contacts,
  HeroParallax,
  ProfessionalExperienceList,
  Tools,
} from "@modules/home";

export default function Home() {
  const items = [
    {
      id: "cards",
      content: (
        <div className="flex w-full flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <AboutMe />
          <Contacts />
        </div>
      ),
    },
    {
      id: "experiencia-profissional",
      content: <ProfessionalExperienceList />,
    },
    {
      id: "ferramentas",
      content: <Tools />,
    },
  ];

  return <HeroParallax items={items} />;
}
